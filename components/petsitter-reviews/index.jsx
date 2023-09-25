import { Typography, Grid, Button, Divider, Box, Avatar } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";
import { getToken } from "../../utils/auth";

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(<StarIcon key={i} color="secondary" />);
    }
    return stars;
}

async function fetchPetsitterReviewsById(petsitterId) {
    try {
        const headers = {
            'Authorization': `${getToken()}`,
            'Content-Type': 'application/json',
        };

        const response = await fetch(`http://localhost:5500/api/reviews/petsitter/${petsitterId}`, {
            method: 'GET',
            headers: headers,
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error fetching petsitter details:', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('Error fetching petsitter details:', error);
        return null;
    }
}


export default function PetsitterReviews({ petsitterId }) {

    const [reviews, setReviews] = useState('');


    useEffect(() => {

        async function fetchReviews() {

            if (petsitterId) {
                const data = await fetchPetsitterReviewsById(petsitterId);
                if (data) {
                    setReviews(data);
                }
            }
        }

        fetchReviews();
    }, [petsitterId]);


    if (!reviews) {
        return <div>Loading...</div>;
    }
    return (
        <Grid container rowSpacing={6} direction='column' mt={2} ml={12}>
            <Grid container item spacing={2} direction='column'>
                <Grid item>
                    {renderStars(5)}
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        {reviews.length} valoraciones <span style={{ color: '#257CB0' }}> (comentarios mostrados) </span>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item direction='column' mb={5} >
                {reviews.map((review) => (
                    <Grid container item direction='row' key={review.id} mb={2} >
                    <Grid item >
                        <Avatar alt="test" src={review.petsitter.photoURL} />
                        
                    </Grid>

                    <Grid item ml={2} xs={8}>
                        <Typography variant="body1">{review.comments}</Typography>
                        <Typography variant="body1">Culiacán, Sinaloa, 23 mar - 01 abr 2023</Typography>
                    </Grid>
                    </Grid>
                ))}
            </Grid>


        </Grid>


    );
}

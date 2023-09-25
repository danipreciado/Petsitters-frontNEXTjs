
import { useEffect, useState } from 'react';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { StyledRow, StyledTable, StyledCell } from './styled-components';
import { useSelector } from 'react-redux';
import { selectSearchQuery, selectSearchType } from '../../redux/reducers';
import { useRouter } from 'next/router';
import { getToken } from '../../utils/auth';


function calculateAverageRating(cuidador) {
  if (cuidador.review && cuidador.review.length > 0) {
    const totalRating = cuidador.review.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / cuidador.review.length;
    return averageRating;
  }
  return null;
}


function renderStars(rating) {
 

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<StarIcon key={i} sx={{ color: '#0E4B5B' }} />);
  }
  return stars;
}

const columns = [
  { id: 'cuidador', label: 'Cuidador', minWidth: 100 },
  { id: 'nombre', label: 'Nombre', minWidth: 170 },
  { id: 'ciudad', label: 'Ciudad', minWidth: 100 },
  { id: 'estado', label: 'Estado', minWidth: 100 },
  { id: 'valoraciones', label: 'Valoraciones', minWidth: 170 },

];

const headers = {
  'Authorization': `${getToken()}`, 
  'Content-Type': 'application/json',
};


export default function PetsittersTable() {

  const router = useRouter(); 

  const handleRowClick = (id) => {
  
    router.push(`/cuidadores/${id}`);
  };
  const [cuidadores, setCuidadores] = useState([]);
  const [defaultCuidadores, setDefaultCuidadores] = useState([]);
  const searchQuery = useSelector(selectSearchQuery);
  const searchType = useSelector(selectSearchType);


  // Search by name
const searchByName = async (searchQuery) => {
  try {
    
    const response = await fetch(`http://localhost:5500/api/petsitters/search/${searchQuery}`, {
      method: 'GET', 
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const updatedCuidadores = data.map((cuidador) => {
        const averageRating = calculateAverageRating(cuidador);
        return { ...cuidador, valoraciones: averageRating };
      });
      setCuidadores(updatedCuidadores);
    } else {
      setCuidadores(defaultCuidadores);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


// Search by city

const searchByCity = async (searchQuery) => {
  try {
   

    const response = await fetch(`http://localhost:5500/api/petsitters/searchByCity/${searchQuery}`, {
      method: 'GET', 
      headers: headers,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const updatedCuidadores = data.map((cuidador) => {
        const averageRating = calculateAverageRating(cuidador);
        return { ...cuidador, valoraciones: averageRating };
      });
      setCuidadores(updatedCuidadores);
    } else {
      setCuidadores(defaultCuidadores);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


  useEffect(() => {
    try {
  
      fetch('http://localhost:5500/api/petsitters/list', {
        method: 'GET', 
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const updatedCuidadores = data.map((cuidador) => {
            const averageRating = calculateAverageRating(cuidador);
            return { ...cuidador, valoraciones: averageRating };
          });
          setCuidadores(updatedCuidadores);
          setDefaultCuidadores(updatedCuidadores);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);
  

  
 
  useEffect(() => {
    if (searchQuery) {
      if (searchType === 'city') {
        searchByCity(searchQuery);
      } else {
        searchByName(searchQuery);
      }
    } else {
      
      setCuidadores(defaultCuidadores);
    }
  }, [searchQuery, searchType]);

  
  const rows = cuidadores.map((cuidador, index) => ({
    id: cuidador.id,
    cuidador: cuidador.photoURL,
    nombre: cuidador.name,
    ciudad: cuidador.city.name,
    estado: cuidador.city.state.name,
    valoraciones: cuidador.valoraciones
    
  }));
  


  return (

    <TableContainer sx={{ maxHeight: 440, boxShadow: 'none', width: '90%', margin: '0 auto', overflow: 'scroll' }}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                <Typography variant='h8'>{column.label}</Typography>
              </StyledCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <StyledRow hover key={rowIndex} onClick={() => handleRowClick(row.id)}>
              {columns.map((column, columnIndex) => {
                const value = row[column.id];

                if (column.id === 'cuidador') {
                  return (
                    <TableCell key={column.id} align={column.align}>
                      <img src={value} alt={`Cuidador ${rowIndex}`} style={{ width: '50px', height: '50px' }} />
                    </TableCell>
                  );
                }

                if (column.id === 'id') {
                  return ('')
                }

                if (column.id === 'valoraciones') {
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {renderStars(value)}
                    </TableCell>
                  );
                }

                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                      ? column.format(value)
                      : value}
                  </TableCell>
                );
              })}
            </StyledRow>
      
          ))}
        </TableBody>

      </StyledTable>
    </TableContainer>

  );
}

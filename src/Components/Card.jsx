import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { whishlistData } from '../Store/Reducers/ProductSlice';

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Box flex={4} p={2}>
      <Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardHeader
            title={<>
              <Typography variant="h6" style={{ fontSize: '16px' }}>
                {data?.title}
              </Typography>
              <Typography variant="h6" style={{ fontSize: '16px' }}>
                {data?.brand}
              </Typography>
            </>
            }
            subheader={`${data?.rating} ★`}
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} onClick={() => dispatch(whishlistData(data))} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Box>
        <div className='imgCard'>
          <img src={data?.thumbnail} width={380} height={250}/>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">{data?.category}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description?.length >= 50 ? data?.description?.substring(0, 50) + "..." : data?.description}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            ₹{data?.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discount upto - {data?.discountPercentage + "%"}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">
            In Stock({data?.stock}) left
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Cards
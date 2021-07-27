import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import PropTypes from 'prop-types'
import Box from "@material-ui/core/Box";

const Rating = ({rating, color, text}) => {

    return (
        <Box display="flex" alignItems="center">
            <span style={{color}}>{rating >= 1 ? <StarIcon /> : rating >= 0.5 ? <StarHalfIcon /> : <StarBorderIcon />}</span>
            <span style={{color}}>{rating >= 2 ? <StarIcon /> : rating >= 1.5 ? <StarHalfIcon /> : <StarBorderIcon />}</span>
            <span style={{color}}>{rating >= 3 ? <StarIcon /> : rating >= 2.5 ? <StarHalfIcon /> : <StarBorderIcon />}</span>
            <span style={{color}}>{rating >= 4 ? <StarIcon /> : rating >= 3.5 ? <StarHalfIcon /> : <StarBorderIcon />}</span>
            <span style={{color}}>{rating >= 5 ? <StarIcon /> : rating >= 4.5 ? <StarHalfIcon /> : <StarBorderIcon />}</span>
            <Box component="span" ml={2}>{text}</Box>
        </Box>
    );
};

Rating.defaultProps = {
    color: '#ff9800'
}

Rating.propTypes = {
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    color: PropTypes.string
}

export default Rating;

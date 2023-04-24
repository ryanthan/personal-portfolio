import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} TransitionComponent={Zoom} placement="top" enterTouchDelay={0} arrow />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "white",
        "&:before": {
            border: "2px solid #000000"
        },
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: "black",
        maxWidth: 200,
        fontSize: "0.95rem",
        marginBottom: "10px !important",
        fontFamily: 'Raleway',
        fontWeight: "bold",
        textAlign: "center",
        border: '1px solid #000000',
        boxShadow: theme.shadows[5],
    },
}));

export {CustomTooltip};
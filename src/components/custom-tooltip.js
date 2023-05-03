import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} TransitionComponent={Zoom} placement="top" enterTouchDelay={0} arrow />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "white",
        "&:before": {
            border: "1px solid #FFFFFF"
        },
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: "black",
        maxWidth: 200,
        fontSize: "0.95rem",
        marginBottom: "10px !important",
        fontFamily: 'var(--poppins-font)',
        fontWeight: "500",
        textAlign: "center",
        border: '1px solid #FFFFFF',
        boxShadow: theme.shadows[4],
    },
}));

export {CustomTooltip};
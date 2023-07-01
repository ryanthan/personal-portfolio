import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import {MdOutlineExpandCircleDown} from "react-icons/md";
import {SoftwareTag, DesignTag, IndustryTag, PersonalTag, SchoolTag} from '@/components/tags';
import {CodeButton, DesignButton, VideoButton, OtherButton} from '@/components/buttons';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function PortfolioCard({ imageSrc, imageAlt, title, summary, moreDetails, longDescription, software, design, industry, personal, school, codeLink, designLink, videoLink, otherLink, otherLabel }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full md:flex drop-shadow-lg py-3">
      <div className={`h-52 md:h-auto md:w-[30%] bg-center bg-cover rounded-t-xl rounded-b-none md:rounded-r-none md:rounded-l-xl overflow-hidden ${imageSrc}`} alt={imageAlt}></div>
      <Card className="w-full px-4 md:px-7 !rounded-t-none !rounded-b-xl md:!rounded-r-xl md:!rounded-l-none">
        <h2 className="font-poppins text-lg md:text-2xl font-semibold pt-4 pb-2">{title}</h2>
        <div className="flex flex-wrap gap-2">
          {software=="true" && (<SoftwareTag />)}
          {design=="true" && (<DesignTag />)}
          {industry=="true" && (<IndustryTag />)}
          {personal=="true" && (<PersonalTag />)}
          {school=="true" && (<SchoolTag />)}
        </div>
        <h3 className="font-poppins text-base font-semibold pt-2 pb-1">Overview:</h3>
        <p className={`font-raleway text-base text-black ${moreDetails==="true" ? 'pb-0':'pb-4'}`}>{summary}</p>
        
        {moreDetails=="true" && (
          <CardActions disableSpacing className="p-0">
            <ExpandMore expand={expanded} onClick={handleExpandClick} title={`${expanded ? "Close Details" : "Learn More"}`} aria-label="A button to expand and close more details about the associated project.">
              <MdOutlineExpandCircleDown />
            </ExpandMore>
          </CardActions>
        )}

        {moreDetails=="true" && (
          <Collapse in={expanded} timeout={{ appear: 100, enter: 100, exit: 100 }} unmountOnExit>
            <div className="font-raleway text-base text-black">
              {longDescription}
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end py-2 px-3 text-center">
              {codeLink!="" && (<CodeButton link={codeLink} />)}
              {designLink!="" && (<DesignButton link={designLink} />)}
              {videoLink!="" && (<VideoButton link={videoLink} />)}
              {otherLink!="" && (<OtherButton link={otherLink} label={otherLabel}/>)}
            </div>
          </Collapse>
        )}
      </Card>
    </div>
  );
}

export default PortfolioCard;
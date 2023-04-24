import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import {MdOutlineExpandCircleDown} from "react-icons/md";
import {SoftwareTag, DesignTag, IndustryTag, PersonalTag, SchoolTag} from '@/components/tags';
import {CodeButton, DesignButton, VideoButton} from '@/components/buttons';

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

function PortfolioCard({ imageSrc, imageAlt, title, summary, longDescription, software, design, industry, personal, school, codeLink, designLink, videoLink }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full md:flex drop-shadow-lg py-3">
      <div className={`h-52 md:h-auto md:w-[30%] bg-center bg-cover rounded-t-xl rounded-b-none md:rounded-r-none md:rounded-l-xl overflow-hidden ${imageSrc}`} alt={imageAlt}></div>
      <Card className="w-full px-3 md:px-4 rounded-t-none rounded-b-xl md:rounded-r-xl md:rounded-l-none">
        <h3 className="font-poppins text-lg md:text-2xl font-bold pt-4 pb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {software=="true" && (<SoftwareTag />)}
          {design=="true" && (<DesignTag />)}
          {industry=="true" && (<IndustryTag />)}
          {personal=="true" && (<PersonalTag />)}
          {school=="true" && (<SchoolTag />)}
        </div>
        <h4 className="font-poppins text-sm md:text-base font-bold pt-2 pb-1">Overview:</h4>
        <p className="font-raleway text-sm md:text-base text-black">{summary}</p>
        
        <CardActions disableSpacing className="p-0">
          <ExpandMore expand={expanded} onClick={handleExpandClick} title={`${expanded ? "Close Details" : "Learn More"}`}>
            <MdOutlineExpandCircleDown />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <p className="font-raleway text-sm md:text-base text-black">
            {longDescription}
          </p>

          <div className="flex flex-wrap gap-2 justify-center py-2 px-3 text-center">
            {codeLink!="" && (<CodeButton link={codeLink} />)}
            {designLink!="" && (<DesignButton link={designLink} />)}
            {videoLink!="" && (<VideoButton link={videoLink} />)}
          </div>
        </Collapse>
      </Card>
    </div>
  );
}

export default PortfolioCard;
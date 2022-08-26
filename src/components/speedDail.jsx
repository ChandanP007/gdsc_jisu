import React from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GDSC_LOGO from '../assets/jisu_gdsc.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ShareIcon from '@mui/icons-material/Share';
import  RssFeedIcon  from '@mui/icons-material/RssFeed';



function SpeedDail() {

    const actions = [
        { icon: <GitHubIcon />, name: 'Github' , url: 'https://github.com/gdsc-jisu' },
        { icon: <LinkedInIcon />, name: 'LinkedIn' , url: 'https://www.linkedin.com/company/gdsc-jisu' },
        { icon: <TwitterIcon />, name: 'Twitter' , url: 'https://twitter.com/gdsc_jisu' },
        { icon: <FacebookIcon />, name: 'FaceBook', url: 'https://www.facebook.com/groups/gdscjisu' },
        { icon: <InstagramIcon />, name: 'Instagram', url: 'https://www.instagram.com/gdsc_jisu/' },
        { icon: <YouTubeIcon />, name: 'YouTube', url: 'https://www.youtube.com' },
        { icon: <RssFeedIcon />, name: 'LinkTree', url: 'https://linktr.ee/gdsc_jisu' },
      ];

      
  return (
    <>
    <SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ position: 'fixed', bottom: 16, left: 16 }}
  icon={<ShareIcon />}
>
  {actions.map((action) => (
    <SpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      onClick={() => {
        window.open(action.url, '_blank');
      }
      }
    />
  ))}
</SpeedDial>
    </>
  )
}

export default SpeedDail
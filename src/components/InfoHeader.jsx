
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container:{
        background: '#334756',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        height: 48,
        marginBottom: 30,
    },
    text:{
        fontSize: 14,
        marginLeft: 50,
       // font-family: 'Roboto', sans-serif
       fontWeight: 300
       
    },
    logo:{
      height: 34  
    }
})

const InfoHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <Box className={classes.container}>
            
            <Typography className={classes.text}>For the best experience use app on your smartphone</Typography>
            <Box style={{marginLeft:'auto'}}>
                <img src={appleStore} alt="apple" className={classes.logo}/>
                <img src={googleStore} alt="google" className={classes.logo}/>
            </Box>
        </Box>

    )
}
export default InfoHeader;
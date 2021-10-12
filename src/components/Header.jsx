import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";
import { Menu} from "@material-ui/icons";
const useStyles = makeStyles({
    header:{
    background: '#F0A500',
    height: 70,
    paddingRight: 70,
    },
    head:{
        margin: 'auto',
        //TextFormat: 'solid'
        //color: '#082032',
        fontWeight: 900,
        fontSize: '1.3rem',
       fontFamily: 'Akronim'
    },
    menu:{
        //paddingRight: 70
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header}>
            <Toolbar>
              <Menu className={classes.menu}/>
               <Typography className={classes.head}>Headlines-Checklist</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
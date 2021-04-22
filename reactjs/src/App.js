import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import axios from "axios";
import React, {useState, useEffect} from 'react';


export default function App() {
    const classes = useStyles();
    const [dados, setData] = useState([]);
    const [token, setToken] = useState('');


    const authentication = () => {

        axios
            .post('http://localhost:8081/authorization/api', {
                "user": "infoGlobo",
                "password": "12321"
            })
            .then(resp => {
                const authoToken = resp.data.token;
                process.env.TOKEN = authoToken;
                setToken(authoToken);
            })
            .catch(error => {
                console.log(error)
            })

    }


    const getNewsInformation = () => {
        axios
            .get('http://localhost:8081/noticias', {
                headers: {
                    authorization: token
                }
            })
            .then(resp => {
                setData(resp.data);
            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {

        authentication();

        if (token) {
            getNewsInformation();
        }


    });

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >

                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        O Globo
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>

                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            <div>{dados.map((elem) =>

                <ul style={{padding: 40}}>
                    <h1 style={{textAlign: "center", fontFamily: 'Roboto'}}>{elem.titulo}</h1>
                    <span style={{fontFamily: 'Roboto', fontSize: 18}}>{elem.conteudo}</span>
                    <p>Data do artigo: {elem.data_publicacao}</p>
                </ul>
            )}</div>
        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


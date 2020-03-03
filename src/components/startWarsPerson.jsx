import React, { Component } from 'react';
import ModalComponent from './componentModal.jsx';
import { FaFacebookSquare, FaInstagram, FaWhatsappSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHanger } from "react-icons/gi";
import { data } from './person.json'
import firebase from "firebase";
import { withRouter } from 'react-router-dom';
import './satr.css';

class startWar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentModal: false,
            date: data,
        }
    }

    contenModalWhite = (item) => {
        this.setState({
            contentModal: true,
            datos: item
        })
    }

    alertClose = () => {
        this.setState({
            contentModal: false,

        })
    }

    goSessionLady = () => {
        this.props.history.push("/LedySesion");
    }

    /*     componentWillMount (){
            const datos = firebase.database().ref().child('data');
            datos.on('value', (snhap)=>{
              this.setState({
                   date: snhap.val()  
                 })
                  console.log(this.state.date)
             })
      
        } */
    render() {
        return (
            <div className="content-map">
                <div className="content-title">
                    <div className="content-main-log">
                        <img className="content-image" src={require('../components/images/bol.png')} />
                        <img className="content-imageText" src={require('../components/images/n.png')} />
                    </div>
                    <div className="content-enlace">
                        <img className="content-imageText" src={require('../components/images/redes.png')} />
                        <a target="_blank" href="https://www.facebook.com/butiqueoros.butique"> <FaFacebookSquare className="facebook" /></a>
                        <a target="_blank" href="https://www.instagram.com/boutique.oros/"><FaInstagram className="instagran" /></a>
                        <a href="https://api.whatsapp.com/send?phone=573503660515&amp;text=Hola%20bienvenido%20a%20butiqueOros%20cuentanos%20en%20en%20que%20podemos%20servirte" target="_blank"><FaWhatsappSquare className="wsapp" /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UC2GXAPerZ6XMr1NzLealntw?view_as=subscriber"><FaYoutubeSquare className="youtube" /></a>
                        <div className="sesionText" onClick={() => this.goSessionLady()}>Sección Damas</div>
                    </div>
                </div>
                {this.state.date ?
                    this.state.date.map(item => {
                        return <div className={'content-main'} key={item.id}>
                            <div className="content-display">
                                <div className="content-image-main">
                                    <div className="content-tag">
                                        <GiHanger className="git-main" />
                                    </div>
                                    <img className="img-start" src={item.image} onClick={() => this.contenModalWhite(item)} />
                                    <div className="content-button-max">
                                        <div
                                            id="button"
                                            onClick={() => this.contenModalWhite(item)}
                                        >
                                            <img className="button-detail" src={require('../components/images/detail.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    : null
                }

                {
                    this.state.contentModal ?
                        <ModalComponent
                            dataprops={this.state.datos}
                            alertClose={() => this.alertClose()}
                        />
                        : null
                }


            </div>
        );
    }

}
export default withRouter(startWar)

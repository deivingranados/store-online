import React, { Component } from 'react';
import { Button, Modal, Carousel, FormControl } from 'react-bootstrap';
import Payupay from './pay';
import { GiPriceTag, GiHangingSign } from "react-icons/gi";
import './satr.css';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            dataprops: this.props.dataprops,
            contentModal: true,
            contentModalTwo: false,
            emailUser: null,
            errorEmail: "",
            errorName: "",
            errorTalla: "",
            errorTele: "",
            title: "Butique oros",
            name: "",
            infoUser: "Para poder validar la compra nos debes proporcionar los siguientes datos ",
            talla: "",
        }
    }

    handleCloseDelete = () => {
        this.props.alertClose()
    }
    validateEmail(email) {
        let reg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        return reg.test(email);
    }

    validateName(nombre) {
        let regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

        return regex.test(nombre);
    }

    validateForm = () => {
        let result = true;
        if (!this.validateEmail(this.state.emailUser)) {
            this.setState({ errorEmail: "un email valido porfavor" })
            result = false;
        }

        if (!this.validateName(this.state.name.trim())) {
            this.setState({ errorName: "nombre porfavor" });
            result = false;
        }
        if (!this.state.talla.length) {
            this.setState({ errorTalla: "talla porfavor" });
            result = false;
        }
        return result;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    goPaymet = () => {
        const { emailUser, name, talla } = this.state;
        if (this.validateForm()) {
            this.setState({
                contentModal: false,
                contentModalTwo: true,
                emailUser: emailUser,
                name: name,
                talla: talla
            })
            console.log(this.state.emailUser)
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.contentModal ?
                        <Modal show={true} onHide={this.handleClose}>
                            <Modal.Body>
                                <div className="body-modla">
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.dataprops.image}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.dataprops.image_1}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={this.state.dataprops.image_2}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                    <GiHangingSign className="git" />
                                    <div className="text-infor-modal-precio">
                                        {"$" + " " + this.state.dataprops.precio + " " + "COP"}
                                        <GiPriceTag className="git" />
                                    </div>
                                    <p className="text-email">{this.state.infoUser}</p>
                                    <FormControl
                                        className="input-registerform"
                                        id="emailUser"
                                        autoFocus
                                        type="email"
                                        value={this.state.emailUser}
                                        placeholder="Email"
                                        onChange={this.handleChange} />
                                    <p className="text-email-red">{this.state.errorEmail}</p>
                                    <FormControl
                                        className="input-registerform"
                                        id="name"
                                        autoFocus
                                        type="name"
                                        value={this.state.name}
                                        placeholder="Nombre completo"
                                        onChange={this.handleChange} />
                                    <p className="text-email-red-name">{this.state.errorName}</p>
                                    <FormControl
                                        className="input-registerform"
                                        id="talla"
                                        autoFocus
                                        type="email"
                                        value={this.state.talla}
                                        placeholder="Talla  por favor"
                                        onChange={this.handleChange} />
                                    <p className="text-email-red">{this.state.errorTalla}</p>
                                </div>

                            </Modal.Body>
                            <Modal.Body><p className="text-infor-modal">{this.state.dataprops.descripcion}</p></Modal.Body>
                            <Modal.Footer>
                                <button id="button-pay" class="btn btn-warning" onClick={() => this.goPaymet()}>Comprar</button>
                                <button id="button-close" class="btn btn-warning" onClick={() => this.handleCloseDelete()}>Cerrar</button>
                            </Modal.Footer>
                        </Modal>
                        : null
                }
                {
                    this.state.contentModalTwo ?
                        <Modal show={true} onHide={this.handleClose}>
                            <div className="content-logo-pay"><img width="40px" height="40px" src={require('../components/images/bol.png')} /></div>
                            <div className="body-modla">
                                <Payupay
                                    {...this.props}
                                    dataprops={this.state.dataprops}
                                    emails={this.state.emailUser}
                                    talla={this.state.talla}
                                    name={this.state.name}
                                />
                            </div>
                            <Modal.Footer>
                                <Button id="button-close" onClick={() => this.handleCloseDelete()}>Cancelar</Button>
                            </Modal.Footer>
                        </Modal>
                        : null
                }
            </div>
        )
    }
}
export default ModalComponent

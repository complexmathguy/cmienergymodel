import React, { Component } from 'react'
import ExcBBCService from '../services/ExcBBCService';

class UpdateExcBBCComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
                efdmax: '',
                efdmin: '',
                k: '',
                switch: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                vrmax: '',
                vrmin: '',
                xe: ''
        }
        this.updateExcBBC = this.updateExcBBC.bind(this);

        this.changeefdmaxHandler = this.changeefdmaxHandler.bind(this);
        this.changeefdminHandler = this.changeefdminHandler.bind(this);
        this.changekHandler = this.changekHandler.bind(this);
        this.changeswitchHandler = this.changeswitchHandler.bind(this);
        this.changet1Handler = this.changet1Handler.bind(this);
        this.changet2Handler = this.changet2Handler.bind(this);
        this.changet3Handler = this.changet3Handler.bind(this);
        this.changet4Handler = this.changet4Handler.bind(this);
        this.changevrmaxHandler = this.changevrmaxHandler.bind(this);
        this.changevrminHandler = this.changevrminHandler.bind(this);
        this.changexeHandler = this.changexeHandler.bind(this);
    }

    componentDidMount(){
        ExcBBCService.getExcBBCById(this.state.id).then( (res) =>{
            let excBBC = res.data;
            this.setState({
                efdmax: excBBC.efdmax,
                efdmin: excBBC.efdmin,
                k: excBBC.k,
                switch: excBBC.switch,
                t1: excBBC.t1,
                t2: excBBC.t2,
                t3: excBBC.t3,
                t4: excBBC.t4,
                vrmax: excBBC.vrmax,
                vrmin: excBBC.vrmin,
                xe: excBBC.xe
            });
        });
    }

    updateExcBBC = (e) => {
        e.preventDefault();
        let excBBC = {
            excBBCId: this.state.id,
            efdmax: this.state.efdmax,
            efdmin: this.state.efdmin,
            k: this.state.k,
            switch: this.state.switch,
            t1: this.state.t1,
            t2: this.state.t2,
            t3: this.state.t3,
            t4: this.state.t4,
            vrmax: this.state.vrmax,
            vrmin: this.state.vrmin,
            xe: this.state.xe
        };
        console.log('excBBC => ' + JSON.stringify(excBBC));
        console.log('id => ' + JSON.stringify(this.state.id));
        ExcBBCService.updateExcBBC(excBBC).then( res => {
            this.props.history.push('/excBBCs');
        });
    }

    changeefdmaxHandler= (event) => {
        this.setState({efdmax: event.target.value});
    }
    changeefdminHandler= (event) => {
        this.setState({efdmin: event.target.value});
    }
    changekHandler= (event) => {
        this.setState({k: event.target.value});
    }
    changeswitchHandler= (event) => {
        this.setState({switch: event.target.value});
    }
    changet1Handler= (event) => {
        this.setState({t1: event.target.value});
    }
    changet2Handler= (event) => {
        this.setState({t2: event.target.value});
    }
    changet3Handler= (event) => {
        this.setState({t3: event.target.value});
    }
    changet4Handler= (event) => {
        this.setState({t4: event.target.value});
    }
    changevrmaxHandler= (event) => {
        this.setState({vrmax: event.target.value});
    }
    changevrminHandler= (event) => {
        this.setState({vrmin: event.target.value});
    }
    changexeHandler= (event) => {
        this.setState({xe: event.target.value});
    }

    cancel(){
        this.props.history.push('/excBBCs');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update ExcBBC</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> efdmax: </label>
                                            #formFields( $attribute, 'update')
                                            <label> efdmin: </label>
                                            #formFields( $attribute, 'update')
                                            <label> k: </label>
                                            #formFields( $attribute, 'update')
                                            <label> switch: </label>
                                            #formFields( $attribute, 'update')
                                            <label> t1: </label>
                                            #formFields( $attribute, 'update')
                                            <label> t2: </label>
                                            #formFields( $attribute, 'update')
                                            <label> t3: </label>
                                            #formFields( $attribute, 'update')
                                            <label> t4: </label>
                                            #formFields( $attribute, 'update')
                                            <label> vrmax: </label>
                                            #formFields( $attribute, 'update')
                                            <label> vrmin: </label>
                                            #formFields( $attribute, 'update')
                                            <label> xe: </label>
                                            #formFields( $attribute, 'update')
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateExcBBC}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateExcBBCComponent

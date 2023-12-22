import React, { Component } from 'react'
import SteadyStateHypothesisVersionService from '../services/SteadyStateHypothesisVersionService';

class UpdateSteadyStateHypothesisVersionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
                baseUML: '',
                baseURI: '',
                date: '',
                differenceModelURI: '',
                entsoeUML: '',
                entsoeURI: '',
                modelDescriptionURI: '',
                namespaceRDF: '',
                namespaceUML: '',
                shortName: ''
        }
        this.updateSteadyStateHypothesisVersion = this.updateSteadyStateHypothesisVersion.bind(this);

        this.changebaseUMLHandler = this.changebaseUMLHandler.bind(this);
        this.changebaseURIHandler = this.changebaseURIHandler.bind(this);
        this.changedateHandler = this.changedateHandler.bind(this);
        this.changedifferenceModelURIHandler = this.changedifferenceModelURIHandler.bind(this);
        this.changeentsoeUMLHandler = this.changeentsoeUMLHandler.bind(this);
        this.changeentsoeURIHandler = this.changeentsoeURIHandler.bind(this);
        this.changemodelDescriptionURIHandler = this.changemodelDescriptionURIHandler.bind(this);
        this.changenamespaceRDFHandler = this.changenamespaceRDFHandler.bind(this);
        this.changenamespaceUMLHandler = this.changenamespaceUMLHandler.bind(this);
        this.changeshortNameHandler = this.changeshortNameHandler.bind(this);
    }

    componentDidMount(){
        SteadyStateHypothesisVersionService.getSteadyStateHypothesisVersionById(this.state.id).then( (res) =>{
            let steadyStateHypothesisVersion = res.data;
            this.setState({
                baseUML: steadyStateHypothesisVersion.baseUML,
                baseURI: steadyStateHypothesisVersion.baseURI,
                date: steadyStateHypothesisVersion.date,
                differenceModelURI: steadyStateHypothesisVersion.differenceModelURI,
                entsoeUML: steadyStateHypothesisVersion.entsoeUML,
                entsoeURI: steadyStateHypothesisVersion.entsoeURI,
                modelDescriptionURI: steadyStateHypothesisVersion.modelDescriptionURI,
                namespaceRDF: steadyStateHypothesisVersion.namespaceRDF,
                namespaceUML: steadyStateHypothesisVersion.namespaceUML,
                shortName: steadyStateHypothesisVersion.shortName
            });
        });
    }

    updateSteadyStateHypothesisVersion = (e) => {
        e.preventDefault();
        let steadyStateHypothesisVersion = {
            steadyStateHypothesisVersionId: this.state.id,
            baseUML: this.state.baseUML,
            baseURI: this.state.baseURI,
            date: this.state.date,
            differenceModelURI: this.state.differenceModelURI,
            entsoeUML: this.state.entsoeUML,
            entsoeURI: this.state.entsoeURI,
            modelDescriptionURI: this.state.modelDescriptionURI,
            namespaceRDF: this.state.namespaceRDF,
            namespaceUML: this.state.namespaceUML,
            shortName: this.state.shortName
        };
        console.log('steadyStateHypothesisVersion => ' + JSON.stringify(steadyStateHypothesisVersion));
        console.log('id => ' + JSON.stringify(this.state.id));
        SteadyStateHypothesisVersionService.updateSteadyStateHypothesisVersion(steadyStateHypothesisVersion).then( res => {
            this.props.history.push('/steadyStateHypothesisVersions');
        });
    }

    changebaseUMLHandler= (event) => {
        this.setState({baseUML: event.target.value});
    }
    changebaseURIHandler= (event) => {
        this.setState({baseURI: event.target.value});
    }
    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changedifferenceModelURIHandler= (event) => {
        this.setState({differenceModelURI: event.target.value});
    }
    changeentsoeUMLHandler= (event) => {
        this.setState({entsoeUML: event.target.value});
    }
    changeentsoeURIHandler= (event) => {
        this.setState({entsoeURI: event.target.value});
    }
    changemodelDescriptionURIHandler= (event) => {
        this.setState({modelDescriptionURI: event.target.value});
    }
    changenamespaceRDFHandler= (event) => {
        this.setState({namespaceRDF: event.target.value});
    }
    changenamespaceUMLHandler= (event) => {
        this.setState({namespaceUML: event.target.value});
    }
    changeshortNameHandler= (event) => {
        this.setState({shortName: event.target.value});
    }

    cancel(){
        this.props.history.push('/steadyStateHypothesisVersions');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update SteadyStateHypothesisVersion</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> baseUML: </label>
                                            #formFields( $attribute, 'update')
                                            <label> baseURI: </label>
                                            #formFields( $attribute, 'update')
                                            <label> date: </label>
                                            #formFields( $attribute, 'update')
                                            <label> differenceModelURI: </label>
                                            #formFields( $attribute, 'update')
                                            <label> entsoeUML: </label>
                                            #formFields( $attribute, 'update')
                                            <label> entsoeURI: </label>
                                            #formFields( $attribute, 'update')
                                            <label> modelDescriptionURI: </label>
                                            #formFields( $attribute, 'update')
                                            <label> namespaceRDF: </label>
                                            #formFields( $attribute, 'update')
                                            <label> namespaceUML: </label>
                                            #formFields( $attribute, 'update')
                                            <label> shortName: </label>
                                            #formFields( $attribute, 'update')
                                        </div>
                                        <button className="btn btn-success" onClick={this.updateSteadyStateHypothesisVersion}>Save</button>
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

export default UpdateSteadyStateHypothesisVersionComponent
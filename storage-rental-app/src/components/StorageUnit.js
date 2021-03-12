import React from 'react'
import { connect } from 'react-redux'

import {deleteStorageUnit} from '../actions/deleteStorageUnit'
import {likeStorageUnit} from '../actions/likeStorageUnit'
import {updateStorageUnit} from '../actions/updateStorageUnit'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class StorageUnit extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            id: props.data.id,
            likes: props.data.likes,
            available: props.data.available
        }
    }

    handleDelete = (storageUnit) => {
        this.props.deleteStorageUnit(storageUnit.data.id)
    }

    renderAvailable = () => {
        if (this.props.data.available == true) {
            return <Button variant="success">yes</Button>
        } else {
            return <Button variant="danger">no</Button>
        }
    } // - Available: {renderAvailable()}

    addLike = (like) =>{
        let newlikes = like + 1
        this.setState({likes: newlikes}, () => this.props.likeStorageUnit(this.state))
    }

    toggleAvailable = (available) =>{
        if (available === true) {
            this.setState({available: false}, () => this.props.updateStorageUnit(this.state))
        } else {
            this.setState({available: true}, () => this.props.updateStorageUnit(this.state))
        }
    }

    render(){
        return(
        <div className="storage-unit">
            <p>Unit Number: {this.props.data.unit_number} - 
            <ButtonGroup >
                <Button onClick={()=> this.handleDelete(this.props)}>delete</Button>
                <Button onClick={()=> this.addLike(this.props.data.likes)}>like</Button>
                <Button onClick={()=> this.toggleAvailable(this.props.data.available)}>toggle available</Button>
            </ButtonGroup>
             Likes: {this.props.data.likes} - Available: {this.renderAvailable()}</p>
            
        </div>
        )
    }
}

export default connect(null, {deleteStorageUnit, updateStorageUnit, likeStorageUnit})(StorageUnit)
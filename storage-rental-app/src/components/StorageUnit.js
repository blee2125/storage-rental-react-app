import React from 'react'
import { connect } from 'react-redux'

import {deleteStorageUnit} from '../actions/deleteStorageUnit'
import {likeStorageUnit} from '../actions/likeStorageUnit'
import {updateStorageUnit} from '../actions/updateStorageUnit'
import Button from 'react-bootstrap/Button'

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
        //console.log(storageUnit.text.unit_number)
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
        //console.log(like)
        let newlikes = like + 1
        //console.log(newlikes)
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
        <div>
            <p>Unit Number: {this.props.data.unit_number} - <button onClick={()=> this.handleDelete(this.props)}>delete</button>
            <button onClick={()=> this.addLike(this.props.data.likes)}>like</button>
            <button onClick={()=> this.toggleAvailable(this.props.data.available)}>toggle available</button> Likes: {this.props.data.likes} - Available: {this.renderAvailable()}</p>
            
        </div>
        )
    }
}

export default connect(null, {deleteStorageUnit, updateStorageUnit, likeStorageUnit})(StorageUnit)
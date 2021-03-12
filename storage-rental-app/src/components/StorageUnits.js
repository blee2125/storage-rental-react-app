import React from 'react'
import StorageUnit from '../components/StorageUnit'
import Button from 'react-bootstrap/Button'

class StorageUnits extends React.Component{

    state={
        unitArray: this.props.data.storageUnits
    }

    componentDidMount(){
        this.setState({unitArray: this.props.data.storageUnits})
    }
    
    renderStorageUnits = (units) => units.map((unit, id) => <StorageUnit key={id} data={unit} />)

    sortAbc = () => {
        const {unitArray} = this.state
        let sortUnits = unitArray.sort(function(a,b){
            return a.unit_number.localeCompare(b.unit_number);
        })
        this.setState({unitArray: sortUnits})
    }

    sortedByLikes = this.props.data.storageUnits.sort(function(a,b){
        return b.likes - a.likes
    })

    render(){
        return(
            <div>
                Storage Unit Index<br></br>
                <Button onClick={() => this.sortAbc(this.state)}>Sort by abc</Button>
                {this.renderStorageUnits(this.props.data.storageUnits)}

            </div>
        )
    }
}

export default (StorageUnits)
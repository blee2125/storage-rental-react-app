import React from 'react'
import StorageUnit from '../components/StorageUnit'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


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

    sortAvail = () => {
        const {unitArray} = this.state
        let sortUnits = unitArray.sort(function(a,b){
            return (a.available === b.available)? 0 : a.available? -1 : 1;
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
                <ButtonGroup >
                    <Button onClick={() => this.sortAbc(this.state)}>Sort by Unit</Button>
                    <Button onClick={() => this.sortAvail(this.state)}>Sort by Available</Button>
                </ButtonGroup>
                {this.renderStorageUnits(this.props.data.storageUnits)}

            </div>
        )
    }
}

export default (StorageUnits)
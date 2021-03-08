import React from 'react'
import StorageUnit from '../components/StorageUnit'

class RentalUnits extends React.Component{

    state={
        unitArray: this.props.data.storageUnits
    }

    componentDidMount(){
        //console.log('rental units component did mount')
        this.setState({unitArray: this.props.data.storageUnits})
    }
    
    renderStorageUnits = (something) => something.map((unit, id) => <StorageUnit key={id} text={unit} />)

    //sorts
    sortAbc = () => {
        const {unitArray} = this.state
        let sortUnits = unitArray.sort(function(a,b){
            return a.unit_number.localeCompare(b.unit_number);
        })
        this.setState({unitArray: sortUnits})
    }

    render(){
        return(
            <div>
                Index
                <button onClick={() => this.sortAbc(this.state)}>Sort by abc</button>
                {this.renderStorageUnits(this.props.data.storageUnits)}

            </div>
        )
    }
}

export default (RentalUnits)
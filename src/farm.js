import React from 'react';

class Farm extends React.Component{
    render(){
        const animalNameOne = this.props.match.params.animalNameOne;
        const animalNameTwo = this.props.match.params.animalNameTwo;
        const theUrlOne = `https://source.unsplash.com/1600x900/?${animalNameOne}`
        const theUrlTwo = `https://source.unsplash.com/1600x900/?${animalNameTwo}`
        console.log(animalNameOne)
        if(this.props.match.params.animalNameOne === undefined){
            return(
                <h1>enter two animals in the url. e.g. "farm/AnimalOne/AnimalTwo"</h1>
            )
        }
        return(
            <div>
                <h1>The farm has a {animalNameOne} and a {animalNameTwo}</h1>
                <img src={theUrlOne} />
                <img src={theUrlTwo} />
            </div>
        )
    }
}

export default Farm
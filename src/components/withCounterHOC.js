import React from 'react'

const withCounterHOC2 = WrappedComponent => {
    class WithCounterHOC2 extends React.Component {
        constructor(props) {
            super(props)
    
            this.state =  {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState( prevState => {
                return {count: prevState.count + 1}
            }
    
            );
        }
        
        render() {
            const {count} =  this.state;
            return <WrappedComponent ></WrappedComponent>
        }
    }
}

export default withCounterHOC2;
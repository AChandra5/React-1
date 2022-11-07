import ChildComponent from './ChildComponent';
import './Component2.css'

function Component2(){
    return (
        <div className="Component2">
        <h2>Component 2</h2>
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique inventore dolore delectus, voluptatum exercitationem repellendus iure ducimus? Ea dolore officiis laborum possimus aliquam eligendi. Non animi necessitatibus officia delectus asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ipsum unde. Numquam perferendis dignissimos in tenetur accusantium quo reiciendis ducimus. Laborum sint ullam, saepe eligendi fugiat iure reiciendis eum expedita?</p>
            <ChildComponent />
        </div>
    )
    
}
export default Component2;
import './../styles/Cart.css';
import Counter from './Counter';

function HandleDisplay(props){
    let cost = 0;
    return (
    <div>
        <th>Name</th>
        <th>Cost</th>
        <th>Count</th>
        <th>Total Cost</th>

    {   props.items.map(m=>(
      
        <tr>
        
        <td>{m.name}</td>
        <td>{m.cost}</td>
        <td>{m.count}</td>
        <td>{m.cost*m.count}</td>
        <Counter name={m.name} />
        </tr>
        
        
    ))

    }

   
    </div>

       

    
    )

}
export default HandleDisplay;

function HandleDisplay(props){
    return (
    props.items.map(obj => (
    <tr>
        <td>{obj.name}</td>
        <td>{obj.count}</td>
        <td>{obj.cost}</td>
    </tr>
    ))
    )
}
export default HandleDisplay;
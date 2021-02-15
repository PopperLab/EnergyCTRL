import Button from '@material-ui/core/Button'



export const ItemCount = ({stock, onAdd, onResta, contador}) => {

    return(
        <>
            <Button variant="outlined" color="default" onClick={ () => {onResta(stock)}}>-</Button>
            <b>{contador}</b>
            <Button variant="outlined" color="default"  onClick={ () => {onAdd(stock)} }>+</Button>


            <div>
            <Button variant="contained" color="primary">Comprar</Button>
            </div>

        </>
    )
}
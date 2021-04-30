const ItemCard = ({item, checkedItem}) => {

    return (
        <>
            {item.state ? <div className='card-item complete' id={item.id}>
                    <img src={item.url} alt={item.id}/>
                </div>
                : <div className='card-item' onClick={checkedItem} id={item.id}>
                    <img className={item.check ? 'enable' : 'disable'} src={item.url} alt={item.id}/>
                </div>}
        </>
    );
};

export default ItemCard;
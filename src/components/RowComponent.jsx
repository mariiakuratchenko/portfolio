function RowComponent({ itemObject }){

    return(
        <div className="row">
            <img src={itemObject.imagePath} alt={itemObject.title} />
            <div className="text-content">
                <h3>{itemObject.title}</h3>
                <p>{itemObject.text}</p>
            </div>
        </div>
    );
}

export default RowComponent;
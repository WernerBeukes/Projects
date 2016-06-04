function ItemType(name, imgUrl, shortDescription, longDescription, price, ratingOutOf5) {
    var name = name;
    var imgUrl = imgUrl;
    var shortDescription = shortDescription;
    var longDescription = longDescription;
    var price = price;
    var ratingOutOf5 = ratingOutOf5;
    
    return {
        'Name' : name,
        'ImageURL' : imgUrl,
        'ShortDescription' : shortDescription,
        'LongDescription' : longDescription,
        'Price' : price,
        'Rating' : ratingOutOf5
    };
}
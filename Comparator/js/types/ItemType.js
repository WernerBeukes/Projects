function ItemType(name, imgUrl, shortDescription, longDescription, price, ratingOutOf5, inCompareList) {
    return {
        'Name' : name,
        'ImageURL' : imgUrl,
        'ShortDescription' : shortDescription,
        'LongDescription' : longDescription,
        'Price' : price,
        'Rating' : ratingOutOf5,
        'InCompareList' : inCompareList
    };
}
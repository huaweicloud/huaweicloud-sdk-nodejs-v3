

export class FavouriteResponseResult {
    public favorite?: boolean;
    public constructor() { 
    }
    public withFavorite(favorite: boolean): FavouriteResponseResult {
        this['favorite'] = favorite;
        return this;
    }
}
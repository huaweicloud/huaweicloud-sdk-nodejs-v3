

export class IsFavoriteItem {
    private 'is_favorite'?: boolean;
    public constructor() { 
    }
    public withIsFavorite(isFavorite: boolean): IsFavoriteItem {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
}
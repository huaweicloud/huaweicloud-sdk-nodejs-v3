

export class FavoritesConfigurations {
    private 'favorites_status'?: number;
    private 'favorites_redirection_type'?: number;
    private 'favorites_storage_path'?: string;
    private 'favorites_relative_path'?: string;
    private 'favorites_exclusive_rights'?: number;
    private 'favorites_move_contents'?: number;
    private 'favorites_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withFavoritesStatus(favoritesStatus: number): FavoritesConfigurations {
        this['favorites_status'] = favoritesStatus;
        return this;
    }
    public set favoritesStatus(favoritesStatus: number  | undefined) {
        this['favorites_status'] = favoritesStatus;
    }
    public get favoritesStatus(): number | undefined {
        return this['favorites_status'];
    }
    public withFavoritesRedirectionType(favoritesRedirectionType: number): FavoritesConfigurations {
        this['favorites_redirection_type'] = favoritesRedirectionType;
        return this;
    }
    public set favoritesRedirectionType(favoritesRedirectionType: number  | undefined) {
        this['favorites_redirection_type'] = favoritesRedirectionType;
    }
    public get favoritesRedirectionType(): number | undefined {
        return this['favorites_redirection_type'];
    }
    public withFavoritesStoragePath(favoritesStoragePath: string): FavoritesConfigurations {
        this['favorites_storage_path'] = favoritesStoragePath;
        return this;
    }
    public set favoritesStoragePath(favoritesStoragePath: string  | undefined) {
        this['favorites_storage_path'] = favoritesStoragePath;
    }
    public get favoritesStoragePath(): string | undefined {
        return this['favorites_storage_path'];
    }
    public withFavoritesRelativePath(favoritesRelativePath: string): FavoritesConfigurations {
        this['favorites_relative_path'] = favoritesRelativePath;
        return this;
    }
    public set favoritesRelativePath(favoritesRelativePath: string  | undefined) {
        this['favorites_relative_path'] = favoritesRelativePath;
    }
    public get favoritesRelativePath(): string | undefined {
        return this['favorites_relative_path'];
    }
    public withFavoritesExclusiveRights(favoritesExclusiveRights: number): FavoritesConfigurations {
        this['favorites_exclusive_rights'] = favoritesExclusiveRights;
        return this;
    }
    public set favoritesExclusiveRights(favoritesExclusiveRights: number  | undefined) {
        this['favorites_exclusive_rights'] = favoritesExclusiveRights;
    }
    public get favoritesExclusiveRights(): number | undefined {
        return this['favorites_exclusive_rights'];
    }
    public withFavoritesMoveContents(favoritesMoveContents: number): FavoritesConfigurations {
        this['favorites_move_contents'] = favoritesMoveContents;
        return this;
    }
    public set favoritesMoveContents(favoritesMoveContents: number  | undefined) {
        this['favorites_move_contents'] = favoritesMoveContents;
    }
    public get favoritesMoveContents(): number | undefined {
        return this['favorites_move_contents'];
    }
    public withFavoritesMoveContentOnPolicyRemoval(favoritesMoveContentOnPolicyRemoval: number): FavoritesConfigurations {
        this['favorites_move_content_on_policy_removal'] = favoritesMoveContentOnPolicyRemoval;
        return this;
    }
    public set favoritesMoveContentOnPolicyRemoval(favoritesMoveContentOnPolicyRemoval: number  | undefined) {
        this['favorites_move_content_on_policy_removal'] = favoritesMoveContentOnPolicyRemoval;
    }
    public get favoritesMoveContentOnPolicyRemoval(): number | undefined {
        return this['favorites_move_content_on_policy_removal'];
    }
}
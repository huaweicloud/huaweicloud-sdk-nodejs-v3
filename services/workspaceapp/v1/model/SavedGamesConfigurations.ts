

export class SavedGamesConfigurations {
    private 'saved_games_status'?: number;
    private 'saved_games_redirection_type'?: number;
    private 'saved_games_storage_path'?: string;
    private 'saved_games_relative_path'?: string;
    private 'saved_games_exclusive_rights'?: number;
    private 'saved_games_move_contents'?: number;
    private 'saved_games_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withSavedGamesStatus(savedGamesStatus: number): SavedGamesConfigurations {
        this['saved_games_status'] = savedGamesStatus;
        return this;
    }
    public set savedGamesStatus(savedGamesStatus: number  | undefined) {
        this['saved_games_status'] = savedGamesStatus;
    }
    public get savedGamesStatus(): number | undefined {
        return this['saved_games_status'];
    }
    public withSavedGamesRedirectionType(savedGamesRedirectionType: number): SavedGamesConfigurations {
        this['saved_games_redirection_type'] = savedGamesRedirectionType;
        return this;
    }
    public set savedGamesRedirectionType(savedGamesRedirectionType: number  | undefined) {
        this['saved_games_redirection_type'] = savedGamesRedirectionType;
    }
    public get savedGamesRedirectionType(): number | undefined {
        return this['saved_games_redirection_type'];
    }
    public withSavedGamesStoragePath(savedGamesStoragePath: string): SavedGamesConfigurations {
        this['saved_games_storage_path'] = savedGamesStoragePath;
        return this;
    }
    public set savedGamesStoragePath(savedGamesStoragePath: string  | undefined) {
        this['saved_games_storage_path'] = savedGamesStoragePath;
    }
    public get savedGamesStoragePath(): string | undefined {
        return this['saved_games_storage_path'];
    }
    public withSavedGamesRelativePath(savedGamesRelativePath: string): SavedGamesConfigurations {
        this['saved_games_relative_path'] = savedGamesRelativePath;
        return this;
    }
    public set savedGamesRelativePath(savedGamesRelativePath: string  | undefined) {
        this['saved_games_relative_path'] = savedGamesRelativePath;
    }
    public get savedGamesRelativePath(): string | undefined {
        return this['saved_games_relative_path'];
    }
    public withSavedGamesExclusiveRights(savedGamesExclusiveRights: number): SavedGamesConfigurations {
        this['saved_games_exclusive_rights'] = savedGamesExclusiveRights;
        return this;
    }
    public set savedGamesExclusiveRights(savedGamesExclusiveRights: number  | undefined) {
        this['saved_games_exclusive_rights'] = savedGamesExclusiveRights;
    }
    public get savedGamesExclusiveRights(): number | undefined {
        return this['saved_games_exclusive_rights'];
    }
    public withSavedGamesMoveContents(savedGamesMoveContents: number): SavedGamesConfigurations {
        this['saved_games_move_contents'] = savedGamesMoveContents;
        return this;
    }
    public set savedGamesMoveContents(savedGamesMoveContents: number  | undefined) {
        this['saved_games_move_contents'] = savedGamesMoveContents;
    }
    public get savedGamesMoveContents(): number | undefined {
        return this['saved_games_move_contents'];
    }
    public withSavedGamesMoveContentOnPolicyRemoval(savedGamesMoveContentOnPolicyRemoval: number): SavedGamesConfigurations {
        this['saved_games_move_content_on_policy_removal'] = savedGamesMoveContentOnPolicyRemoval;
        return this;
    }
    public set savedGamesMoveContentOnPolicyRemoval(savedGamesMoveContentOnPolicyRemoval: number  | undefined) {
        this['saved_games_move_content_on_policy_removal'] = savedGamesMoveContentOnPolicyRemoval;
    }
    public get savedGamesMoveContentOnPolicyRemoval(): number | undefined {
        return this['saved_games_move_content_on_policy_removal'];
    }
}


export class StartMenuConfigurations {
    private 'start_menu_status'?: number;
    private 'start_menu_redirection_type'?: number;
    private 'start_menu_storage_path'?: string;
    private 'start_menu_relative_path'?: string;
    private 'start_menu_exclusive_rights'?: number;
    private 'start_menu_move_contents'?: number;
    private 'start_menu_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withStartMenuStatus(startMenuStatus: number): StartMenuConfigurations {
        this['start_menu_status'] = startMenuStatus;
        return this;
    }
    public set startMenuStatus(startMenuStatus: number  | undefined) {
        this['start_menu_status'] = startMenuStatus;
    }
    public get startMenuStatus(): number | undefined {
        return this['start_menu_status'];
    }
    public withStartMenuRedirectionType(startMenuRedirectionType: number): StartMenuConfigurations {
        this['start_menu_redirection_type'] = startMenuRedirectionType;
        return this;
    }
    public set startMenuRedirectionType(startMenuRedirectionType: number  | undefined) {
        this['start_menu_redirection_type'] = startMenuRedirectionType;
    }
    public get startMenuRedirectionType(): number | undefined {
        return this['start_menu_redirection_type'];
    }
    public withStartMenuStoragePath(startMenuStoragePath: string): StartMenuConfigurations {
        this['start_menu_storage_path'] = startMenuStoragePath;
        return this;
    }
    public set startMenuStoragePath(startMenuStoragePath: string  | undefined) {
        this['start_menu_storage_path'] = startMenuStoragePath;
    }
    public get startMenuStoragePath(): string | undefined {
        return this['start_menu_storage_path'];
    }
    public withStartMenuRelativePath(startMenuRelativePath: string): StartMenuConfigurations {
        this['start_menu_relative_path'] = startMenuRelativePath;
        return this;
    }
    public set startMenuRelativePath(startMenuRelativePath: string  | undefined) {
        this['start_menu_relative_path'] = startMenuRelativePath;
    }
    public get startMenuRelativePath(): string | undefined {
        return this['start_menu_relative_path'];
    }
    public withStartMenuExclusiveRights(startMenuExclusiveRights: number): StartMenuConfigurations {
        this['start_menu_exclusive_rights'] = startMenuExclusiveRights;
        return this;
    }
    public set startMenuExclusiveRights(startMenuExclusiveRights: number  | undefined) {
        this['start_menu_exclusive_rights'] = startMenuExclusiveRights;
    }
    public get startMenuExclusiveRights(): number | undefined {
        return this['start_menu_exclusive_rights'];
    }
    public withStartMenuMoveContents(startMenuMoveContents: number): StartMenuConfigurations {
        this['start_menu_move_contents'] = startMenuMoveContents;
        return this;
    }
    public set startMenuMoveContents(startMenuMoveContents: number  | undefined) {
        this['start_menu_move_contents'] = startMenuMoveContents;
    }
    public get startMenuMoveContents(): number | undefined {
        return this['start_menu_move_contents'];
    }
    public withStartMenuMoveContentOnPolicyRemoval(startMenuMoveContentOnPolicyRemoval: number): StartMenuConfigurations {
        this['start_menu_move_content_on_policy_removal'] = startMenuMoveContentOnPolicyRemoval;
        return this;
    }
    public set startMenuMoveContentOnPolicyRemoval(startMenuMoveContentOnPolicyRemoval: number  | undefined) {
        this['start_menu_move_content_on_policy_removal'] = startMenuMoveContentOnPolicyRemoval;
    }
    public get startMenuMoveContentOnPolicyRemoval(): number | undefined {
        return this['start_menu_move_content_on_policy_removal'];
    }
}
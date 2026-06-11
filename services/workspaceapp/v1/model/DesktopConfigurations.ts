

export class DesktopConfigurations {
    private 'desktop_status'?: number;
    private 'desktop_redirection_type'?: number;
    private 'desktop_storage_path'?: string;
    private 'desktop_relative_path'?: string;
    private 'desktop_exclusive_rights'?: number;
    private 'desktop_move_contents'?: number;
    private 'desktop_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withDesktopStatus(desktopStatus: number): DesktopConfigurations {
        this['desktop_status'] = desktopStatus;
        return this;
    }
    public set desktopStatus(desktopStatus: number  | undefined) {
        this['desktop_status'] = desktopStatus;
    }
    public get desktopStatus(): number | undefined {
        return this['desktop_status'];
    }
    public withDesktopRedirectionType(desktopRedirectionType: number): DesktopConfigurations {
        this['desktop_redirection_type'] = desktopRedirectionType;
        return this;
    }
    public set desktopRedirectionType(desktopRedirectionType: number  | undefined) {
        this['desktop_redirection_type'] = desktopRedirectionType;
    }
    public get desktopRedirectionType(): number | undefined {
        return this['desktop_redirection_type'];
    }
    public withDesktopStoragePath(desktopStoragePath: string): DesktopConfigurations {
        this['desktop_storage_path'] = desktopStoragePath;
        return this;
    }
    public set desktopStoragePath(desktopStoragePath: string  | undefined) {
        this['desktop_storage_path'] = desktopStoragePath;
    }
    public get desktopStoragePath(): string | undefined {
        return this['desktop_storage_path'];
    }
    public withDesktopRelativePath(desktopRelativePath: string): DesktopConfigurations {
        this['desktop_relative_path'] = desktopRelativePath;
        return this;
    }
    public set desktopRelativePath(desktopRelativePath: string  | undefined) {
        this['desktop_relative_path'] = desktopRelativePath;
    }
    public get desktopRelativePath(): string | undefined {
        return this['desktop_relative_path'];
    }
    public withDesktopExclusiveRights(desktopExclusiveRights: number): DesktopConfigurations {
        this['desktop_exclusive_rights'] = desktopExclusiveRights;
        return this;
    }
    public set desktopExclusiveRights(desktopExclusiveRights: number  | undefined) {
        this['desktop_exclusive_rights'] = desktopExclusiveRights;
    }
    public get desktopExclusiveRights(): number | undefined {
        return this['desktop_exclusive_rights'];
    }
    public withDesktopMoveContents(desktopMoveContents: number): DesktopConfigurations {
        this['desktop_move_contents'] = desktopMoveContents;
        return this;
    }
    public set desktopMoveContents(desktopMoveContents: number  | undefined) {
        this['desktop_move_contents'] = desktopMoveContents;
    }
    public get desktopMoveContents(): number | undefined {
        return this['desktop_move_contents'];
    }
    public withDesktopMoveContentOnPolicyRemoval(desktopMoveContentOnPolicyRemoval: number): DesktopConfigurations {
        this['desktop_move_content_on_policy_removal'] = desktopMoveContentOnPolicyRemoval;
        return this;
    }
    public set desktopMoveContentOnPolicyRemoval(desktopMoveContentOnPolicyRemoval: number  | undefined) {
        this['desktop_move_content_on_policy_removal'] = desktopMoveContentOnPolicyRemoval;
    }
    public get desktopMoveContentOnPolicyRemoval(): number | undefined {
        return this['desktop_move_content_on_policy_removal'];
    }
}
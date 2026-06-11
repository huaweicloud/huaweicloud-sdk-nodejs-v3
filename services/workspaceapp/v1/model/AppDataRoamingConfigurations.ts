

export class AppDataRoamingConfigurations {
    private 'app_data_roaming_status'?: number;
    private 'app_data_roaming_redirection_type'?: number;
    private 'app_data_roaming_storage_path'?: string;
    private 'app_data_roaming_relative_path'?: string;
    private 'app_data_roaming_exclusive_rights'?: number;
    private 'app_data_roaming_move_contents'?: number;
    private 'app_data_roaming_move_content_on_policy_removal'?: number;
    public constructor() { 
    }
    public withAppDataRoamingStatus(appDataRoamingStatus: number): AppDataRoamingConfigurations {
        this['app_data_roaming_status'] = appDataRoamingStatus;
        return this;
    }
    public set appDataRoamingStatus(appDataRoamingStatus: number  | undefined) {
        this['app_data_roaming_status'] = appDataRoamingStatus;
    }
    public get appDataRoamingStatus(): number | undefined {
        return this['app_data_roaming_status'];
    }
    public withAppDataRoamingRedirectionType(appDataRoamingRedirectionType: number): AppDataRoamingConfigurations {
        this['app_data_roaming_redirection_type'] = appDataRoamingRedirectionType;
        return this;
    }
    public set appDataRoamingRedirectionType(appDataRoamingRedirectionType: number  | undefined) {
        this['app_data_roaming_redirection_type'] = appDataRoamingRedirectionType;
    }
    public get appDataRoamingRedirectionType(): number | undefined {
        return this['app_data_roaming_redirection_type'];
    }
    public withAppDataRoamingStoragePath(appDataRoamingStoragePath: string): AppDataRoamingConfigurations {
        this['app_data_roaming_storage_path'] = appDataRoamingStoragePath;
        return this;
    }
    public set appDataRoamingStoragePath(appDataRoamingStoragePath: string  | undefined) {
        this['app_data_roaming_storage_path'] = appDataRoamingStoragePath;
    }
    public get appDataRoamingStoragePath(): string | undefined {
        return this['app_data_roaming_storage_path'];
    }
    public withAppDataRoamingRelativePath(appDataRoamingRelativePath: string): AppDataRoamingConfigurations {
        this['app_data_roaming_relative_path'] = appDataRoamingRelativePath;
        return this;
    }
    public set appDataRoamingRelativePath(appDataRoamingRelativePath: string  | undefined) {
        this['app_data_roaming_relative_path'] = appDataRoamingRelativePath;
    }
    public get appDataRoamingRelativePath(): string | undefined {
        return this['app_data_roaming_relative_path'];
    }
    public withAppDataRoamingExclusiveRights(appDataRoamingExclusiveRights: number): AppDataRoamingConfigurations {
        this['app_data_roaming_exclusive_rights'] = appDataRoamingExclusiveRights;
        return this;
    }
    public set appDataRoamingExclusiveRights(appDataRoamingExclusiveRights: number  | undefined) {
        this['app_data_roaming_exclusive_rights'] = appDataRoamingExclusiveRights;
    }
    public get appDataRoamingExclusiveRights(): number | undefined {
        return this['app_data_roaming_exclusive_rights'];
    }
    public withAppDataRoamingMoveContents(appDataRoamingMoveContents: number): AppDataRoamingConfigurations {
        this['app_data_roaming_move_contents'] = appDataRoamingMoveContents;
        return this;
    }
    public set appDataRoamingMoveContents(appDataRoamingMoveContents: number  | undefined) {
        this['app_data_roaming_move_contents'] = appDataRoamingMoveContents;
    }
    public get appDataRoamingMoveContents(): number | undefined {
        return this['app_data_roaming_move_contents'];
    }
    public withAppDataRoamingMoveContentOnPolicyRemoval(appDataRoamingMoveContentOnPolicyRemoval: number): AppDataRoamingConfigurations {
        this['app_data_roaming_move_content_on_policy_removal'] = appDataRoamingMoveContentOnPolicyRemoval;
        return this;
    }
    public set appDataRoamingMoveContentOnPolicyRemoval(appDataRoamingMoveContentOnPolicyRemoval: number  | undefined) {
        this['app_data_roaming_move_content_on_policy_removal'] = appDataRoamingMoveContentOnPolicyRemoval;
    }
    public get appDataRoamingMoveContentOnPolicyRemoval(): number | undefined {
        return this['app_data_roaming_move_content_on_policy_removal'];
    }
}
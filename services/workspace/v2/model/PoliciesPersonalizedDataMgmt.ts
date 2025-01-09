import { PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions } from './PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions';
import { PoliciesPersonalizedDataMgmtUserDataRoamingOptions } from './PoliciesPersonalizedDataMgmtUserDataRoamingOptions';
import { PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions } from './PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions';


export class PoliciesPersonalizedDataMgmt {
    private 'personalized_data_mgmt_path'?: string;
    private 'user_data_roaming_enable'?: boolean;
    private 'user_data_roaming_options'?: PoliciesPersonalizedDataMgmtUserDataRoamingOptions;
    private 'user_folder_redirection_enable'?: boolean;
    private 'user_folder_redirection_options'?: PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions;
    private 'logoff_delete_user_configuration'?: boolean;
    private 'network_drive_mapping_enable'?: boolean;
    private 'network_drive_mapping_options'?: PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions;
    public constructor() { 
    }
    public withPersonalizedDataMgmtPath(personalizedDataMgmtPath: string): PoliciesPersonalizedDataMgmt {
        this['personalized_data_mgmt_path'] = personalizedDataMgmtPath;
        return this;
    }
    public set personalizedDataMgmtPath(personalizedDataMgmtPath: string  | undefined) {
        this['personalized_data_mgmt_path'] = personalizedDataMgmtPath;
    }
    public get personalizedDataMgmtPath(): string | undefined {
        return this['personalized_data_mgmt_path'];
    }
    public withUserDataRoamingEnable(userDataRoamingEnable: boolean): PoliciesPersonalizedDataMgmt {
        this['user_data_roaming_enable'] = userDataRoamingEnable;
        return this;
    }
    public set userDataRoamingEnable(userDataRoamingEnable: boolean  | undefined) {
        this['user_data_roaming_enable'] = userDataRoamingEnable;
    }
    public get userDataRoamingEnable(): boolean | undefined {
        return this['user_data_roaming_enable'];
    }
    public withUserDataRoamingOptions(userDataRoamingOptions: PoliciesPersonalizedDataMgmtUserDataRoamingOptions): PoliciesPersonalizedDataMgmt {
        this['user_data_roaming_options'] = userDataRoamingOptions;
        return this;
    }
    public set userDataRoamingOptions(userDataRoamingOptions: PoliciesPersonalizedDataMgmtUserDataRoamingOptions  | undefined) {
        this['user_data_roaming_options'] = userDataRoamingOptions;
    }
    public get userDataRoamingOptions(): PoliciesPersonalizedDataMgmtUserDataRoamingOptions | undefined {
        return this['user_data_roaming_options'];
    }
    public withUserFolderRedirectionEnable(userFolderRedirectionEnable: boolean): PoliciesPersonalizedDataMgmt {
        this['user_folder_redirection_enable'] = userFolderRedirectionEnable;
        return this;
    }
    public set userFolderRedirectionEnable(userFolderRedirectionEnable: boolean  | undefined) {
        this['user_folder_redirection_enable'] = userFolderRedirectionEnable;
    }
    public get userFolderRedirectionEnable(): boolean | undefined {
        return this['user_folder_redirection_enable'];
    }
    public withUserFolderRedirectionOptions(userFolderRedirectionOptions: PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions): PoliciesPersonalizedDataMgmt {
        this['user_folder_redirection_options'] = userFolderRedirectionOptions;
        return this;
    }
    public set userFolderRedirectionOptions(userFolderRedirectionOptions: PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions  | undefined) {
        this['user_folder_redirection_options'] = userFolderRedirectionOptions;
    }
    public get userFolderRedirectionOptions(): PoliciesPersonalizedDataMgmtUserFolderRedirectionOptions | undefined {
        return this['user_folder_redirection_options'];
    }
    public withLogoffDeleteUserConfiguration(logoffDeleteUserConfiguration: boolean): PoliciesPersonalizedDataMgmt {
        this['logoff_delete_user_configuration'] = logoffDeleteUserConfiguration;
        return this;
    }
    public set logoffDeleteUserConfiguration(logoffDeleteUserConfiguration: boolean  | undefined) {
        this['logoff_delete_user_configuration'] = logoffDeleteUserConfiguration;
    }
    public get logoffDeleteUserConfiguration(): boolean | undefined {
        return this['logoff_delete_user_configuration'];
    }
    public withNetworkDriveMappingEnable(networkDriveMappingEnable: boolean): PoliciesPersonalizedDataMgmt {
        this['network_drive_mapping_enable'] = networkDriveMappingEnable;
        return this;
    }
    public set networkDriveMappingEnable(networkDriveMappingEnable: boolean  | undefined) {
        this['network_drive_mapping_enable'] = networkDriveMappingEnable;
    }
    public get networkDriveMappingEnable(): boolean | undefined {
        return this['network_drive_mapping_enable'];
    }
    public withNetworkDriveMappingOptions(networkDriveMappingOptions: PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions): PoliciesPersonalizedDataMgmt {
        this['network_drive_mapping_options'] = networkDriveMappingOptions;
        return this;
    }
    public set networkDriveMappingOptions(networkDriveMappingOptions: PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions  | undefined) {
        this['network_drive_mapping_options'] = networkDriveMappingOptions;
    }
    public get networkDriveMappingOptions(): PoliciesPersonalizedDataMgmtNetworkDriveMappingOptions | undefined {
        return this['network_drive_mapping_options'];
    }
}
import { InterfacesConfig } from './InterfacesConfig';
import { LdapConfig } from './LdapConfig';


export class ThirdPartyAuthConfig {
    private 'update_type'?: string;
    public enable?: boolean;
    private 'is_cooperate_password'?: boolean;
    private 'update_object'?: string;
    private 'auth_type'?: string;
    private 'client_interface_config'?: InterfacesConfig;
    private 'server_interface_config'?: InterfacesConfig;
    private 'third_password_update_type'?: ThirdPartyAuthConfigThirdPasswordUpdateTypeEnum | string;
    private 'custom_definition'?: string;
    private 'oauth_configs'?: string;
    private 'ldap_configs'?: Array<LdapConfig>;
    private 'third_password_name'?: string;
    public constructor() { 
    }
    public withUpdateType(updateType: string): ThirdPartyAuthConfig {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: string  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): string | undefined {
        return this['update_type'];
    }
    public withEnable(enable: boolean): ThirdPartyAuthConfig {
        this['enable'] = enable;
        return this;
    }
    public withIsCooperatePassword(isCooperatePassword: boolean): ThirdPartyAuthConfig {
        this['is_cooperate_password'] = isCooperatePassword;
        return this;
    }
    public set isCooperatePassword(isCooperatePassword: boolean  | undefined) {
        this['is_cooperate_password'] = isCooperatePassword;
    }
    public get isCooperatePassword(): boolean | undefined {
        return this['is_cooperate_password'];
    }
    public withUpdateObject(updateObject: string): ThirdPartyAuthConfig {
        this['update_object'] = updateObject;
        return this;
    }
    public set updateObject(updateObject: string  | undefined) {
        this['update_object'] = updateObject;
    }
    public get updateObject(): string | undefined {
        return this['update_object'];
    }
    public withAuthType(authType: string): ThirdPartyAuthConfig {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withClientInterfaceConfig(clientInterfaceConfig: InterfacesConfig): ThirdPartyAuthConfig {
        this['client_interface_config'] = clientInterfaceConfig;
        return this;
    }
    public set clientInterfaceConfig(clientInterfaceConfig: InterfacesConfig  | undefined) {
        this['client_interface_config'] = clientInterfaceConfig;
    }
    public get clientInterfaceConfig(): InterfacesConfig | undefined {
        return this['client_interface_config'];
    }
    public withServerInterfaceConfig(serverInterfaceConfig: InterfacesConfig): ThirdPartyAuthConfig {
        this['server_interface_config'] = serverInterfaceConfig;
        return this;
    }
    public set serverInterfaceConfig(serverInterfaceConfig: InterfacesConfig  | undefined) {
        this['server_interface_config'] = serverInterfaceConfig;
    }
    public get serverInterfaceConfig(): InterfacesConfig | undefined {
        return this['server_interface_config'];
    }
    public withThirdPasswordUpdateType(thirdPasswordUpdateType: ThirdPartyAuthConfigThirdPasswordUpdateTypeEnum | string): ThirdPartyAuthConfig {
        this['third_password_update_type'] = thirdPasswordUpdateType;
        return this;
    }
    public set thirdPasswordUpdateType(thirdPasswordUpdateType: ThirdPartyAuthConfigThirdPasswordUpdateTypeEnum | string  | undefined) {
        this['third_password_update_type'] = thirdPasswordUpdateType;
    }
    public get thirdPasswordUpdateType(): ThirdPartyAuthConfigThirdPasswordUpdateTypeEnum | string | undefined {
        return this['third_password_update_type'];
    }
    public withCustomDefinition(customDefinition: string): ThirdPartyAuthConfig {
        this['custom_definition'] = customDefinition;
        return this;
    }
    public set customDefinition(customDefinition: string  | undefined) {
        this['custom_definition'] = customDefinition;
    }
    public get customDefinition(): string | undefined {
        return this['custom_definition'];
    }
    public withOauthConfigs(oauthConfigs: string): ThirdPartyAuthConfig {
        this['oauth_configs'] = oauthConfigs;
        return this;
    }
    public set oauthConfigs(oauthConfigs: string  | undefined) {
        this['oauth_configs'] = oauthConfigs;
    }
    public get oauthConfigs(): string | undefined {
        return this['oauth_configs'];
    }
    public withLdapConfigs(ldapConfigs: Array<LdapConfig>): ThirdPartyAuthConfig {
        this['ldap_configs'] = ldapConfigs;
        return this;
    }
    public set ldapConfigs(ldapConfigs: Array<LdapConfig>  | undefined) {
        this['ldap_configs'] = ldapConfigs;
    }
    public get ldapConfigs(): Array<LdapConfig> | undefined {
        return this['ldap_configs'];
    }
    public withThirdPasswordName(thirdPasswordName: string): ThirdPartyAuthConfig {
        this['third_password_name'] = thirdPasswordName;
        return this;
    }
    public set thirdPasswordName(thirdPasswordName: string  | undefined) {
        this['third_password_name'] = thirdPasswordName;
    }
    public get thirdPasswordName(): string | undefined {
        return this['third_password_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ThirdPartyAuthConfigThirdPasswordUpdateTypeEnum {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
}

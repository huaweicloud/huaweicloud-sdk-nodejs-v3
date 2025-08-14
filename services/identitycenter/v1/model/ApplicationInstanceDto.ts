import { ApplicationTemplateDto } from './ApplicationTemplateDto';
import { CertificateDto } from './CertificateDto';
import { DisplayDto } from './DisplayDto';
import { IdentityProviderConfigDto } from './IdentityProviderConfigDto';
import { ResponseConfigDto } from './ResponseConfigDto';
import { ResponseSchemaConfigDto } from './ResponseSchemaConfigDto';
import { SecurityConfigDto } from './SecurityConfigDto';
import { ServiceProviderConfigDto } from './ServiceProviderConfigDto';


export class ApplicationInstanceDto {
    private 'active_certificate'?: CertificateDto;
    public display?: DisplayDto;
    private 'identity_provider_config'?: IdentityProviderConfigDto;
    private 'application_instance_id'?: string;
    public name?: string;
    public visible?: boolean;
    private 'response_config'?: ResponseConfigDto;
    private 'response_schema_config'?: ResponseSchemaConfigDto;
    private 'security_config'?: SecurityConfigDto;
    public status?: ApplicationInstanceDtoStatusEnum | string;
    public template?: ApplicationTemplateDto;
    private 'service_provider_config'?: ServiceProviderConfigDto;
    private 'client_id'?: string;
    private 'end_user_visible'?: boolean;
    private 'managed_account'?: string;
    public constructor(activeCertificate?: CertificateDto, display?: DisplayDto, identityProviderConfig?: IdentityProviderConfigDto, applicationInstanceId?: string, name?: string, visible?: boolean, responseConfig?: ResponseConfigDto, responseSchemaConfig?: ResponseSchemaConfigDto, securityConfig?: SecurityConfigDto, status?: string, template?: ApplicationTemplateDto, serviceProviderConfig?: ServiceProviderConfigDto) { 
        this['active_certificate'] = activeCertificate;
        this['display'] = display;
        this['identity_provider_config'] = identityProviderConfig;
        this['application_instance_id'] = applicationInstanceId;
        this['name'] = name;
        this['visible'] = visible;
        this['response_config'] = responseConfig;
        this['response_schema_config'] = responseSchemaConfig;
        this['security_config'] = securityConfig;
        this['status'] = status;
        this['template'] = template;
        this['service_provider_config'] = serviceProviderConfig;
    }
    public withActiveCertificate(activeCertificate: CertificateDto): ApplicationInstanceDto {
        this['active_certificate'] = activeCertificate;
        return this;
    }
    public set activeCertificate(activeCertificate: CertificateDto  | undefined) {
        this['active_certificate'] = activeCertificate;
    }
    public get activeCertificate(): CertificateDto | undefined {
        return this['active_certificate'];
    }
    public withDisplay(display: DisplayDto): ApplicationInstanceDto {
        this['display'] = display;
        return this;
    }
    public withIdentityProviderConfig(identityProviderConfig: IdentityProviderConfigDto): ApplicationInstanceDto {
        this['identity_provider_config'] = identityProviderConfig;
        return this;
    }
    public set identityProviderConfig(identityProviderConfig: IdentityProviderConfigDto  | undefined) {
        this['identity_provider_config'] = identityProviderConfig;
    }
    public get identityProviderConfig(): IdentityProviderConfigDto | undefined {
        return this['identity_provider_config'];
    }
    public withApplicationInstanceId(applicationInstanceId: string): ApplicationInstanceDto {
        this['application_instance_id'] = applicationInstanceId;
        return this;
    }
    public set applicationInstanceId(applicationInstanceId: string  | undefined) {
        this['application_instance_id'] = applicationInstanceId;
    }
    public get applicationInstanceId(): string | undefined {
        return this['application_instance_id'];
    }
    public withName(name: string): ApplicationInstanceDto {
        this['name'] = name;
        return this;
    }
    public withVisible(visible: boolean): ApplicationInstanceDto {
        this['visible'] = visible;
        return this;
    }
    public withResponseConfig(responseConfig: ResponseConfigDto): ApplicationInstanceDto {
        this['response_config'] = responseConfig;
        return this;
    }
    public set responseConfig(responseConfig: ResponseConfigDto  | undefined) {
        this['response_config'] = responseConfig;
    }
    public get responseConfig(): ResponseConfigDto | undefined {
        return this['response_config'];
    }
    public withResponseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto): ApplicationInstanceDto {
        this['response_schema_config'] = responseSchemaConfig;
        return this;
    }
    public set responseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto  | undefined) {
        this['response_schema_config'] = responseSchemaConfig;
    }
    public get responseSchemaConfig(): ResponseSchemaConfigDto | undefined {
        return this['response_schema_config'];
    }
    public withSecurityConfig(securityConfig: SecurityConfigDto): ApplicationInstanceDto {
        this['security_config'] = securityConfig;
        return this;
    }
    public set securityConfig(securityConfig: SecurityConfigDto  | undefined) {
        this['security_config'] = securityConfig;
    }
    public get securityConfig(): SecurityConfigDto | undefined {
        return this['security_config'];
    }
    public withStatus(status: ApplicationInstanceDtoStatusEnum | string): ApplicationInstanceDto {
        this['status'] = status;
        return this;
    }
    public withTemplate(template: ApplicationTemplateDto): ApplicationInstanceDto {
        this['template'] = template;
        return this;
    }
    public withServiceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto): ApplicationInstanceDto {
        this['service_provider_config'] = serviceProviderConfig;
        return this;
    }
    public set serviceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto  | undefined) {
        this['service_provider_config'] = serviceProviderConfig;
    }
    public get serviceProviderConfig(): ServiceProviderConfigDto | undefined {
        return this['service_provider_config'];
    }
    public withClientId(clientId: string): ApplicationInstanceDto {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withEndUserVisible(endUserVisible: boolean): ApplicationInstanceDto {
        this['end_user_visible'] = endUserVisible;
        return this;
    }
    public set endUserVisible(endUserVisible: boolean  | undefined) {
        this['end_user_visible'] = endUserVisible;
    }
    public get endUserVisible(): boolean | undefined {
        return this['end_user_visible'];
    }
    public withManagedAccount(managedAccount: string): ApplicationInstanceDto {
        this['managed_account'] = managedAccount;
        return this;
    }
    public set managedAccount(managedAccount: string  | undefined) {
        this['managed_account'] = managedAccount;
    }
    public get managedAccount(): string | undefined {
        return this['managed_account'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationInstanceDtoStatusEnum {
    CREATED = 'CREATED',
    ENABLED = 'ENABLED'
}

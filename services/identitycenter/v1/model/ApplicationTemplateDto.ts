import { ApplicationTemplateDisplayDto } from './ApplicationTemplateDisplayDto';
import { ResponseConfigDto } from './ResponseConfigDto';
import { ResponseSchemaConfigDto } from './ResponseSchemaConfigDto';
import { SecurityConfigDto } from './SecurityConfigDto';
import { ServiceProviderConfigDto } from './ServiceProviderConfigDto';


export class ApplicationTemplateDto {
    public application?: ApplicationTemplateDisplayDto;
    private 'response_config'?: ResponseConfigDto;
    private 'response_schema_config'?: ResponseSchemaConfigDto;
    private 'sso_protocol'?: string;
    private 'security_config'?: SecurityConfigDto;
    private 'service_provider_config'?: ServiceProviderConfigDto;
    private 'template_id'?: string;
    private 'template_version'?: string;
    public constructor(application?: ApplicationTemplateDisplayDto, responseConfig?: ResponseConfigDto, responseSchemaConfig?: ResponseSchemaConfigDto, ssoProtocol?: string, securityConfig?: SecurityConfigDto, serviceProviderConfig?: ServiceProviderConfigDto, templateId?: string, templateVersion?: string) { 
        this['application'] = application;
        this['response_config'] = responseConfig;
        this['response_schema_config'] = responseSchemaConfig;
        this['sso_protocol'] = ssoProtocol;
        this['security_config'] = securityConfig;
        this['service_provider_config'] = serviceProviderConfig;
        this['template_id'] = templateId;
        this['template_version'] = templateVersion;
    }
    public withApplication(application: ApplicationTemplateDisplayDto): ApplicationTemplateDto {
        this['application'] = application;
        return this;
    }
    public withResponseConfig(responseConfig: ResponseConfigDto): ApplicationTemplateDto {
        this['response_config'] = responseConfig;
        return this;
    }
    public set responseConfig(responseConfig: ResponseConfigDto  | undefined) {
        this['response_config'] = responseConfig;
    }
    public get responseConfig(): ResponseConfigDto | undefined {
        return this['response_config'];
    }
    public withResponseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto): ApplicationTemplateDto {
        this['response_schema_config'] = responseSchemaConfig;
        return this;
    }
    public set responseSchemaConfig(responseSchemaConfig: ResponseSchemaConfigDto  | undefined) {
        this['response_schema_config'] = responseSchemaConfig;
    }
    public get responseSchemaConfig(): ResponseSchemaConfigDto | undefined {
        return this['response_schema_config'];
    }
    public withSsoProtocol(ssoProtocol: string): ApplicationTemplateDto {
        this['sso_protocol'] = ssoProtocol;
        return this;
    }
    public set ssoProtocol(ssoProtocol: string  | undefined) {
        this['sso_protocol'] = ssoProtocol;
    }
    public get ssoProtocol(): string | undefined {
        return this['sso_protocol'];
    }
    public withSecurityConfig(securityConfig: SecurityConfigDto): ApplicationTemplateDto {
        this['security_config'] = securityConfig;
        return this;
    }
    public set securityConfig(securityConfig: SecurityConfigDto  | undefined) {
        this['security_config'] = securityConfig;
    }
    public get securityConfig(): SecurityConfigDto | undefined {
        return this['security_config'];
    }
    public withServiceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto): ApplicationTemplateDto {
        this['service_provider_config'] = serviceProviderConfig;
        return this;
    }
    public set serviceProviderConfig(serviceProviderConfig: ServiceProviderConfigDto  | undefined) {
        this['service_provider_config'] = serviceProviderConfig;
    }
    public get serviceProviderConfig(): ServiceProviderConfigDto | undefined {
        return this['service_provider_config'];
    }
    public withTemplateId(templateId: string): ApplicationTemplateDto {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTemplateVersion(templateVersion: string): ApplicationTemplateDto {
        this['template_version'] = templateVersion;
        return this;
    }
    public set templateVersion(templateVersion: string  | undefined) {
        this['template_version'] = templateVersion;
    }
    public get templateVersion(): string | undefined {
        return this['template_version'];
    }
}
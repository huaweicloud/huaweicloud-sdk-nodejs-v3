import { ServerCertificateConfig } from './ServerCertificateConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainConfigurationResponse extends SdkResponse {
    private 'configuration_id'?: string;
    private 'domain_name'?: string;
    private 'access_protocol'?: string;
    private 'server_certificate_id'?: string;
    private 'server_certificate_config'?: ServerCertificateConfig;
    public constructor() { 
        super();
    }
    public withConfigurationId(configurationId: string): ShowDomainConfigurationResponse {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withDomainName(domainName: string): ShowDomainConfigurationResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withAccessProtocol(accessProtocol: string): ShowDomainConfigurationResponse {
        this['access_protocol'] = accessProtocol;
        return this;
    }
    public set accessProtocol(accessProtocol: string  | undefined) {
        this['access_protocol'] = accessProtocol;
    }
    public get accessProtocol(): string | undefined {
        return this['access_protocol'];
    }
    public withServerCertificateId(serverCertificateId: string): ShowDomainConfigurationResponse {
        this['server_certificate_id'] = serverCertificateId;
        return this;
    }
    public set serverCertificateId(serverCertificateId: string  | undefined) {
        this['server_certificate_id'] = serverCertificateId;
    }
    public get serverCertificateId(): string | undefined {
        return this['server_certificate_id'];
    }
    public withServerCertificateConfig(serverCertificateConfig: ServerCertificateConfig): ShowDomainConfigurationResponse {
        this['server_certificate_config'] = serverCertificateConfig;
        return this;
    }
    public set serverCertificateConfig(serverCertificateConfig: ServerCertificateConfig  | undefined) {
        this['server_certificate_config'] = serverCertificateConfig;
    }
    public get serverCertificateConfig(): ServerCertificateConfig | undefined {
        return this['server_certificate_config'];
    }
}
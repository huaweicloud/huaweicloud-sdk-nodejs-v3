import { ServerCertificateConfig } from './ServerCertificateConfig';


export class UpdateDomainConfigurationDTO {
    private 'server_certificate_id'?: string;
    private 'server_certificate_config'?: ServerCertificateConfig;
    public constructor() { 
    }
    public withServerCertificateId(serverCertificateId: string): UpdateDomainConfigurationDTO {
        this['server_certificate_id'] = serverCertificateId;
        return this;
    }
    public set serverCertificateId(serverCertificateId: string  | undefined) {
        this['server_certificate_id'] = serverCertificateId;
    }
    public get serverCertificateId(): string | undefined {
        return this['server_certificate_id'];
    }
    public withServerCertificateConfig(serverCertificateConfig: ServerCertificateConfig): UpdateDomainConfigurationDTO {
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


export class UpdateCertificateDTO {
    private 'provision_enable'?: boolean;
    private 'template_id'?: string;
    private 'ocsp_enable'?: boolean;
    private 'ocsp_ssl_enable'?: boolean;
    private 'ocsp_server_ca_id'?: string;
    public constructor() { 
    }
    public withProvisionEnable(provisionEnable: boolean): UpdateCertificateDTO {
        this['provision_enable'] = provisionEnable;
        return this;
    }
    public set provisionEnable(provisionEnable: boolean  | undefined) {
        this['provision_enable'] = provisionEnable;
    }
    public get provisionEnable(): boolean | undefined {
        return this['provision_enable'];
    }
    public withTemplateId(templateId: string): UpdateCertificateDTO {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withOcspEnable(ocspEnable: boolean): UpdateCertificateDTO {
        this['ocsp_enable'] = ocspEnable;
        return this;
    }
    public set ocspEnable(ocspEnable: boolean  | undefined) {
        this['ocsp_enable'] = ocspEnable;
    }
    public get ocspEnable(): boolean | undefined {
        return this['ocsp_enable'];
    }
    public withOcspSslEnable(ocspSslEnable: boolean): UpdateCertificateDTO {
        this['ocsp_ssl_enable'] = ocspSslEnable;
        return this;
    }
    public set ocspSslEnable(ocspSslEnable: boolean  | undefined) {
        this['ocsp_ssl_enable'] = ocspSslEnable;
    }
    public get ocspSslEnable(): boolean | undefined {
        return this['ocsp_ssl_enable'];
    }
    public withOcspServerCaId(ocspServerCaId: string): UpdateCertificateDTO {
        this['ocsp_server_ca_id'] = ocspServerCaId;
        return this;
    }
    public set ocspServerCaId(ocspServerCaId: string  | undefined) {
        this['ocsp_server_ca_id'] = ocspServerCaId;
    }
    public get ocspServerCaId(): string | undefined {
        return this['ocsp_server_ca_id'];
    }
}
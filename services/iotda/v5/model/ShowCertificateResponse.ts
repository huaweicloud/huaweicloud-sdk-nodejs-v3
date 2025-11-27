
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    public name?: string;
    private 'cn_name'?: string;
    public owner?: string;
    public status?: boolean;
    private 'verify_code'?: string;
    private 'provision_enable'?: boolean;
    private 'template_id'?: string;
    private 'ocsp_enable'?: boolean;
    private 'ocsp_server_ca_id'?: string;
    private 'ocsp_ssl_enable'?: boolean;
    private 'create_date'?: string;
    private 'effective_date'?: string;
    private 'expiry_date'?: string;
    public content?: string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): ShowCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withName(name: string): ShowCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withCnName(cnName: string): ShowCertificateResponse {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withOwner(owner: string): ShowCertificateResponse {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: boolean): ShowCertificateResponse {
        this['status'] = status;
        return this;
    }
    public withVerifyCode(verifyCode: string): ShowCertificateResponse {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
    public withProvisionEnable(provisionEnable: boolean): ShowCertificateResponse {
        this['provision_enable'] = provisionEnable;
        return this;
    }
    public set provisionEnable(provisionEnable: boolean  | undefined) {
        this['provision_enable'] = provisionEnable;
    }
    public get provisionEnable(): boolean | undefined {
        return this['provision_enable'];
    }
    public withTemplateId(templateId: string): ShowCertificateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withOcspEnable(ocspEnable: boolean): ShowCertificateResponse {
        this['ocsp_enable'] = ocspEnable;
        return this;
    }
    public set ocspEnable(ocspEnable: boolean  | undefined) {
        this['ocsp_enable'] = ocspEnable;
    }
    public get ocspEnable(): boolean | undefined {
        return this['ocsp_enable'];
    }
    public withOcspServerCaId(ocspServerCaId: string): ShowCertificateResponse {
        this['ocsp_server_ca_id'] = ocspServerCaId;
        return this;
    }
    public set ocspServerCaId(ocspServerCaId: string  | undefined) {
        this['ocsp_server_ca_id'] = ocspServerCaId;
    }
    public get ocspServerCaId(): string | undefined {
        return this['ocsp_server_ca_id'];
    }
    public withOcspSslEnable(ocspSslEnable: boolean): ShowCertificateResponse {
        this['ocsp_ssl_enable'] = ocspSslEnable;
        return this;
    }
    public set ocspSslEnable(ocspSslEnable: boolean  | undefined) {
        this['ocsp_ssl_enable'] = ocspSslEnable;
    }
    public get ocspSslEnable(): boolean | undefined {
        return this['ocsp_ssl_enable'];
    }
    public withCreateDate(createDate: string): ShowCertificateResponse {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: string  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): string | undefined {
        return this['create_date'];
    }
    public withEffectiveDate(effectiveDate: string): ShowCertificateResponse {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withExpiryDate(expiryDate: string): ShowCertificateResponse {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withContent(content: string): ShowCertificateResponse {
        this['content'] = content;
        return this;
    }
}
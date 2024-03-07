
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCertificateResponse extends SdkResponse {
    private 'certificate_id'?: string;
    private 'cn_name'?: string;
    public owner?: string;
    public status?: boolean;
    private 'verify_code'?: string;
    private 'provision_enable'?: boolean;
    private 'template_id'?: string;
    private 'create_date'?: string;
    private 'effective_date'?: string;
    private 'expiry_date'?: string;
    public constructor() { 
        super();
    }
    public withCertificateId(certificateId: string): AddCertificateResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withCnName(cnName: string): AddCertificateResponse {
        this['cn_name'] = cnName;
        return this;
    }
    public set cnName(cnName: string  | undefined) {
        this['cn_name'] = cnName;
    }
    public get cnName(): string | undefined {
        return this['cn_name'];
    }
    public withOwner(owner: string): AddCertificateResponse {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: boolean): AddCertificateResponse {
        this['status'] = status;
        return this;
    }
    public withVerifyCode(verifyCode: string): AddCertificateResponse {
        this['verify_code'] = verifyCode;
        return this;
    }
    public set verifyCode(verifyCode: string  | undefined) {
        this['verify_code'] = verifyCode;
    }
    public get verifyCode(): string | undefined {
        return this['verify_code'];
    }
    public withProvisionEnable(provisionEnable: boolean): AddCertificateResponse {
        this['provision_enable'] = provisionEnable;
        return this;
    }
    public set provisionEnable(provisionEnable: boolean  | undefined) {
        this['provision_enable'] = provisionEnable;
    }
    public get provisionEnable(): boolean | undefined {
        return this['provision_enable'];
    }
    public withTemplateId(templateId: string): AddCertificateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withCreateDate(createDate: string): AddCertificateResponse {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: string  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): string | undefined {
        return this['create_date'];
    }
    public withEffectiveDate(effectiveDate: string): AddCertificateResponse {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: string  | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate(): string | undefined {
        return this['effective_date'];
    }
    public withExpiryDate(expiryDate: string): AddCertificateResponse {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
}
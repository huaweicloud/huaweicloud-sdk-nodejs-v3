

export class SmsSignatureReq {
    private 'app_id': string | undefined;
    private 'apply_desc'?: string | undefined;
    private 'file_id'?: string | undefined;
    private 'is_involved_third': string | undefined;
    private 'power_attorney_fileid'?: string | undefined;
    private 'signature_name': string | undefined;
    private 'signature_source': number | undefined;
    private 'signature_type': string | undefined;
    private 'source_title_content'?: string | undefined;
    public constructor(appId?: any, isInvolvedThird?: any, signatureName?: any, signatureSource?: any, signatureType?: any) { 
        this['app_id'] = appId;
        this['is_involved_third'] = isInvolvedThird;
        this['signature_name'] = signatureName;
        this['signature_source'] = signatureSource;
        this['signature_type'] = signatureType;
    }
    public withAppId(appId: string): SmsSignatureReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withApplyDesc(applyDesc: string): SmsSignatureReq {
        this['apply_desc'] = applyDesc;
        return this;
    }
    public set applyDesc(applyDesc: string | undefined) {
        this['apply_desc'] = applyDesc;
    }
    public get applyDesc() {
        return this['apply_desc'];
    }
    public withFileId(fileId: string): SmsSignatureReq {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
    public withIsInvolvedThird(isInvolvedThird: string): SmsSignatureReq {
        this['is_involved_third'] = isInvolvedThird;
        return this;
    }
    public set isInvolvedThird(isInvolvedThird: string | undefined) {
        this['is_involved_third'] = isInvolvedThird;
    }
    public get isInvolvedThird() {
        return this['is_involved_third'];
    }
    public withPowerAttorneyFileid(powerAttorneyFileid: string): SmsSignatureReq {
        this['power_attorney_fileid'] = powerAttorneyFileid;
        return this;
    }
    public set powerAttorneyFileid(powerAttorneyFileid: string | undefined) {
        this['power_attorney_fileid'] = powerAttorneyFileid;
    }
    public get powerAttorneyFileid() {
        return this['power_attorney_fileid'];
    }
    public withSignatureName(signatureName: string): SmsSignatureReq {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName() {
        return this['signature_name'];
    }
    public withSignatureSource(signatureSource: number): SmsSignatureReq {
        this['signature_source'] = signatureSource;
        return this;
    }
    public set signatureSource(signatureSource: number | undefined) {
        this['signature_source'] = signatureSource;
    }
    public get signatureSource() {
        return this['signature_source'];
    }
    public withSignatureType(signatureType: string): SmsSignatureReq {
        this['signature_type'] = signatureType;
        return this;
    }
    public set signatureType(signatureType: string | undefined) {
        this['signature_type'] = signatureType;
    }
    public get signatureType() {
        return this['signature_type'];
    }
    public withSourceTitleContent(sourceTitleContent: string): SmsSignatureReq {
        this['source_title_content'] = sourceTitleContent;
        return this;
    }
    public set sourceTitleContent(sourceTitleContent: string | undefined) {
        this['source_title_content'] = sourceTitleContent;
    }
    public get sourceTitleContent() {
        return this['source_title_content'];
    }
}
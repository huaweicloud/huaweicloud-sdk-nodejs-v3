import { TenantBasic } from './TenantBasic';


export class SmsSignatureResp {
    public id?: string;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'customer_id'?: string | undefined;
    public tenant?: TenantBasic;
    private 'signature_name'?: string | undefined;
    private 'signature_id'?: string | undefined;
    private 'signature_type'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'apply_desc'?: string | undefined;
    private 'channel_num'?: string | undefined;
    private 'review_desc'?: string | undefined;
    private 'file_id'?: string | undefined;
    public status?: string;
    public site?: string;
    private 'signature_source'?: number | undefined;
    private 'is_involved_third'?: string | undefined;
    private 'power_attorney_file_id'?: string | undefined;
    private 'urge_status'?: string | undefined;
    private 'urge_time'?: string | undefined;
    private 'urge_desc'?: string | undefined;
    private 'app_key'?: string | undefined;
    private 'source_title_content'?: string | undefined;
    private 'signature_usage'?: string | undefined;
    public constructor() { 
    }
    public withId(id: string): SmsSignatureResp {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): SmsSignatureResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SmsSignatureResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withCustomerId(customerId: string): SmsSignatureResp {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId() {
        return this['customer_id'];
    }
    public withTenant(tenant: TenantBasic): SmsSignatureResp {
        this['tenant'] = tenant;
        return this;
    }
    public withSignatureName(signatureName: string): SmsSignatureResp {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName() {
        return this['signature_name'];
    }
    public withSignatureId(signatureId: string): SmsSignatureResp {
        this['signature_id'] = signatureId;
        return this;
    }
    public set signatureId(signatureId: string | undefined) {
        this['signature_id'] = signatureId;
    }
    public get signatureId() {
        return this['signature_id'];
    }
    public withSignatureType(signatureType: string): SmsSignatureResp {
        this['signature_type'] = signatureType;
        return this;
    }
    public set signatureType(signatureType: string | undefined) {
        this['signature_type'] = signatureType;
    }
    public get signatureType() {
        return this['signature_type'];
    }
    public withAppName(appName: string): SmsSignatureResp {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withApplyDesc(applyDesc: string): SmsSignatureResp {
        this['apply_desc'] = applyDesc;
        return this;
    }
    public set applyDesc(applyDesc: string | undefined) {
        this['apply_desc'] = applyDesc;
    }
    public get applyDesc() {
        return this['apply_desc'];
    }
    public withChannelNum(channelNum: string): SmsSignatureResp {
        this['channel_num'] = channelNum;
        return this;
    }
    public set channelNum(channelNum: string | undefined) {
        this['channel_num'] = channelNum;
    }
    public get channelNum() {
        return this['channel_num'];
    }
    public withReviewDesc(reviewDesc: string): SmsSignatureResp {
        this['review_desc'] = reviewDesc;
        return this;
    }
    public set reviewDesc(reviewDesc: string | undefined) {
        this['review_desc'] = reviewDesc;
    }
    public get reviewDesc() {
        return this['review_desc'];
    }
    public withFileId(fileId: string): SmsSignatureResp {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
    public withStatus(status: string): SmsSignatureResp {
        this['status'] = status;
        return this;
    }
    public withSite(site: string): SmsSignatureResp {
        this['site'] = site;
        return this;
    }
    public withSignatureSource(signatureSource: number): SmsSignatureResp {
        this['signature_source'] = signatureSource;
        return this;
    }
    public set signatureSource(signatureSource: number | undefined) {
        this['signature_source'] = signatureSource;
    }
    public get signatureSource() {
        return this['signature_source'];
    }
    public withIsInvolvedThird(isInvolvedThird: string): SmsSignatureResp {
        this['is_involved_third'] = isInvolvedThird;
        return this;
    }
    public set isInvolvedThird(isInvolvedThird: string | undefined) {
        this['is_involved_third'] = isInvolvedThird;
    }
    public get isInvolvedThird() {
        return this['is_involved_third'];
    }
    public withPowerAttorneyFileId(powerAttorneyFileId: string): SmsSignatureResp {
        this['power_attorney_file_id'] = powerAttorneyFileId;
        return this;
    }
    public set powerAttorneyFileId(powerAttorneyFileId: string | undefined) {
        this['power_attorney_file_id'] = powerAttorneyFileId;
    }
    public get powerAttorneyFileId() {
        return this['power_attorney_file_id'];
    }
    public withUrgeStatus(urgeStatus: string): SmsSignatureResp {
        this['urge_status'] = urgeStatus;
        return this;
    }
    public set urgeStatus(urgeStatus: string | undefined) {
        this['urge_status'] = urgeStatus;
    }
    public get urgeStatus() {
        return this['urge_status'];
    }
    public withUrgeTime(urgeTime: string): SmsSignatureResp {
        this['urge_time'] = urgeTime;
        return this;
    }
    public set urgeTime(urgeTime: string | undefined) {
        this['urge_time'] = urgeTime;
    }
    public get urgeTime() {
        return this['urge_time'];
    }
    public withUrgeDesc(urgeDesc: string): SmsSignatureResp {
        this['urge_desc'] = urgeDesc;
        return this;
    }
    public set urgeDesc(urgeDesc: string | undefined) {
        this['urge_desc'] = urgeDesc;
    }
    public get urgeDesc() {
        return this['urge_desc'];
    }
    public withAppKey(appKey: string): SmsSignatureResp {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey() {
        return this['app_key'];
    }
    public withSourceTitleContent(sourceTitleContent: string): SmsSignatureResp {
        this['source_title_content'] = sourceTitleContent;
        return this;
    }
    public set sourceTitleContent(sourceTitleContent: string | undefined) {
        this['source_title_content'] = sourceTitleContent;
    }
    public get sourceTitleContent() {
        return this['source_title_content'];
    }
    public withSignatureUsage(signatureUsage: string): SmsSignatureResp {
        this['signature_usage'] = signatureUsage;
        return this;
    }
    public set signatureUsage(signatureUsage: string | undefined) {
        this['signature_usage'] = signatureUsage;
    }
    public get signatureUsage() {
        return this['signature_usage'];
    }
}
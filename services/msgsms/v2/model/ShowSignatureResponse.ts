import { TenantBasic } from './TenantBasic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSignatureResponse extends SdkResponse {
    public id?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'customer_id'?: string;
    public tenant?: TenantBasic;
    private 'signature_name'?: string;
    private 'signature_id'?: string;
    private 'signature_type'?: string;
    private 'app_name'?: string;
    private 'apply_desc'?: string;
    private 'channel_num'?: string;
    private 'review_desc'?: string;
    private 'file_id'?: string;
    public status?: string;
    public site?: string;
    private 'signature_source'?: number;
    private 'is_involved_third'?: string;
    private 'power_attorney_file_id'?: string;
    private 'urge_status'?: string;
    private 'urge_time'?: string;
    private 'urge_desc'?: string;
    private 'app_key'?: string;
    private 'source_title_content'?: string;
    private 'signature_usage'?: string;
    private 'qualification_id'?: string;
    private 'qualification_name'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSignatureResponse {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): ShowSignatureResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowSignatureResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCustomerId(customerId: string): ShowSignatureResponse {
        this['customer_id'] = customerId;
        return this;
    }
    public set customerId(customerId: string  | undefined) {
        this['customer_id'] = customerId;
    }
    public get customerId(): string | undefined {
        return this['customer_id'];
    }
    public withTenant(tenant: TenantBasic): ShowSignatureResponse {
        this['tenant'] = tenant;
        return this;
    }
    public withSignatureName(signatureName: string): ShowSignatureResponse {
        this['signature_name'] = signatureName;
        return this;
    }
    public set signatureName(signatureName: string  | undefined) {
        this['signature_name'] = signatureName;
    }
    public get signatureName(): string | undefined {
        return this['signature_name'];
    }
    public withSignatureId(signatureId: string): ShowSignatureResponse {
        this['signature_id'] = signatureId;
        return this;
    }
    public set signatureId(signatureId: string  | undefined) {
        this['signature_id'] = signatureId;
    }
    public get signatureId(): string | undefined {
        return this['signature_id'];
    }
    public withSignatureType(signatureType: string): ShowSignatureResponse {
        this['signature_type'] = signatureType;
        return this;
    }
    public set signatureType(signatureType: string  | undefined) {
        this['signature_type'] = signatureType;
    }
    public get signatureType(): string | undefined {
        return this['signature_type'];
    }
    public withAppName(appName: string): ShowSignatureResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withApplyDesc(applyDesc: string): ShowSignatureResponse {
        this['apply_desc'] = applyDesc;
        return this;
    }
    public set applyDesc(applyDesc: string  | undefined) {
        this['apply_desc'] = applyDesc;
    }
    public get applyDesc(): string | undefined {
        return this['apply_desc'];
    }
    public withChannelNum(channelNum: string): ShowSignatureResponse {
        this['channel_num'] = channelNum;
        return this;
    }
    public set channelNum(channelNum: string  | undefined) {
        this['channel_num'] = channelNum;
    }
    public get channelNum(): string | undefined {
        return this['channel_num'];
    }
    public withReviewDesc(reviewDesc: string): ShowSignatureResponse {
        this['review_desc'] = reviewDesc;
        return this;
    }
    public set reviewDesc(reviewDesc: string  | undefined) {
        this['review_desc'] = reviewDesc;
    }
    public get reviewDesc(): string | undefined {
        return this['review_desc'];
    }
    public withFileId(fileId: string): ShowSignatureResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withStatus(status: string): ShowSignatureResponse {
        this['status'] = status;
        return this;
    }
    public withSite(site: string): ShowSignatureResponse {
        this['site'] = site;
        return this;
    }
    public withSignatureSource(signatureSource: number): ShowSignatureResponse {
        this['signature_source'] = signatureSource;
        return this;
    }
    public set signatureSource(signatureSource: number  | undefined) {
        this['signature_source'] = signatureSource;
    }
    public get signatureSource(): number | undefined {
        return this['signature_source'];
    }
    public withIsInvolvedThird(isInvolvedThird: string): ShowSignatureResponse {
        this['is_involved_third'] = isInvolvedThird;
        return this;
    }
    public set isInvolvedThird(isInvolvedThird: string  | undefined) {
        this['is_involved_third'] = isInvolvedThird;
    }
    public get isInvolvedThird(): string | undefined {
        return this['is_involved_third'];
    }
    public withPowerAttorneyFileId(powerAttorneyFileId: string): ShowSignatureResponse {
        this['power_attorney_file_id'] = powerAttorneyFileId;
        return this;
    }
    public set powerAttorneyFileId(powerAttorneyFileId: string  | undefined) {
        this['power_attorney_file_id'] = powerAttorneyFileId;
    }
    public get powerAttorneyFileId(): string | undefined {
        return this['power_attorney_file_id'];
    }
    public withUrgeStatus(urgeStatus: string): ShowSignatureResponse {
        this['urge_status'] = urgeStatus;
        return this;
    }
    public set urgeStatus(urgeStatus: string  | undefined) {
        this['urge_status'] = urgeStatus;
    }
    public get urgeStatus(): string | undefined {
        return this['urge_status'];
    }
    public withUrgeTime(urgeTime: string): ShowSignatureResponse {
        this['urge_time'] = urgeTime;
        return this;
    }
    public set urgeTime(urgeTime: string  | undefined) {
        this['urge_time'] = urgeTime;
    }
    public get urgeTime(): string | undefined {
        return this['urge_time'];
    }
    public withUrgeDesc(urgeDesc: string): ShowSignatureResponse {
        this['urge_desc'] = urgeDesc;
        return this;
    }
    public set urgeDesc(urgeDesc: string  | undefined) {
        this['urge_desc'] = urgeDesc;
    }
    public get urgeDesc(): string | undefined {
        return this['urge_desc'];
    }
    public withAppKey(appKey: string): ShowSignatureResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withSourceTitleContent(sourceTitleContent: string): ShowSignatureResponse {
        this['source_title_content'] = sourceTitleContent;
        return this;
    }
    public set sourceTitleContent(sourceTitleContent: string  | undefined) {
        this['source_title_content'] = sourceTitleContent;
    }
    public get sourceTitleContent(): string | undefined {
        return this['source_title_content'];
    }
    public withSignatureUsage(signatureUsage: string): ShowSignatureResponse {
        this['signature_usage'] = signatureUsage;
        return this;
    }
    public set signatureUsage(signatureUsage: string  | undefined) {
        this['signature_usage'] = signatureUsage;
    }
    public get signatureUsage(): string | undefined {
        return this['signature_usage'];
    }
    public withQualificationId(qualificationId: string): ShowSignatureResponse {
        this['qualification_id'] = qualificationId;
        return this;
    }
    public set qualificationId(qualificationId: string  | undefined) {
        this['qualification_id'] = qualificationId;
    }
    public get qualificationId(): string | undefined {
        return this['qualification_id'];
    }
    public withQualificationName(qualificationName: string): ShowSignatureResponse {
        this['qualification_name'] = qualificationName;
        return this;
    }
    public set qualificationName(qualificationName: string  | undefined) {
        this['qualification_name'] = qualificationName;
    }
    public get qualificationName(): string | undefined {
        return this['qualification_name'];
    }
}
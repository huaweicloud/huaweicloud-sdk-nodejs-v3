import { DataBucketQuery } from './DataBucketQuery';
import { Lts } from './Lts';
import { ObsInfo } from './ObsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrackerResponse extends SdkResponse {
    public id?: string;
    private 'create_time'?: number | undefined;
    private 'kms_id'?: string | undefined;
    private 'is_support_validate'?: boolean | undefined;
    public lts?: Lts;
    private 'tracker_type'?: CreateTrackerResponseTrackerTypeEnum | undefined;
    private 'domain_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'tracker_name'?: string | undefined;
    public status?: CreateTrackerResponseStatusEnum;
    public detail?: string;
    private 'is_support_trace_files_encryption'?: boolean | undefined;
    private 'obs_info'?: ObsInfo | undefined;
    private 'data_bucket'?: DataBucketQuery | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateTrackerResponse {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: number): CreateTrackerResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withKmsId(kmsId: string): CreateTrackerResponse {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId() {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): CreateTrackerResponse {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate() {
        return this['is_support_validate'];
    }
    public withLts(lts: Lts): CreateTrackerResponse {
        this['lts'] = lts;
        return this;
    }
    public withTrackerType(trackerType: CreateTrackerResponseTrackerTypeEnum): CreateTrackerResponse {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: CreateTrackerResponseTrackerTypeEnum | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType() {
        return this['tracker_type'];
    }
    public withDomainId(domainId: string): CreateTrackerResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreateTrackerResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTrackerName(trackerName: string): CreateTrackerResponse {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName() {
        return this['tracker_name'];
    }
    public withStatus(status: CreateTrackerResponseStatusEnum): CreateTrackerResponse {
        this['status'] = status;
        return this;
    }
    public withDetail(detail: string): CreateTrackerResponse {
        this['detail'] = detail;
        return this;
    }
    public withIsSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean): CreateTrackerResponse {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
        return this;
    }
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption() {
        return this['is_support_trace_files_encryption'];
    }
    public withObsInfo(obsInfo: ObsInfo): CreateTrackerResponse {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo() {
        return this['obs_info'];
    }
    public withDataBucket(dataBucket: DataBucketQuery): CreateTrackerResponse {
        this['data_bucket'] = dataBucket;
        return this;
    }
    public set dataBucket(dataBucket: DataBucketQuery | undefined) {
        this['data_bucket'] = dataBucket;
    }
    public get dataBucket() {
        return this['data_bucket'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTrackerResponseTrackerTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTrackerResponseStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

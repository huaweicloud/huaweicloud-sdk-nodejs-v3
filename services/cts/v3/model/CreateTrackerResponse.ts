import { DataBucketQuery } from './DataBucketQuery';
import { Lts } from './Lts';
import { ManagementEventSelector } from './ManagementEventSelector';
import { ObsInfo } from './ObsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrackerResponse extends SdkResponse {
    public id?: string;
    private 'create_time'?: number;
    private 'kms_id'?: string;
    private 'is_support_validate'?: boolean;
    private 'is_organization_tracker'?: boolean;
    private 'management_event_selector'?: ManagementEventSelector;
    public lts?: Lts;
    private 'tracker_type'?: CreateTrackerResponseTrackerTypeEnum | string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'tracker_name'?: string;
    private 'agency_name'?: CreateTrackerResponseAgencyNameEnum | string;
    public status?: CreateTrackerResponseStatusEnum | string;
    public detail?: string;
    private 'is_support_trace_files_encryption'?: boolean;
    private 'obs_info'?: ObsInfo;
    private 'data_bucket'?: DataBucketQuery;
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
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withKmsId(kmsId: string): CreateTrackerResponse {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): CreateTrackerResponse {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean  | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate(): boolean | undefined {
        return this['is_support_validate'];
    }
    public withIsOrganizationTracker(isOrganizationTracker: boolean): CreateTrackerResponse {
        this['is_organization_tracker'] = isOrganizationTracker;
        return this;
    }
    public set isOrganizationTracker(isOrganizationTracker: boolean  | undefined) {
        this['is_organization_tracker'] = isOrganizationTracker;
    }
    public get isOrganizationTracker(): boolean | undefined {
        return this['is_organization_tracker'];
    }
    public withManagementEventSelector(managementEventSelector: ManagementEventSelector): CreateTrackerResponse {
        this['management_event_selector'] = managementEventSelector;
        return this;
    }
    public set managementEventSelector(managementEventSelector: ManagementEventSelector  | undefined) {
        this['management_event_selector'] = managementEventSelector;
    }
    public get managementEventSelector(): ManagementEventSelector | undefined {
        return this['management_event_selector'];
    }
    public withLts(lts: Lts): CreateTrackerResponse {
        this['lts'] = lts;
        return this;
    }
    public withTrackerType(trackerType: CreateTrackerResponseTrackerTypeEnum | string): CreateTrackerResponse {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: CreateTrackerResponseTrackerTypeEnum | string  | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType(): CreateTrackerResponseTrackerTypeEnum | string | undefined {
        return this['tracker_type'];
    }
    public withDomainId(domainId: string): CreateTrackerResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreateTrackerResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTrackerName(trackerName: string): CreateTrackerResponse {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withAgencyName(agencyName: CreateTrackerResponseAgencyNameEnum | string): CreateTrackerResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: CreateTrackerResponseAgencyNameEnum | string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): CreateTrackerResponseAgencyNameEnum | string | undefined {
        return this['agency_name'];
    }
    public withStatus(status: CreateTrackerResponseStatusEnum | string): CreateTrackerResponse {
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
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean  | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption(): boolean | undefined {
        return this['is_support_trace_files_encryption'];
    }
    public withObsInfo(obsInfo: ObsInfo): CreateTrackerResponse {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withDataBucket(dataBucket: DataBucketQuery): CreateTrackerResponse {
        this['data_bucket'] = dataBucket;
        return this;
    }
    public set dataBucket(dataBucket: DataBucketQuery  | undefined) {
        this['data_bucket'] = dataBucket;
    }
    public get dataBucket(): DataBucketQuery | undefined {
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
export enum CreateTrackerResponseAgencyNameEnum {
    CTS_ADMIN_TRUST = 'cts_admin_trust'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTrackerResponseStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

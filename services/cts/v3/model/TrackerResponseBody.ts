import { DataBucketQuery } from './DataBucketQuery';
import { Lts } from './Lts';
import { ManagementEventSelector } from './ManagementEventSelector';
import { ObsInfo } from './ObsInfo';


export class TrackerResponseBody {
    public id?: string;
    private 'create_time'?: number;
    private 'kms_id'?: string;
    private 'is_support_validate'?: boolean;
    private 'is_organization_tracker'?: boolean;
    private 'agency_name'?: TrackerResponseBodyAgencyNameEnum | string;
    private 'management_event_selector'?: ManagementEventSelector;
    public lts?: Lts;
    private 'tracker_type'?: TrackerResponseBodyTrackerTypeEnum | string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'tracker_name'?: string;
    public status?: TrackerResponseBodyStatusEnum | string;
    public detail?: string;
    private 'is_support_trace_files_encryption'?: boolean;
    private 'group_id'?: string;
    private 'stream_id'?: string;
    private 'obs_info'?: ObsInfo;
    private 'data_bucket'?: DataBucketQuery;
    public constructor() { 
    }
    public withId(id: string): TrackerResponseBody {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: number): TrackerResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withKmsId(kmsId: string): TrackerResponseBody {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): TrackerResponseBody {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean  | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate(): boolean | undefined {
        return this['is_support_validate'];
    }
    public withIsOrganizationTracker(isOrganizationTracker: boolean): TrackerResponseBody {
        this['is_organization_tracker'] = isOrganizationTracker;
        return this;
    }
    public set isOrganizationTracker(isOrganizationTracker: boolean  | undefined) {
        this['is_organization_tracker'] = isOrganizationTracker;
    }
    public get isOrganizationTracker(): boolean | undefined {
        return this['is_organization_tracker'];
    }
    public withAgencyName(agencyName: TrackerResponseBodyAgencyNameEnum | string): TrackerResponseBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: TrackerResponseBodyAgencyNameEnum | string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): TrackerResponseBodyAgencyNameEnum | string | undefined {
        return this['agency_name'];
    }
    public withManagementEventSelector(managementEventSelector: ManagementEventSelector): TrackerResponseBody {
        this['management_event_selector'] = managementEventSelector;
        return this;
    }
    public set managementEventSelector(managementEventSelector: ManagementEventSelector  | undefined) {
        this['management_event_selector'] = managementEventSelector;
    }
    public get managementEventSelector(): ManagementEventSelector | undefined {
        return this['management_event_selector'];
    }
    public withLts(lts: Lts): TrackerResponseBody {
        this['lts'] = lts;
        return this;
    }
    public withTrackerType(trackerType: TrackerResponseBodyTrackerTypeEnum | string): TrackerResponseBody {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: TrackerResponseBodyTrackerTypeEnum | string  | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType(): TrackerResponseBodyTrackerTypeEnum | string | undefined {
        return this['tracker_type'];
    }
    public withDomainId(domainId: string): TrackerResponseBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): TrackerResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTrackerName(trackerName: string): TrackerResponseBody {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withStatus(status: TrackerResponseBodyStatusEnum | string): TrackerResponseBody {
        this['status'] = status;
        return this;
    }
    public withDetail(detail: string): TrackerResponseBody {
        this['detail'] = detail;
        return this;
    }
    public withIsSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean): TrackerResponseBody {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
        return this;
    }
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean  | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption(): boolean | undefined {
        return this['is_support_trace_files_encryption'];
    }
    public withGroupId(groupId: string): TrackerResponseBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withStreamId(streamId: string): TrackerResponseBody {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string  | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId(): string | undefined {
        return this['stream_id'];
    }
    public withObsInfo(obsInfo: ObsInfo): TrackerResponseBody {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): ObsInfo | undefined {
        return this['obs_info'];
    }
    public withDataBucket(dataBucket: DataBucketQuery): TrackerResponseBody {
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
export enum TrackerResponseBodyAgencyNameEnum {
    CTS_ADMIN_TRUST = 'cts_admin_trust'
}
/**
    * @export
    * @enum {string}
    */
export enum TrackerResponseBodyTrackerTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}
/**
    * @export
    * @enum {string}
    */
export enum TrackerResponseBodyStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

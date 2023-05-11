import { DataBucketQuery } from './DataBucketQuery';
import { Lts } from './Lts';
import { ObsInfo } from './ObsInfo';


export class TrackerResponseBody {
    public id?: string;
    private 'create_time'?: number | undefined;
    private 'kms_id'?: string | undefined;
    private 'is_support_validate'?: boolean | undefined;
    public lts?: Lts;
    private 'tracker_type'?: TrackerResponseBodyTrackerTypeEnum | undefined;
    private 'domain_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'tracker_name'?: string | undefined;
    public status?: TrackerResponseBodyStatusEnum;
    public detail?: string;
    private 'is_support_trace_files_encryption'?: boolean | undefined;
    private 'group_id'?: string | undefined;
    private 'stream_id'?: string | undefined;
    private 'obs_info'?: ObsInfo | undefined;
    private 'data_bucket'?: DataBucketQuery | undefined;
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
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withKmsId(kmsId: string): TrackerResponseBody {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId() {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): TrackerResponseBody {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate() {
        return this['is_support_validate'];
    }
    public withLts(lts: Lts): TrackerResponseBody {
        this['lts'] = lts;
        return this;
    }
    public withTrackerType(trackerType: TrackerResponseBodyTrackerTypeEnum): TrackerResponseBody {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: TrackerResponseBodyTrackerTypeEnum | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType() {
        return this['tracker_type'];
    }
    public withDomainId(domainId: string): TrackerResponseBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): TrackerResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTrackerName(trackerName: string): TrackerResponseBody {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName() {
        return this['tracker_name'];
    }
    public withStatus(status: TrackerResponseBodyStatusEnum): TrackerResponseBody {
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
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption() {
        return this['is_support_trace_files_encryption'];
    }
    public withGroupId(groupId: string): TrackerResponseBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withStreamId(streamId: string): TrackerResponseBody {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
    public withObsInfo(obsInfo: ObsInfo): TrackerResponseBody {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: ObsInfo | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo() {
        return this['obs_info'];
    }
    public withDataBucket(dataBucket: DataBucketQuery): TrackerResponseBody {
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

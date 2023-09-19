import { DataBucket } from './DataBucket';
import { ManagementEventSelector } from './ManagementEventSelector';
import { TrackerObsInfo } from './TrackerObsInfo';


export class UpdateTrackerRequestBody {
    private 'tracker_type'?: UpdateTrackerRequestBodyTrackerTypeEnum | string;
    private 'tracker_name'?: string;
    public status?: UpdateTrackerRequestBodyStatusEnum | string;
    private 'is_organization_tracker'?: boolean;
    private 'management_event_selector'?: ManagementEventSelector;
    private 'is_lts_enabled'?: boolean;
    private 'obs_info'?: TrackerObsInfo;
    private 'is_support_trace_files_encryption'?: boolean;
    private 'kms_id'?: string;
    private 'is_support_validate'?: boolean;
    private 'data_bucket'?: DataBucket;
    public constructor(trackerType?: string, trackerName?: string) { 
        this['tracker_type'] = trackerType;
        this['tracker_name'] = trackerName;
    }
    public withTrackerType(trackerType: UpdateTrackerRequestBodyTrackerTypeEnum | string): UpdateTrackerRequestBody {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: UpdateTrackerRequestBodyTrackerTypeEnum | string  | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType(): UpdateTrackerRequestBodyTrackerTypeEnum | string | undefined {
        return this['tracker_type'];
    }
    public withTrackerName(trackerName: string): UpdateTrackerRequestBody {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withStatus(status: UpdateTrackerRequestBodyStatusEnum | string): UpdateTrackerRequestBody {
        this['status'] = status;
        return this;
    }
    public withIsOrganizationTracker(isOrganizationTracker: boolean): UpdateTrackerRequestBody {
        this['is_organization_tracker'] = isOrganizationTracker;
        return this;
    }
    public set isOrganizationTracker(isOrganizationTracker: boolean  | undefined) {
        this['is_organization_tracker'] = isOrganizationTracker;
    }
    public get isOrganizationTracker(): boolean | undefined {
        return this['is_organization_tracker'];
    }
    public withManagementEventSelector(managementEventSelector: ManagementEventSelector): UpdateTrackerRequestBody {
        this['management_event_selector'] = managementEventSelector;
        return this;
    }
    public set managementEventSelector(managementEventSelector: ManagementEventSelector  | undefined) {
        this['management_event_selector'] = managementEventSelector;
    }
    public get managementEventSelector(): ManagementEventSelector | undefined {
        return this['management_event_selector'];
    }
    public withIsLtsEnabled(isLtsEnabled: boolean): UpdateTrackerRequestBody {
        this['is_lts_enabled'] = isLtsEnabled;
        return this;
    }
    public set isLtsEnabled(isLtsEnabled: boolean  | undefined) {
        this['is_lts_enabled'] = isLtsEnabled;
    }
    public get isLtsEnabled(): boolean | undefined {
        return this['is_lts_enabled'];
    }
    public withObsInfo(obsInfo: TrackerObsInfo): UpdateTrackerRequestBody {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: TrackerObsInfo  | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo(): TrackerObsInfo | undefined {
        return this['obs_info'];
    }
    public withIsSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean): UpdateTrackerRequestBody {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
        return this;
    }
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean  | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption(): boolean | undefined {
        return this['is_support_trace_files_encryption'];
    }
    public withKmsId(kmsId: string): UpdateTrackerRequestBody {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string  | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId(): string | undefined {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): UpdateTrackerRequestBody {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean  | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate(): boolean | undefined {
        return this['is_support_validate'];
    }
    public withDataBucket(dataBucket: DataBucket): UpdateTrackerRequestBody {
        this['data_bucket'] = dataBucket;
        return this;
    }
    public set dataBucket(dataBucket: DataBucket  | undefined) {
        this['data_bucket'] = dataBucket;
    }
    public get dataBucket(): DataBucket | undefined {
        return this['data_bucket'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTrackerRequestBodyTrackerTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTrackerRequestBodyStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}

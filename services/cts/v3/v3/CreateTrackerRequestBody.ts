import { DataBucket } from './DataBucket';
import { TrackerObsInfo } from './TrackerObsInfo';


export class CreateTrackerRequestBody {
    private 'tracker_type': CreateTrackerRequestBodyTrackerTypeEnum | undefined;
    private 'tracker_name': string | undefined;
    private 'is_lts_enabled'?: boolean | undefined;
    private 'obs_info'?: TrackerObsInfo | undefined;
    private 'is_support_trace_files_encryption'?: boolean | undefined;
    private 'kms_id'?: string | undefined;
    private 'is_support_validate'?: boolean | undefined;
    private 'data_bucket'?: DataBucket | undefined;
    public constructor(trackerType?: any, trackerName?: any) { 
        this['tracker_type'] = trackerType;
        this['tracker_name'] = trackerName;
    }
    public withTrackerType(trackerType: CreateTrackerRequestBodyTrackerTypeEnum): CreateTrackerRequestBody {
        this['tracker_type'] = trackerType;
        return this;
    }
    public set trackerType(trackerType: CreateTrackerRequestBodyTrackerTypeEnum | undefined) {
        this['tracker_type'] = trackerType;
    }
    public get trackerType() {
        return this['tracker_type'];
    }
    public withTrackerName(trackerName: string): CreateTrackerRequestBody {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName() {
        return this['tracker_name'];
    }
    public withIsLtsEnabled(isLtsEnabled: boolean): CreateTrackerRequestBody {
        this['is_lts_enabled'] = isLtsEnabled;
        return this;
    }
    public set isLtsEnabled(isLtsEnabled: boolean | undefined) {
        this['is_lts_enabled'] = isLtsEnabled;
    }
    public get isLtsEnabled() {
        return this['is_lts_enabled'];
    }
    public withObsInfo(obsInfo: TrackerObsInfo): CreateTrackerRequestBody {
        this['obs_info'] = obsInfo;
        return this;
    }
    public set obsInfo(obsInfo: TrackerObsInfo | undefined) {
        this['obs_info'] = obsInfo;
    }
    public get obsInfo() {
        return this['obs_info'];
    }
    public withIsSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean): CreateTrackerRequestBody {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
        return this;
    }
    public set isSupportTraceFilesEncryption(isSupportTraceFilesEncryption: boolean | undefined) {
        this['is_support_trace_files_encryption'] = isSupportTraceFilesEncryption;
    }
    public get isSupportTraceFilesEncryption() {
        return this['is_support_trace_files_encryption'];
    }
    public withKmsId(kmsId: string): CreateTrackerRequestBody {
        this['kms_id'] = kmsId;
        return this;
    }
    public set kmsId(kmsId: string | undefined) {
        this['kms_id'] = kmsId;
    }
    public get kmsId() {
        return this['kms_id'];
    }
    public withIsSupportValidate(isSupportValidate: boolean): CreateTrackerRequestBody {
        this['is_support_validate'] = isSupportValidate;
        return this;
    }
    public set isSupportValidate(isSupportValidate: boolean | undefined) {
        this['is_support_validate'] = isSupportValidate;
    }
    public get isSupportValidate() {
        return this['is_support_validate'];
    }
    public withDataBucket(dataBucket: DataBucket): CreateTrackerRequestBody {
        this['data_bucket'] = dataBucket;
        return this;
    }
    public set dataBucket(dataBucket: DataBucket | undefined) {
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
export enum CreateTrackerRequestBodyTrackerTypeEnum {
    SYSTEM = 'system',
    DATA = 'data'
}

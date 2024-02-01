import { ErrorResponse } from './ErrorResponse';
import { OutputAssetInfo } from './OutputAssetInfo';


export class DigitalHumanVideo {
    private 'job_id'?: string;
    public state?: DigitalHumanVideoStateEnum | string;
    private 'job_type'?: DigitalHumanVideoJobTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public duration?: number;
    private 'output_asset_config'?: OutputAssetInfo;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    public constructor(jobId?: string, state?: string) { 
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): DigitalHumanVideo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: DigitalHumanVideoStateEnum | string): DigitalHumanVideo {
        this['state'] = state;
        return this;
    }
    public withJobType(jobType: DigitalHumanVideoJobTypeEnum | string): DigitalHumanVideo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: DigitalHumanVideoJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): DigitalHumanVideoJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withStartTime(startTime: string): DigitalHumanVideo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): DigitalHumanVideo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): DigitalHumanVideo {
        this['duration'] = duration;
        return this;
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetInfo): DigitalHumanVideo {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetInfo  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetInfo | undefined {
        return this['output_asset_config'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): DigitalHumanVideo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): DigitalHumanVideo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): DigitalHumanVideo {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DigitalHumanVideoStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}
/**
    * @export
    * @enum {string}
    */
export enum DigitalHumanVideoJobTypeEnum {
    E_2D_DIGITAL_HUMAN_VIDEO = '2D_DIGITAL_HUMAN_VIDEO',
    DIGITAL_HUMAN_PHOTO_VIDEO = 'DIGITAL_HUMAN_PHOTO_VIDEO'
}

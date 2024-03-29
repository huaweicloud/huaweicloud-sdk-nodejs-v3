import { DigitalHumanModelingJobInfo } from './DigitalHumanModelingJobInfo';
import { ErrorResponse } from './ErrorResponse';


export class PictureModelingInfo {
    private 'job_id'?: string;
    public state?: PictureModelingInfoStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_info'?: ErrorResponse;
    private 'model_asset_id'?: string;
    public name?: string;
    private 'style_id'?: string;
    private 'model_cover_url'?: string;
    public constructor(jobId?: string, state?: string) { 
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): PictureModelingInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: PictureModelingInfoStateEnum | string): PictureModelingInfo {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): PictureModelingInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): PictureModelingInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): PictureModelingInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withModelAssetId(modelAssetId: string): PictureModelingInfo {
        this['model_asset_id'] = modelAssetId;
        return this;
    }
    public set modelAssetId(modelAssetId: string  | undefined) {
        this['model_asset_id'] = modelAssetId;
    }
    public get modelAssetId(): string | undefined {
        return this['model_asset_id'];
    }
    public withName(name: string): PictureModelingInfo {
        this['name'] = name;
        return this;
    }
    public withStyleId(styleId: string): PictureModelingInfo {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withModelCoverUrl(modelCoverUrl: string): PictureModelingInfo {
        this['model_cover_url'] = modelCoverUrl;
        return this;
    }
    public set modelCoverUrl(modelCoverUrl: string  | undefined) {
        this['model_cover_url'] = modelCoverUrl;
    }
    public get modelCoverUrl(): string | undefined {
        return this['model_cover_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PictureModelingInfoStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    PARTIAL_SUCCEED = 'PARTIAL_SUCCEED',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED'
}

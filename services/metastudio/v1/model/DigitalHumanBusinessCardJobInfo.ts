import { ErrorResponse } from './ErrorResponse';
import { OutputAssetInfo } from './OutputAssetInfo';


export class DigitalHumanBusinessCardJobInfo {
    private 'job_id'?: string;
    public state?: DigitalHumanBusinessCardJobInfoStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'output_asset_config'?: OutputAssetInfo;
    private 'error_info'?: ErrorResponse;
    private 'create_time'?: string;
    private 'lastupdate_time'?: string;
    private 'business_card_type'?: DigitalHumanBusinessCardJobInfoBusinessCardTypeEnum | string;
    public constructor(jobId?: string, state?: string) { 
        this['job_id'] = jobId;
        this['state'] = state;
    }
    public withJobId(jobId: string): DigitalHumanBusinessCardJobInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: DigitalHumanBusinessCardJobInfoStateEnum | string): DigitalHumanBusinessCardJobInfo {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): DigitalHumanBusinessCardJobInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): DigitalHumanBusinessCardJobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOutputAssetConfig(outputAssetConfig: OutputAssetInfo): DigitalHumanBusinessCardJobInfo {
        this['output_asset_config'] = outputAssetConfig;
        return this;
    }
    public set outputAssetConfig(outputAssetConfig: OutputAssetInfo  | undefined) {
        this['output_asset_config'] = outputAssetConfig;
    }
    public get outputAssetConfig(): OutputAssetInfo | undefined {
        return this['output_asset_config'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): DigitalHumanBusinessCardJobInfo {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
    public withCreateTime(createTime: string): DigitalHumanBusinessCardJobInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastupdateTime(lastupdateTime: string): DigitalHumanBusinessCardJobInfo {
        this['lastupdate_time'] = lastupdateTime;
        return this;
    }
    public set lastupdateTime(lastupdateTime: string  | undefined) {
        this['lastupdate_time'] = lastupdateTime;
    }
    public get lastupdateTime(): string | undefined {
        return this['lastupdate_time'];
    }
    public withBusinessCardType(businessCardType: DigitalHumanBusinessCardJobInfoBusinessCardTypeEnum | string): DigitalHumanBusinessCardJobInfo {
        this['business_card_type'] = businessCardType;
        return this;
    }
    public set businessCardType(businessCardType: DigitalHumanBusinessCardJobInfoBusinessCardTypeEnum | string  | undefined) {
        this['business_card_type'] = businessCardType;
    }
    public get businessCardType(): DigitalHumanBusinessCardJobInfoBusinessCardTypeEnum | string | undefined {
        return this['business_card_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DigitalHumanBusinessCardJobInfoStateEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED',
    CANCELED = 'CANCELED',
    BLOCK = 'BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum DigitalHumanBusinessCardJobInfoBusinessCardTypeEnum {
    E_2D_DIGITAL_HUMAN_CARD = '2D_DIGITAL_HUMAN_CARD'
}

import { TranscodeInfoResult } from './TranscodeInfoResult';


export class Result {
    public type?: string;
    private 'asset_id'?: string;
    public status?: ResultStatusEnum | string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    private 'transcode_result'?: TranscodeInfoResult;
    public constructor() { 
    }
    public withType(type: string): Result {
        this['type'] = type;
        return this;
    }
    public withAssetId(assetId: string): Result {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withStatus(status: ResultStatusEnum | string): Result {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): Result {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): Result {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTranscodeResult(transcodeResult: TranscodeInfoResult): Result {
        this['transcode_result'] = transcodeResult;
        return this;
    }
    public set transcodeResult(transcodeResult: TranscodeInfoResult  | undefined) {
        this['transcode_result'] = transcodeResult;
    }
    public get transcodeResult(): TranscodeInfoResult | undefined {
        return this['transcode_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResultStatusEnum {
    WAITING = 'WAITING',
    PROCESSING = 'PROCESSING',
    SUCCEED = 'SUCCEED',
    FAILED = 'FAILED'
}

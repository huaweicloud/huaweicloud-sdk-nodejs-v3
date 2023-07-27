
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfInstanceProgressV2Response extends SdkResponse {
    public progress?: ShowDetailsOfInstanceProgressV2ResponseProgressEnum | number;
    public status?: ShowDetailsOfInstanceProgressV2ResponseStatusEnum | string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
        super();
    }
    public withProgress(progress: ShowDetailsOfInstanceProgressV2ResponseProgressEnum | number): ShowDetailsOfInstanceProgressV2Response {
        this['progress'] = progress;
        return this;
    }
    public withStatus(status: ShowDetailsOfInstanceProgressV2ResponseStatusEnum | string): ShowDetailsOfInstanceProgressV2Response {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ShowDetailsOfInstanceProgressV2Response {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ShowDetailsOfInstanceProgressV2Response {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withStartTime(startTime: number): ShowDetailsOfInstanceProgressV2Response {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDetailsOfInstanceProgressV2Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfInstanceProgressV2ResponseProgressEnum {
    NUMBER_30 = 30,
    NUMBER_50 = 50,
    NUMBER_80 = 80,
    NUMBER_90 = 90,
    NUMBER_100 = 100
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfInstanceProgressV2ResponseStatusEnum {
    CREATING = 'creating',
    SUCCESS = 'success',
    FAILED = 'failed'
}

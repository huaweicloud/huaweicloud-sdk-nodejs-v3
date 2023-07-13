
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordingDetailResponse extends SdkResponse {
    public confUUID?: string;
    public confID?: string;
    public url?: Array<string>;
    public rcdTime?: number;
    public rcdSize?: number;
    public subject?: string;
    public scheduserName?: string;
    public startTime?: string;
    public isDecodeFinish?: boolean;
    public decodeEndTime?: number;
    public available?: boolean;
    public recordAuthType?: number;
    public constructor() { 
        super();
    }
    public withConfUUID(confUUID: string): ShowRecordingDetailResponse {
        this['confUUID'] = confUUID;
        return this;
    }
    public withConfID(confID: string): ShowRecordingDetailResponse {
        this['confID'] = confID;
        return this;
    }
    public withUrl(url: Array<string>): ShowRecordingDetailResponse {
        this['url'] = url;
        return this;
    }
    public withRcdTime(rcdTime: number): ShowRecordingDetailResponse {
        this['rcdTime'] = rcdTime;
        return this;
    }
    public withRcdSize(rcdSize: number): ShowRecordingDetailResponse {
        this['rcdSize'] = rcdSize;
        return this;
    }
    public withSubject(subject: string): ShowRecordingDetailResponse {
        this['subject'] = subject;
        return this;
    }
    public withScheduserName(scheduserName: string): ShowRecordingDetailResponse {
        this['scheduserName'] = scheduserName;
        return this;
    }
    public withStartTime(startTime: string): ShowRecordingDetailResponse {
        this['startTime'] = startTime;
        return this;
    }
    public withIsDecodeFinish(isDecodeFinish: boolean): ShowRecordingDetailResponse {
        this['isDecodeFinish'] = isDecodeFinish;
        return this;
    }
    public withDecodeEndTime(decodeEndTime: number): ShowRecordingDetailResponse {
        this['decodeEndTime'] = decodeEndTime;
        return this;
    }
    public withAvailable(available: boolean): ShowRecordingDetailResponse {
        this['available'] = available;
        return this;
    }
    public withRecordAuthType(recordAuthType: number): ShowRecordingDetailResponse {
        this['recordAuthType'] = recordAuthType;
        return this;
    }
}
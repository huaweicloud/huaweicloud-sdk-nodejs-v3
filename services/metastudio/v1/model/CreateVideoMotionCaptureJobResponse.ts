import { RTCRoomInfoList } from './RTCRoomInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVideoMotionCaptureJobResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'rtc_room_info'?: RTCRoomInfoList;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateVideoMotionCaptureJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRtcRoomInfo(rtcRoomInfo: RTCRoomInfoList): CreateVideoMotionCaptureJobResponse {
        this['rtc_room_info'] = rtcRoomInfo;
        return this;
    }
    public set rtcRoomInfo(rtcRoomInfo: RTCRoomInfoList  | undefined) {
        this['rtc_room_info'] = rtcRoomInfo;
    }
    public get rtcRoomInfo(): RTCRoomInfoList | undefined {
        return this['rtc_room_info'];
    }
    public withXRequestId(xRequestId: string): CreateVideoMotionCaptureJobResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
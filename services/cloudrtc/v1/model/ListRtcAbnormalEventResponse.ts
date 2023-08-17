import { RTCCause } from './RTCCause';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcAbnormalEventResponse extends SdkResponse {
    private 'room_id'?: string;
    public uid?: string;
    private 'exp_id'?: string;
    private 'abnormal_list'?: Array<RTCCause>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRoomId(roomId: string): ListRtcAbnormalEventResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withUid(uid: string): ListRtcAbnormalEventResponse {
        this['uid'] = uid;
        return this;
    }
    public withExpId(expId: string): ListRtcAbnormalEventResponse {
        this['exp_id'] = expId;
        return this;
    }
    public set expId(expId: string  | undefined) {
        this['exp_id'] = expId;
    }
    public get expId(): string | undefined {
        return this['exp_id'];
    }
    public withAbnormalList(abnormalList: Array<RTCCause>): ListRtcAbnormalEventResponse {
        this['abnormal_list'] = abnormalList;
        return this;
    }
    public set abnormalList(abnormalList: Array<RTCCause>  | undefined) {
        this['abnormal_list'] = abnormalList;
    }
    public get abnormalList(): Array<RTCCause> | undefined {
        return this['abnormal_list'];
    }
    public withXRequestId(xRequestId: string): ListRtcAbnormalEventResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}
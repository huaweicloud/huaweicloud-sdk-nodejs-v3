import { QosQualityData } from './QosQualityData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcClientQosDetailsResponse extends SdkResponse {
    private 'room_id'?: string | undefined;
    public data?: Array<QosQualityData>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRoomId(roomId: string): ListRtcClientQosDetailsResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withData(data: Array<QosQualityData>): ListRtcClientQosDetailsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRtcClientQosDetailsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}
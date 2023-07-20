import { RtcServerRoomInfo } from './RtcServerRoomInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcRoomListResponse extends SdkResponse {
    public total?: number;
    public limit?: number;
    public offset?: number;
    private 'room_info_list'?: Array<RtcServerRoomInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRtcRoomListResponse {
        this['total'] = total;
        return this;
    }
    public withLimit(limit: number): ListRtcRoomListResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcRoomListResponse {
        this['offset'] = offset;
        return this;
    }
    public withRoomInfoList(roomInfoList: Array<RtcServerRoomInfo>): ListRtcRoomListResponse {
        this['room_info_list'] = roomInfoList;
        return this;
    }
    public set roomInfoList(roomInfoList: Array<RtcServerRoomInfo>  | undefined) {
        this['room_info_list'] = roomInfoList;
    }
    public get roomInfoList(): Array<RtcServerRoomInfo> | undefined {
        return this['room_info_list'];
    }
    public withXRequestId(xRequestId: string): ListRtcRoomListResponse {
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
import { SmartLiveRoomBaseInfo } from './SmartLiveRoomBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartLiveRoomsResponse extends SdkResponse {
    public count?: number;
    private 'smart_live_rooms'?: Array<SmartLiveRoomBaseInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartLiveRoomsResponse {
        this['count'] = count;
        return this;
    }
    public withSmartLiveRooms(smartLiveRooms: Array<SmartLiveRoomBaseInfo>): ListSmartLiveRoomsResponse {
        this['smart_live_rooms'] = smartLiveRooms;
        return this;
    }
    public set smartLiveRooms(smartLiveRooms: Array<SmartLiveRoomBaseInfo>  | undefined) {
        this['smart_live_rooms'] = smartLiveRooms;
    }
    public get smartLiveRooms(): Array<SmartLiveRoomBaseInfo> | undefined {
        return this['smart_live_rooms'];
    }
    public withXRequestId(xRequestId: string): ListSmartLiveRoomsResponse {
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
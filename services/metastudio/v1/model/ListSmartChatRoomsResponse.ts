import { SmartChatRoomBaseInfo } from './SmartChatRoomBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartChatRoomsResponse extends SdkResponse {
    public count?: number;
    private 'count_concurrency'?: number;
    private 'smart_chat_rooms'?: Array<SmartChatRoomBaseInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartChatRoomsResponse {
        this['count'] = count;
        return this;
    }
    public withCountConcurrency(countConcurrency: number): ListSmartChatRoomsResponse {
        this['count_concurrency'] = countConcurrency;
        return this;
    }
    public set countConcurrency(countConcurrency: number  | undefined) {
        this['count_concurrency'] = countConcurrency;
    }
    public get countConcurrency(): number | undefined {
        return this['count_concurrency'];
    }
    public withSmartChatRooms(smartChatRooms: Array<SmartChatRoomBaseInfo>): ListSmartChatRoomsResponse {
        this['smart_chat_rooms'] = smartChatRooms;
        return this;
    }
    public set smartChatRooms(smartChatRooms: Array<SmartChatRoomBaseInfo>  | undefined) {
        this['smart_chat_rooms'] = smartChatRooms;
    }
    public get smartChatRooms(): Array<SmartChatRoomBaseInfo> | undefined {
        return this['smart_chat_rooms'];
    }
    public withXRequestId(xRequestId: string): ListSmartChatRoomsResponse {
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
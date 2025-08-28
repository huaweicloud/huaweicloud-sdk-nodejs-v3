import { SmartChatRoomBaseInfo } from './SmartChatRoomBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartChatRoomsResponse extends SdkResponse {
    public count?: number;
    private 'count_concurrency'?: number;
    private 'count_client_nums'?: number;
    private 'count_client_nums_token'?: number;
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
    public withCountClientNums(countClientNums: number): ListSmartChatRoomsResponse {
        this['count_client_nums'] = countClientNums;
        return this;
    }
    public set countClientNums(countClientNums: number  | undefined) {
        this['count_client_nums'] = countClientNums;
    }
    public get countClientNums(): number | undefined {
        return this['count_client_nums'];
    }
    public withCountClientNumsToken(countClientNumsToken: number): ListSmartChatRoomsResponse {
        this['count_client_nums_token'] = countClientNumsToken;
        return this;
    }
    public set countClientNumsToken(countClientNumsToken: number  | undefined) {
        this['count_client_nums_token'] = countClientNumsToken;
    }
    public get countClientNumsToken(): number | undefined {
        return this['count_client_nums_token'];
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
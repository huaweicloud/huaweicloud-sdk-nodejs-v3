

export class ListRtcRoomListRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public app?: string;
    private 'room_id'?: string;
    public state?: ListRtcRoomListRequestStateEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(app?: string) { 
        this['app'] = app;
    }
    public withAuthorization(authorization: string): ListRtcRoomListRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcRoomListRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcRoomListRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcRoomListRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcRoomListRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withState(state: ListRtcRoomListRequestStateEnum | string): ListRtcRoomListRequest {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): ListRtcRoomListRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcRoomListRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListRtcRoomListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcRoomListRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRtcRoomListRequestStateEnum {
    RUNNING = 'RUNNING',
    CLOSED = 'CLOSED'
}

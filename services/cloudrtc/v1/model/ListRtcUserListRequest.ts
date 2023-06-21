

export class ListRtcUserListRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public app: string;
    private 'room_id'?: string | undefined;
    public uid?: string;
    public nickname?: string;
    public region?: Array<string>;
    public isp?: Array<string>;
    public state?: Array<string>;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public type?: ListRtcUserListRequestTypeEnum;
    public constructor(app?: any) { 
        this['app'] = app;
    }
    public withAuthorization(authorization: string): ListRtcUserListRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcUserListRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcUserListRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withApp(app: string): ListRtcUserListRequest {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): ListRtcUserListRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUid(uid: string): ListRtcUserListRequest {
        this['uid'] = uid;
        return this;
    }
    public withNickname(nickname: string): ListRtcUserListRequest {
        this['nickname'] = nickname;
        return this;
    }
    public withRegion(region: Array<string>): ListRtcUserListRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: Array<string>): ListRtcUserListRequest {
        this['isp'] = isp;
        return this;
    }
    public withState(state: Array<string>): ListRtcUserListRequest {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): ListRtcUserListRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcUserListRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLimit(limit: number): ListRtcUserListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcUserListRequest {
        this['offset'] = offset;
        return this;
    }
    public withType(type: ListRtcUserListRequestTypeEnum): ListRtcUserListRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRtcUserListRequestTypeEnum {
    DETAIL = 'detail',
    SUMMARY = 'summary'
}

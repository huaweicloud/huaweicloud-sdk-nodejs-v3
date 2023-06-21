

export class ListRtcClientQosDetailsRequest {
    private 'Authorization'?: string | undefined;
    private 'X-Sdk-Date'?: string | undefined;
    private 'X-Project-Id'?: string | undefined;
    public domain?: string;
    private 'app_id': string | undefined;
    private 'room_id': string | undefined;
    private 'user_id'?: string | undefined;
    private 'peer_id'?: string | undefined;
    private 'stream_id'?: string | undefined;
    public direction?: string;
    public mid: ListRtcClientQosDetailsRequestMidEnum;
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'time_type'?: string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(appId?: any, roomId?: any, mid?: any, startTime?: any, endTime?: any) { 
        this['app_id'] = appId;
        this['room_id'] = roomId;
        this['mid'] = mid;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withAuthorization(authorization: string): ListRtcClientQosDetailsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListRtcClientQosDetailsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListRtcClientQosDetailsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId() {
        return this['X-Project-Id'];
    }
    public withDomain(domain: string): ListRtcClientQosDetailsRequest {
        this['domain'] = domain;
        return this;
    }
    public withAppId(appId: string): ListRtcClientQosDetailsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withRoomId(roomId: string): ListRtcClientQosDetailsRequest {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUserId(userId: string): ListRtcClientQosDetailsRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string | undefined) {
        this['user_id'] = userId;
    }
    public get userId() {
        return this['user_id'];
    }
    public withPeerId(peerId: string): ListRtcClientQosDetailsRequest {
        this['peer_id'] = peerId;
        return this;
    }
    public set peerId(peerId: string | undefined) {
        this['peer_id'] = peerId;
    }
    public get peerId() {
        return this['peer_id'];
    }
    public withStreamId(streamId: string): ListRtcClientQosDetailsRequest {
        this['stream_id'] = streamId;
        return this;
    }
    public set streamId(streamId: string | undefined) {
        this['stream_id'] = streamId;
    }
    public get streamId() {
        return this['stream_id'];
    }
    public withDirection(direction: string): ListRtcClientQosDetailsRequest {
        this['direction'] = direction;
        return this;
    }
    public withMid(mid: ListRtcClientQosDetailsRequestMidEnum): ListRtcClientQosDetailsRequest {
        this['mid'] = mid;
        return this;
    }
    public withStartTime(startTime: string): ListRtcClientQosDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRtcClientQosDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withTimeType(timeType: string): ListRtcClientQosDetailsRequest {
        this['time_type'] = timeType;
        return this;
    }
    public set timeType(timeType: string | undefined) {
        this['time_type'] = timeType;
    }
    public get timeType() {
        return this['time_type'];
    }
    public withLimit(limit: number): ListRtcClientQosDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRtcClientQosDetailsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRtcClientQosDetailsRequestMidEnum {
    APPCPU = 'appcpu',
    SYSCPU = 'syscpu',
    ABIT = 'abit',
    ABLOCK = 'ablock',
    VBIT = 'vbit',
    DBIT = 'dbit',
    VFPS = 'vfps',
    DFPS = 'dfps',
    VBLOCK = 'vblock',
    DBLOCK = 'dblock',
    ALOSS = 'aloss',
    VLOSS = 'vloss',
    DLOSS = 'dloss',
    VWIDTH = 'vwidth',
    VHEIGHT = 'vheight',
    DWIDTH = 'dwidth',
    DHEIGHT = 'dheight',
    AJITTER = 'ajitter',
    ARTT = 'artt',
    VJITTER = 'vjitter',
    VRTT = 'vrtt',
    DJITTER = 'djitter',
    DRTT = 'drtt'
}

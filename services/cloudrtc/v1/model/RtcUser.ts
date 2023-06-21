

export class RtcUser {
    public domain?: string;
    public app?: string;
    private 'room_id'?: string | undefined;
    public uid?: string;
    public session?: string;
    public state?: RtcUserStateEnum;
    private 'nick_name'?: string | undefined;
    public ip?: string;
    public region?: string;
    public isp?: string;
    private 'device_model'?: string | undefined;
    public platform?: string;
    public sdk?: string;
    private 'join_time'?: string | undefined;
    private 'leave_time'?: string | undefined;
    public constructor() { 
    }
    public withDomain(domain: string): RtcUser {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): RtcUser {
        this['app'] = app;
        return this;
    }
    public withRoomId(roomId: string): RtcUser {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId() {
        return this['room_id'];
    }
    public withUid(uid: string): RtcUser {
        this['uid'] = uid;
        return this;
    }
    public withSession(session: string): RtcUser {
        this['session'] = session;
        return this;
    }
    public withState(state: RtcUserStateEnum): RtcUser {
        this['state'] = state;
        return this;
    }
    public withNickName(nickName: string): RtcUser {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName() {
        return this['nick_name'];
    }
    public withIp(ip: string): RtcUser {
        this['ip'] = ip;
        return this;
    }
    public withRegion(region: string): RtcUser {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: string): RtcUser {
        this['isp'] = isp;
        return this;
    }
    public withDeviceModel(deviceModel: string): RtcUser {
        this['device_model'] = deviceModel;
        return this;
    }
    public set deviceModel(deviceModel: string | undefined) {
        this['device_model'] = deviceModel;
    }
    public get deviceModel() {
        return this['device_model'];
    }
    public withPlatform(platform: string): RtcUser {
        this['platform'] = platform;
        return this;
    }
    public withSdk(sdk: string): RtcUser {
        this['sdk'] = sdk;
        return this;
    }
    public withJoinTime(joinTime: string): RtcUser {
        this['join_time'] = joinTime;
        return this;
    }
    public set joinTime(joinTime: string | undefined) {
        this['join_time'] = joinTime;
    }
    public get joinTime() {
        return this['join_time'];
    }
    public withLeaveTime(leaveTime: string): RtcUser {
        this['leave_time'] = leaveTime;
        return this;
    }
    public set leaveTime(leaveTime: string | undefined) {
        this['leave_time'] = leaveTime;
    }
    public get leaveTime() {
        return this['leave_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RtcUserStateEnum {
    FAIL = 'FAIL',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

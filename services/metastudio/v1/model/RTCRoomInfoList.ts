import { RTCUserInfo } from './RTCUserInfo';


export class RTCRoomInfoList {
    private 'app_id'?: string;
    private 'room_id'?: string;
    public users?: Array<RTCUserInfo>;
    public constructor() { 
    }
    public withAppId(appId: string): RTCRoomInfoList {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRoomId(roomId: string): RTCRoomInfoList {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withUsers(users: Array<RTCUserInfo>): RTCRoomInfoList {
        this['users'] = users;
        return this;
    }
}
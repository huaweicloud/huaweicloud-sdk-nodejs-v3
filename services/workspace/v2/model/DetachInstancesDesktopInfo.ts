import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';


export class DetachInstancesDesktopInfo {
    private 'desktop_id'?: string;
    private 'is_detach_all_users'?: boolean;
    private 'detach_user_infos'?: Array<AttachInstancesUserInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): DetachInstancesDesktopInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withIsDetachAllUsers(isDetachAllUsers: boolean): DetachInstancesDesktopInfo {
        this['is_detach_all_users'] = isDetachAllUsers;
        return this;
    }
    public set isDetachAllUsers(isDetachAllUsers: boolean  | undefined) {
        this['is_detach_all_users'] = isDetachAllUsers;
    }
    public get isDetachAllUsers(): boolean | undefined {
        return this['is_detach_all_users'];
    }
    public withDetachUserInfos(detachUserInfos: Array<AttachInstancesUserInfo>): DetachInstancesDesktopInfo {
        this['detach_user_infos'] = detachUserInfos;
        return this;
    }
    public set detachUserInfos(detachUserInfos: Array<AttachInstancesUserInfo>  | undefined) {
        this['detach_user_infos'] = detachUserInfos;
    }
    public get detachUserInfos(): Array<AttachInstancesUserInfo> | undefined {
        return this['detach_user_infos'];
    }
}
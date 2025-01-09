import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';


export class ControlItem {
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'desktop_status'?: string;
    private 'pool_id'?: string;
    private 'attach_user_infos'?: Array<AttachInstancesUserInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): ControlItem {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ControlItem {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopStatus(desktopStatus: string): ControlItem {
        this['desktop_status'] = desktopStatus;
        return this;
    }
    public set desktopStatus(desktopStatus: string  | undefined) {
        this['desktop_status'] = desktopStatus;
    }
    public get desktopStatus(): string | undefined {
        return this['desktop_status'];
    }
    public withPoolId(poolId: string): ControlItem {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withAttachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>): ControlItem {
        this['attach_user_infos'] = attachUserInfos;
        return this;
    }
    public set attachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>  | undefined) {
        this['attach_user_infos'] = attachUserInfos;
    }
    public get attachUserInfos(): Array<AttachInstancesUserInfo> | undefined {
        return this['attach_user_infos'];
    }
}
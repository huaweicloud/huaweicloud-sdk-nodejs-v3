import { ChangeUserPrivilegeGroupUserInfo } from './ChangeUserPrivilegeGroupUserInfo';


export class ChangeUserPrivilegeGroupDesktopInfo {
    private 'desktop_id'?: string;
    private 'attach_user_infos'?: Array<ChangeUserPrivilegeGroupUserInfo>;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): ChangeUserPrivilegeGroupDesktopInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withAttachUserInfos(attachUserInfos: Array<ChangeUserPrivilegeGroupUserInfo>): ChangeUserPrivilegeGroupDesktopInfo {
        this['attach_user_infos'] = attachUserInfos;
        return this;
    }
    public set attachUserInfos(attachUserInfos: Array<ChangeUserPrivilegeGroupUserInfo>  | undefined) {
        this['attach_user_infos'] = attachUserInfos;
    }
    public get attachUserInfos(): Array<ChangeUserPrivilegeGroupUserInfo> | undefined {
        return this['attach_user_infos'];
    }
}
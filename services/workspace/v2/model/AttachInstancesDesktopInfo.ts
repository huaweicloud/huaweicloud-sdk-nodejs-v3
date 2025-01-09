import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';


export class AttachInstancesDesktopInfo {
    private 'desktop_id'?: string;
    private 'user_name'?: string;
    private 'user_email'?: string;
    private 'user_group'?: string;
    private 'computer_name'?: string;
    private 'is_clear_data'?: boolean;
    private 'attach_user_infos'?: Array<AttachInstancesUserInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): AttachInstancesDesktopInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withUserName(userName: string): AttachInstancesDesktopInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserEmail(userEmail: string): AttachInstancesDesktopInfo {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withUserGroup(userGroup: string): AttachInstancesDesktopInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withComputerName(computerName: string): AttachInstancesDesktopInfo {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withIsClearData(isClearData: boolean): AttachInstancesDesktopInfo {
        this['is_clear_data'] = isClearData;
        return this;
    }
    public set isClearData(isClearData: boolean  | undefined) {
        this['is_clear_data'] = isClearData;
    }
    public get isClearData(): boolean | undefined {
        return this['is_clear_data'];
    }
    public withAttachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>): AttachInstancesDesktopInfo {
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
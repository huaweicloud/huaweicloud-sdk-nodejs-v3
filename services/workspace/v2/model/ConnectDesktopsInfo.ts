import { AttachUsersInfo } from './AttachUsersInfo';


export class ConnectDesktopsInfo {
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'connect_status'?: string;
    private 'attach_users'?: Array<AttachUsersInfo>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): ConnectDesktopsInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): ConnectDesktopsInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withConnectStatus(connectStatus: string): ConnectDesktopsInfo {
        this['connect_status'] = connectStatus;
        return this;
    }
    public set connectStatus(connectStatus: string  | undefined) {
        this['connect_status'] = connectStatus;
    }
    public get connectStatus(): string | undefined {
        return this['connect_status'];
    }
    public withAttachUsers(attachUsers: Array<AttachUsersInfo>): ConnectDesktopsInfo {
        this['attach_users'] = attachUsers;
        return this;
    }
    public set attachUsers(attachUsers: Array<AttachUsersInfo>  | undefined) {
        this['attach_users'] = attachUsers;
    }
    public get attachUsers(): Array<AttachUsersInfo> | undefined {
        return this['attach_users'];
    }
}
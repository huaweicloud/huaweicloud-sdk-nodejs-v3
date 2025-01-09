import { ChangeUserPrivilegeGroupDesktopInfo } from './ChangeUserPrivilegeGroupDesktopInfo';


export class ChangeUserPrivilegeGroupReq {
    public desktops?: Array<ChangeUserPrivilegeGroupDesktopInfo>;
    private 'user_privilege_group'?: string;
    public constructor(desktops?: Array<ChangeUserPrivilegeGroupDesktopInfo>) { 
        this['desktops'] = desktops;
    }
    public withDesktops(desktops: Array<ChangeUserPrivilegeGroupDesktopInfo>): ChangeUserPrivilegeGroupReq {
        this['desktops'] = desktops;
        return this;
    }
    public withUserPrivilegeGroup(userPrivilegeGroup: string): ChangeUserPrivilegeGroupReq {
        this['user_privilege_group'] = userPrivilegeGroup;
        return this;
    }
    public set userPrivilegeGroup(userPrivilegeGroup: string  | undefined) {
        this['user_privilege_group'] = userPrivilegeGroup;
    }
    public get userPrivilegeGroup(): string | undefined {
        return this['user_privilege_group'];
    }
}
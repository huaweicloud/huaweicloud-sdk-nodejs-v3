

export class DesktopUserDetail {
    public id?: string;
    private 'user_name'?: string;
    public domain?: string;
    private 'user_email'?: string;
    private 'permission_group'?: string;
    private 'desktop_name'?: string;
    private 'desktop_ip'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): DesktopUserDetail {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): DesktopUserDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomain(domain: string): DesktopUserDetail {
        this['domain'] = domain;
        return this;
    }
    public withUserEmail(userEmail: string): DesktopUserDetail {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withPermissionGroup(permissionGroup: string): DesktopUserDetail {
        this['permission_group'] = permissionGroup;
        return this;
    }
    public set permissionGroup(permissionGroup: string  | undefined) {
        this['permission_group'] = permissionGroup;
    }
    public get permissionGroup(): string | undefined {
        return this['permission_group'];
    }
    public withDesktopName(desktopName: string): DesktopUserDetail {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopIp(desktopIp: string): DesktopUserDetail {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withDescription(description: string): DesktopUserDetail {
        this['description'] = description;
        return this;
    }
}


export class DesktopDetachInfo {
    private 'desktop_id'?: string;
    private 'desktop_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_group'?: string;
    private 'detach_time'?: string;
    public type?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): DesktopDetachInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withDesktopName(desktopName: string): DesktopDetachInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withUserId(userId: string): DesktopDetachInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): DesktopDetachInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserGroup(userGroup: string): DesktopDetachInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withDetachTime(detachTime: string): DesktopDetachInfo {
        this['detach_time'] = detachTime;
        return this;
    }
    public set detachTime(detachTime: string  | undefined) {
        this['detach_time'] = detachTime;
    }
    public get detachTime(): string | undefined {
        return this['detach_time'];
    }
    public withType(type: string): DesktopDetachInfo {
        this['type'] = type;
        return this;
    }
}
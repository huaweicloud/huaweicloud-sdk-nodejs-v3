

export class UserDimensionAttachInfo {
    private 'user_name'?: string;
    private 'user_id'?: string;
    private 'desktop_num'?: number;
    private 'desktop_name'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): UserDimensionAttachInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserId(userId: string): UserDimensionAttachInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withDesktopNum(desktopNum: number): UserDimensionAttachInfo {
        this['desktop_num'] = desktopNum;
        return this;
    }
    public set desktopNum(desktopNum: number  | undefined) {
        this['desktop_num'] = desktopNum;
    }
    public get desktopNum(): number | undefined {
        return this['desktop_num'];
    }
    public withDesktopName(desktopName: string): UserDimensionAttachInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
}


export class DesktopDimensionAttachInfo {
    private 'desktop_name'?: string;
    private 'desktop_id'?: string;
    private 'user_num'?: number;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withDesktopName(desktopName: string): DesktopDimensionAttachInfo {
        this['desktop_name'] = desktopName;
        return this;
    }
    public set desktopName(desktopName: string  | undefined) {
        this['desktop_name'] = desktopName;
    }
    public get desktopName(): string | undefined {
        return this['desktop_name'];
    }
    public withDesktopId(desktopId: string): DesktopDimensionAttachInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withUserNum(userNum: number): DesktopDimensionAttachInfo {
        this['user_num'] = userNum;
        return this;
    }
    public set userNum(userNum: number  | undefined) {
        this['user_num'] = userNum;
    }
    public get userNum(): number | undefined {
        return this['user_num'];
    }
    public withUserName(userName: string): DesktopDimensionAttachInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}
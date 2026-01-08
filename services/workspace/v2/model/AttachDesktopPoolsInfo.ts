

export class AttachDesktopPoolsInfo {
    private 'desktop_pool_id'?: string;
    private 'desktop_pool_name'?: string;
    private 'is_attached'?: boolean;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): AttachDesktopPoolsInfo {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopPoolName(desktopPoolName: string): AttachDesktopPoolsInfo {
        this['desktop_pool_name'] = desktopPoolName;
        return this;
    }
    public set desktopPoolName(desktopPoolName: string  | undefined) {
        this['desktop_pool_name'] = desktopPoolName;
    }
    public get desktopPoolName(): string | undefined {
        return this['desktop_pool_name'];
    }
    public withIsAttached(isAttached: boolean): AttachDesktopPoolsInfo {
        this['is_attached'] = isAttached;
        return this;
    }
    public set isAttached(isAttached: boolean  | undefined) {
        this['is_attached'] = isAttached;
    }
    public get isAttached(): boolean | undefined {
        return this['is_attached'];
    }
}
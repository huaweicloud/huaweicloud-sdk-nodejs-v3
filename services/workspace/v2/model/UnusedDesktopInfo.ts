

export class UnusedDesktopInfo {
    private 'desktop_id'?: string;
    private 'compute_name'?: string;
    private 'create_time'?: string;
    private 'disconnect_time'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): UnusedDesktopInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withComputeName(computeName: string): UnusedDesktopInfo {
        this['compute_name'] = computeName;
        return this;
    }
    public set computeName(computeName: string  | undefined) {
        this['compute_name'] = computeName;
    }
    public get computeName(): string | undefined {
        return this['compute_name'];
    }
    public withCreateTime(createTime: string): UnusedDesktopInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDisconnectTime(disconnectTime: string): UnusedDesktopInfo {
        this['disconnect_time'] = disconnectTime;
        return this;
    }
    public set disconnectTime(disconnectTime: string  | undefined) {
        this['disconnect_time'] = disconnectTime;
    }
    public get disconnectTime(): string | undefined {
        return this['disconnect_time'];
    }
}


export class DesktopVersionStatistic {
    public version?: string;
    private 'os_type'?: string;
    private 'desktop_count'?: number;
    public constructor() { 
    }
    public withVersion(version: string): DesktopVersionStatistic {
        this['version'] = version;
        return this;
    }
    public withOsType(osType: string): DesktopVersionStatistic {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withDesktopCount(desktopCount: number): DesktopVersionStatistic {
        this['desktop_count'] = desktopCount;
        return this;
    }
    public set desktopCount(desktopCount: number  | undefined) {
        this['desktop_count'] = desktopCount;
    }
    public get desktopCount(): number | undefined {
        return this['desktop_count'];
    }
}
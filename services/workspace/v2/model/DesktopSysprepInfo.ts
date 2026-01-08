

export class DesktopSysprepInfo {
    private 'desktop_id'?: string;
    private 'sysprep_version'?: string;
    private 'support_hibernate'?: boolean;
    private 'support_update_route'?: boolean;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): DesktopSysprepInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withSysprepVersion(sysprepVersion: string): DesktopSysprepInfo {
        this['sysprep_version'] = sysprepVersion;
        return this;
    }
    public set sysprepVersion(sysprepVersion: string  | undefined) {
        this['sysprep_version'] = sysprepVersion;
    }
    public get sysprepVersion(): string | undefined {
        return this['sysprep_version'];
    }
    public withSupportHibernate(supportHibernate: boolean): DesktopSysprepInfo {
        this['support_hibernate'] = supportHibernate;
        return this;
    }
    public set supportHibernate(supportHibernate: boolean  | undefined) {
        this['support_hibernate'] = supportHibernate;
    }
    public get supportHibernate(): boolean | undefined {
        return this['support_hibernate'];
    }
    public withSupportUpdateRoute(supportUpdateRoute: boolean): DesktopSysprepInfo {
        this['support_update_route'] = supportUpdateRoute;
        return this;
    }
    public set supportUpdateRoute(supportUpdateRoute: boolean  | undefined) {
        this['support_update_route'] = supportUpdateRoute;
    }
    public get supportUpdateRoute(): boolean | undefined {
        return this['support_update_route'];
    }
}


export class DesktopResourceItem {
    private 'resource_package_name'?: string;
    private 'desktop_resource_spec_code'?: string;
    private 'resource_spec_code'?: string;
    private 'effective_time'?: string;
    private 'is_auto_renew'?: number;
    public constructor(resourcePackageName?: string, desktopResourceSpecCode?: string, resourceSpecCode?: string) { 
        this['resource_package_name'] = resourcePackageName;
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withResourcePackageName(resourcePackageName: string): DesktopResourceItem {
        this['resource_package_name'] = resourcePackageName;
        return this;
    }
    public set resourcePackageName(resourcePackageName: string  | undefined) {
        this['resource_package_name'] = resourcePackageName;
    }
    public get resourcePackageName(): string | undefined {
        return this['resource_package_name'];
    }
    public withDesktopResourceSpecCode(desktopResourceSpecCode: string): DesktopResourceItem {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
        return this;
    }
    public set desktopResourceSpecCode(desktopResourceSpecCode: string  | undefined) {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
    }
    public get desktopResourceSpecCode(): string | undefined {
        return this['desktop_resource_spec_code'];
    }
    public withResourceSpecCode(resourceSpecCode: string): DesktopResourceItem {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withEffectiveTime(effectiveTime: string): DesktopResourceItem {
        this['effective_time'] = effectiveTime;
        return this;
    }
    public set effectiveTime(effectiveTime: string  | undefined) {
        this['effective_time'] = effectiveTime;
    }
    public get effectiveTime(): string | undefined {
        return this['effective_time'];
    }
    public withIsAutoRenew(isAutoRenew: number): DesktopResourceItem {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
}
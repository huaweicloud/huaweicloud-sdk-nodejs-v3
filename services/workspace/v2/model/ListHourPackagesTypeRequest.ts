

export class ListHourPackagesTypeRequest {
    private 'desktop_resource_spec_code'?: string;
    private 'resource_spec_code'?: string;
    public constructor() { 
    }
    public withDesktopResourceSpecCode(desktopResourceSpecCode: string): ListHourPackagesTypeRequest {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
        return this;
    }
    public set desktopResourceSpecCode(desktopResourceSpecCode: string  | undefined) {
        this['desktop_resource_spec_code'] = desktopResourceSpecCode;
    }
    public get desktopResourceSpecCode(): string | undefined {
        return this['desktop_resource_spec_code'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ListHourPackagesTypeRequest {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
}
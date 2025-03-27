

export class ExportClientConfigRequestBody {
    private 'os_type'?: ExportClientConfigRequestBodyOsTypeEnum | string;
    public constructor() { 
    }
    public withOsType(osType: ExportClientConfigRequestBodyOsTypeEnum | string): ExportClientConfigRequestBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ExportClientConfigRequestBodyOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ExportClientConfigRequestBodyOsTypeEnum | string | undefined {
        return this['os_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportClientConfigRequestBodyOsTypeEnum {
    WINDOWS = 'Windows',
    LINUX = 'Linux',
    MACOS = 'MacOS',
    ANDROID = 'Android',
    IOS = 'iOS'
}

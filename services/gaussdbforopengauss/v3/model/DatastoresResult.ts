

export class DatastoresResult {
    private 'supported_versions'?: Array<string>;
    private 'instance_mode'?: DatastoresResultInstanceModeEnum | string;
    public constructor(supportedVersions?: Array<string>, instanceMode?: string) { 
        this['supported_versions'] = supportedVersions;
        this['instance_mode'] = instanceMode;
    }
    public withSupportedVersions(supportedVersions: Array<string>): DatastoresResult {
        this['supported_versions'] = supportedVersions;
        return this;
    }
    public set supportedVersions(supportedVersions: Array<string>  | undefined) {
        this['supported_versions'] = supportedVersions;
    }
    public get supportedVersions(): Array<string> | undefined {
        return this['supported_versions'];
    }
    public withInstanceMode(instanceMode: DatastoresResultInstanceModeEnum | string): DatastoresResult {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: DatastoresResultInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): DatastoresResultInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatastoresResultInstanceModeEnum {
    HA = 'ha',
    INDEPENDENT = 'independent'
}

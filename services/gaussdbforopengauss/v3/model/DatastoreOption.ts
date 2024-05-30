

export class DatastoreOption {
    private 'engine_version'?: string;
    private 'instance_mode'?: DatastoreOptionInstanceModeEnum | string;
    public constructor(engineVersion?: string, instanceMode?: string) { 
        this['engine_version'] = engineVersion;
        this['instance_mode'] = instanceMode;
    }
    public withEngineVersion(engineVersion: string): DatastoreOption {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withInstanceMode(instanceMode: DatastoreOptionInstanceModeEnum | string): DatastoreOption {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: DatastoreOptionInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): DatastoreOptionInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatastoreOptionInstanceModeEnum {
    HA = 'ha',
    HAREADONLY = 'ha:readonly',
    INDEPENDENT = 'independent'
}

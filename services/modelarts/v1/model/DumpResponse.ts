

export class DumpResponse {
    public source?: DumpResponseSourceEnum | string;
    public address?: string;
    private 'mount_path'?: string;
    public type?: DumpResponseTypeEnum | string;
    public constructor(source?: string, mountPath?: string) { 
        this['source'] = source;
        this['mount_path'] = mountPath;
    }
    public withSource(source: DumpResponseSourceEnum | string): DumpResponse {
        this['source'] = source;
        return this;
    }
    public withAddress(address: string): DumpResponse {
        this['address'] = address;
        return this;
    }
    public withMountPath(mountPath: string): DumpResponse {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withType(type: DumpResponseTypeEnum | string): DumpResponse {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DumpResponseSourceEnum {
    OBS = 'OBS',
    OBSFS = 'OBSFS'
}
/**
    * @export
    * @enum {string}
    */
export enum DumpResponseTypeEnum {
    DUMP = 'DUMP',
    DUMP_SYS = 'DUMP_SYS'
}

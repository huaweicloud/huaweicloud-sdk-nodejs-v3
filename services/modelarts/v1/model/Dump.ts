

export class Dump {
    public source?: string;
    public address?: string;
    private 'mount_path'?: string;
    public constructor(source?: string, mountPath?: string) { 
        this['source'] = source;
        this['mount_path'] = mountPath;
    }
    public withSource(source: string): Dump {
        this['source'] = source;
        return this;
    }
    public withAddress(address: string): Dump {
        this['address'] = address;
        return this;
    }
    public withMountPath(mountPath: string): Dump {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
}
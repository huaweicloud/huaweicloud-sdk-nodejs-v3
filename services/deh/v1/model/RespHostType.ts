

export class RespHostType {
    private 'host_type'?: string;
    private 'host_type_name'?: string;
    public constructor(hostType?: string, hostTypeName?: string) { 
        this['host_type'] = hostType;
        this['host_type_name'] = hostTypeName;
    }
    public withHostType(hostType: string): RespHostType {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withHostTypeName(hostTypeName: string): RespHostType {
        this['host_type_name'] = hostTypeName;
        return this;
    }
    public set hostTypeName(hostTypeName: string  | undefined) {
        this['host_type_name'] = hostTypeName;
    }
    public get hostTypeName(): string | undefined {
        return this['host_type_name'];
    }
}


export class RespMetadata {
    private 'os_type'?: string;
    public constructor() { 
    }
    public withOsType(osType: string): RespMetadata {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
}
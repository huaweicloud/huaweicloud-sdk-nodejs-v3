

export class ModifyNodeDataIpRequest {
    private 'internal_ip'?: string;
    public constructor(internalIp?: string) { 
        this['internal_ip'] = internalIp;
    }
    public withInternalIp(internalIp: string): ModifyNodeDataIpRequest {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
}
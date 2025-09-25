

export class Member {
    public name?: string;
    public address?: string;
    private 'protocol_port'?: number;
    private 'operating_status'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withName(name: string): Member {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): Member {
        this['address'] = address;
        return this;
    }
    public withProtocolPort(protocolPort: number): Member {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withOperatingStatus(operatingStatus: string): Member {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
    public withInstanceId(instanceId: string): Member {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}
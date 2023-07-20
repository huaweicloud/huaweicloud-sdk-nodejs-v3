

export class RouterInterfaceRequestBody {
    private 'port_id'?: string;
    private 'subnet_id'?: string;
    public constructor() { 
    }
    public withPortId(portId: string): RouterInterfaceRequestBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withSubnetId(subnetId: string): RouterInterfaceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}
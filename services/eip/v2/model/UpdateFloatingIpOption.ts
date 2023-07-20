

export class UpdateFloatingIpOption {
    private 'port_id'?: string;
    public constructor() { 
    }
    public withPortId(portId: string): UpdateFloatingIpOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
}
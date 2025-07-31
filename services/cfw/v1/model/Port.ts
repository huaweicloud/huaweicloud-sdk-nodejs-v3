

export class Port {
    private 'port_type'?: number;
    public ports?: string;
    public constructor() { 
    }
    public withPortType(portType: number): Port {
        this['port_type'] = portType;
        return this;
    }
    public set portType(portType: number  | undefined) {
        this['port_type'] = portType;
    }
    public get portType(): number | undefined {
        return this['port_type'];
    }
    public withPorts(ports: string): Port {
        this['ports'] = ports;
        return this;
    }
}
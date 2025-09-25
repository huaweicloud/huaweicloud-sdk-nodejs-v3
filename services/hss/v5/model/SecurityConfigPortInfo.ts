

export class SecurityConfigPortInfo {
    public port?: number;
    public type?: string;
    public status?: string;
    private 'port_status'?: number;
    private 'port_desc'?: string;
    public constructor() { 
    }
    public withPort(port: number): SecurityConfigPortInfo {
        this['port'] = port;
        return this;
    }
    public withType(type: string): SecurityConfigPortInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): SecurityConfigPortInfo {
        this['status'] = status;
        return this;
    }
    public withPortStatus(portStatus: number): SecurityConfigPortInfo {
        this['port_status'] = portStatus;
        return this;
    }
    public set portStatus(portStatus: number  | undefined) {
        this['port_status'] = portStatus;
    }
    public get portStatus(): number | undefined {
        return this['port_status'];
    }
    public withPortDesc(portDesc: string): SecurityConfigPortInfo {
        this['port_desc'] = portDesc;
        return this;
    }
    public set portDesc(portDesc: string  | undefined) {
        this['port_desc'] = portDesc;
    }
    public get portDesc(): string | undefined {
        return this['port_desc'];
    }
}
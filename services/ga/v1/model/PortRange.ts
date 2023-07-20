

export class PortRange {
    private 'from_port'?: number;
    private 'to_port'?: number;
    public constructor(fromPort?: number, toPort?: number) { 
        this['from_port'] = fromPort;
        this['to_port'] = toPort;
    }
    public withFromPort(fromPort: number): PortRange {
        this['from_port'] = fromPort;
        return this;
    }
    public set fromPort(fromPort: number  | undefined) {
        this['from_port'] = fromPort;
    }
    public get fromPort(): number | undefined {
        return this['from_port'];
    }
    public withToPort(toPort: number): PortRange {
        this['to_port'] = toPort;
        return this;
    }
    public set toPort(toPort: number  | undefined) {
        this['to_port'] = toPort;
    }
    public get toPort(): number | undefined {
        return this['to_port'];
    }
}
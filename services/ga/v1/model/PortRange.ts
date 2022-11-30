

export class PortRange {
    private 'from_port': number | undefined;
    private 'to_port': number | undefined;
    public constructor(fromPort?: any, toPort?: any) { 
        this['from_port'] = fromPort;
        this['to_port'] = toPort;
    }
    public withFromPort(fromPort: number): PortRange {
        this['from_port'] = fromPort;
        return this;
    }
    public set fromPort(fromPort: number | undefined) {
        this['from_port'] = fromPort;
    }
    public get fromPort() {
        return this['from_port'];
    }
    public withToPort(toPort: number): PortRange {
        this['to_port'] = toPort;
        return this;
    }
    public set toPort(toPort: number | undefined) {
        this['to_port'] = toPort;
    }
    public get toPort() {
        return this['to_port'];
    }
}
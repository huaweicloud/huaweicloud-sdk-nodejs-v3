

export class PortRange {
    private 'start_port'?: number | undefined;
    private 'end_port'?: number | undefined;
    public constructor() { 
    }
    public withStartPort(startPort: number): PortRange {
        this['start_port'] = startPort;
        return this;
    }
    public set startPort(startPort: number | undefined) {
        this['start_port'] = startPort;
    }
    public get startPort() {
        return this['start_port'];
    }
    public withEndPort(endPort: number): PortRange {
        this['end_port'] = endPort;
        return this;
    }
    public set endPort(endPort: number | undefined) {
        this['end_port'] = endPort;
    }
    public get endPort() {
        return this['end_port'];
    }
}
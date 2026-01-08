

export class ResPortRange {
    private 'start_port'?: number;
    private 'end_port'?: number;
    public constructor(startPort?: number, endPort?: number) { 
        this['start_port'] = startPort;
        this['end_port'] = endPort;
    }
    public withStartPort(startPort: number): ResPortRange {
        this['start_port'] = startPort;
        return this;
    }
    public set startPort(startPort: number  | undefined) {
        this['start_port'] = startPort;
    }
    public get startPort(): number | undefined {
        return this['start_port'];
    }
    public withEndPort(endPort: number): ResPortRange {
        this['end_port'] = endPort;
        return this;
    }
    public set endPort(endPort: number  | undefined) {
        this['end_port'] = endPort;
    }
    public get endPort(): number | undefined {
        return this['end_port'];
    }
}
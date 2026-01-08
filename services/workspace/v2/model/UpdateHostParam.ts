

export class UpdateHostParam {
    private 'auto_placement'?: string;
    public name?: string;
    private 'host_id'?: string;
    public constructor() { 
    }
    public withAutoPlacement(autoPlacement: string): UpdateHostParam {
        this['auto_placement'] = autoPlacement;
        return this;
    }
    public set autoPlacement(autoPlacement: string  | undefined) {
        this['auto_placement'] = autoPlacement;
    }
    public get autoPlacement(): string | undefined {
        return this['auto_placement'];
    }
    public withName(name: string): UpdateHostParam {
        this['name'] = name;
        return this;
    }
    public withHostId(hostId: string): UpdateHostParam {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}


export class ShowVhostDetailResp {
    public name?: string;
    public tracing?: boolean;
    public constructor() { 
    }
    public withName(name: string): ShowVhostDetailResp {
        this['name'] = name;
        return this;
    }
    public withTracing(tracing: boolean): ShowVhostDetailResp {
        this['tracing'] = tracing;
        return this;
    }
}
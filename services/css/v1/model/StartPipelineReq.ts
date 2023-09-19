

export class StartPipelineReq {
    public keepAlive?: boolean;
    public names?: Array<string>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withKeepAlive(keepAlive: boolean): StartPipelineReq {
        this['keepAlive'] = keepAlive;
        return this;
    }
    public withNames(names: Array<string>): StartPipelineReq {
        this['names'] = names;
        return this;
    }
}
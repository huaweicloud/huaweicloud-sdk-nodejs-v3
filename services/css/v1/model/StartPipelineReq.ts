

export class StartPipelineReq {
    private 'keep_alive'?: boolean;
    public names?: Array<string>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withKeepAlive(keepAlive: boolean): StartPipelineReq {
        this['keep_alive'] = keepAlive;
        return this;
    }
    public set keepAlive(keepAlive: boolean  | undefined) {
        this['keep_alive'] = keepAlive;
    }
    public get keepAlive(): boolean | undefined {
        return this['keep_alive'];
    }
    public withNames(names: Array<string>): StartPipelineReq {
        this['names'] = names;
        return this;
    }
}
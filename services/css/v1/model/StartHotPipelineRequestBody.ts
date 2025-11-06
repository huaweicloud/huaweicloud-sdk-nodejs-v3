

export class StartHotPipelineRequestBody {
    public name?: string;
    private 'keep_alive'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): StartHotPipelineRequestBody {
        this['name'] = name;
        return this;
    }
    public withKeepAlive(keepAlive: boolean): StartHotPipelineRequestBody {
        this['keep_alive'] = keepAlive;
        return this;
    }
    public set keepAlive(keepAlive: boolean  | undefined) {
        this['keep_alive'] = keepAlive;
    }
    public get keepAlive(): boolean | undefined {
        return this['keep_alive'];
    }
}
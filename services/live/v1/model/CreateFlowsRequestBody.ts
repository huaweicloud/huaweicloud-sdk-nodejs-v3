import { FlowSource } from './FlowSource';


export class CreateFlowsRequestBody {
    public name?: string;
    public region?: string;
    public sources?: Array<FlowSource>;
    public constructor(name?: string, region?: string, sources?: Array<FlowSource>) { 
        this['name'] = name;
        this['region'] = region;
        this['sources'] = sources;
    }
    public withName(name: string): CreateFlowsRequestBody {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): CreateFlowsRequestBody {
        this['region'] = region;
        return this;
    }
    public withSources(sources: Array<FlowSource>): CreateFlowsRequestBody {
        this['sources'] = sources;
        return this;
    }
}
import { FlowSource } from './FlowSource';


export class ModifyFlowSourcesRequestBody {
    public source?: FlowSource;
    public constructor(source?: FlowSource) { 
        this['source'] = source;
    }
    public withSource(source: FlowSource): ModifyFlowSourcesRequestBody {
        this['source'] = source;
        return this;
    }
}
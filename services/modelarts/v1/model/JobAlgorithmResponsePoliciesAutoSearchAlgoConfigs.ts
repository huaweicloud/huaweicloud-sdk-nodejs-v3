import { AutoSearchAlgoConfigParameter } from './AutoSearchAlgoConfigParameter';


export class JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs {
    public name?: string;
    public params?: Array<AutoSearchAlgoConfigParameter>;
    public constructor() { 
    }
    public withName(name: string): JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<AutoSearchAlgoConfigParameter>): JobAlgorithmResponsePoliciesAutoSearchAlgoConfigs {
        this['params'] = params;
        return this;
    }
}
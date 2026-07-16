import { AutoSearchAlgoConfigParameter } from './AutoSearchAlgoConfigParameter';


export class AlgoConfigs {
    public name?: string;
    public params?: Array<AutoSearchAlgoConfigParameter>;
    public constructor() { 
    }
    public withName(name: string): AlgoConfigs {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<AutoSearchAlgoConfigParameter>): AlgoConfigs {
        this['params'] = params;
        return this;
    }
}
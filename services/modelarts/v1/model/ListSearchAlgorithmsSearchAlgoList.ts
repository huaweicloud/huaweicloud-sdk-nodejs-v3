import { ListSearchAlgorithmsParams } from './ListSearchAlgorithmsParams';


export class ListSearchAlgorithmsSearchAlgoList {
    public name?: string;
    public params?: Array<ListSearchAlgorithmsParams>;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): ListSearchAlgorithmsSearchAlgoList {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<ListSearchAlgorithmsParams>): ListSearchAlgorithmsSearchAlgoList {
        this['params'] = params;
        return this;
    }
    public withDescription(description: string): ListSearchAlgorithmsSearchAlgoList {
        this['description'] = description;
        return this;
    }
}
import { SearchParameter } from './SearchParameter';


export class ShowDataSetsRequest {
    public instance?: string;
    public body?: SearchParameter;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ShowDataSetsRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: SearchParameter): ShowDataSetsRequest {
        this['body'] = body;
        return this;
    }
}
import { Dimension } from './Dimension';


export class ResourcesReqV2 {
    public resources?: Array<Array<Dimension>>;
    public constructor(resources?: Array<Array<Dimension>>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Array<Dimension>>): ResourcesReqV2 {
        this['resources'] = resources;
        return this;
    }
}
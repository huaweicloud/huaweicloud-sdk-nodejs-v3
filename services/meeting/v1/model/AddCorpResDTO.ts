import { ResourceDTO } from './ResourceDTO';


export class AddCorpResDTO {
    public resource?: Array<ResourceDTO>;
    public constructor() { 
    }
    public withResource(resource: Array<ResourceDTO>): AddCorpResDTO {
        this['resource'] = resource;
        return this;
    }
}
import { ResourceConfigDTO } from './ResourceConfigDTO';


export class ResourceDTO {
    public limits?: ResourceConfigDTO;
    public requests?: ResourceConfigDTO;
    public constructor() { 
    }
    public withLimits(limits: ResourceConfigDTO): ResourceDTO {
        this['limits'] = limits;
        return this;
    }
    public withRequests(requests: ResourceConfigDTO): ResourceDTO {
        this['requests'] = requests;
        return this;
    }
}
import { DomainMapping } from './DomainMapping';


export class CreateDomainMappingRequest {
    public body?: DomainMapping;
    public constructor() { 
    }
    public withBody(body: DomainMapping): CreateDomainMappingRequest {
        this['body'] = body;
        return this;
    }
}
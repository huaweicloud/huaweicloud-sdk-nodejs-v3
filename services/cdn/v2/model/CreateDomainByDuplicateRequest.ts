import { DuplicateDomainRequestBody } from './DuplicateDomainRequestBody';


export class CreateDomainByDuplicateRequest {
    public body?: DuplicateDomainRequestBody;
    public constructor() { 
    }
    public withBody(body: DuplicateDomainRequestBody): CreateDomainByDuplicateRequest {
        this['body'] = body;
        return this;
    }
}
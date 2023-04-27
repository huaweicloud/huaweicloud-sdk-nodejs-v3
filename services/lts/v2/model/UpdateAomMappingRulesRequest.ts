import { AomMappingRequestInfo } from './AomMappingRequestInfo';


export class UpdateAomMappingRulesRequest {
    public body?: AomMappingRequestInfo;
    public constructor() { 
    }
    public withBody(body: AomMappingRequestInfo): UpdateAomMappingRulesRequest {
        this['body'] = body;
        return this;
    }
}
import { AomMappingRequestInfo } from './AomMappingRequestInfo';


export class CreateAomMappingRulesRequest {
    public isBatch: boolean;
    public body?: AomMappingRequestInfo;
    public constructor(isBatch?: any) { 
        this['isBatch'] = isBatch;
    }
    public withIsBatch(isBatch: boolean): CreateAomMappingRulesRequest {
        this['isBatch'] = isBatch;
        return this;
    }
    public withBody(body: AomMappingRequestInfo): CreateAomMappingRulesRequest {
        this['body'] = body;
        return this;
    }
}
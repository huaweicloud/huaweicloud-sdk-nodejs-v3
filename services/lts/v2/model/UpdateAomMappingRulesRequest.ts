import { UpdateAomMappingRequest } from './UpdateAomMappingRequest';


export class UpdateAomMappingRulesRequest {
    public body?: UpdateAomMappingRequest;
    public constructor() { 
    }
    public withBody(body: UpdateAomMappingRequest): UpdateAomMappingRulesRequest {
        this['body'] = body;
        return this;
    }
}
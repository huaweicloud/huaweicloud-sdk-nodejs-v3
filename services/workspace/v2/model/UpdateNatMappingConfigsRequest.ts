import { UpdateNatMappingConfigsReq } from './UpdateNatMappingConfigsReq';


export class UpdateNatMappingConfigsRequest {
    public body?: UpdateNatMappingConfigsReq;
    public constructor() { 
    }
    public withBody(body: UpdateNatMappingConfigsReq): UpdateNatMappingConfigsRequest {
        this['body'] = body;
        return this;
    }
}
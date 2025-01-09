import { EstimateAddSubResourcesRequestBody } from './EstimateAddSubResourcesRequestBody';


export class EstimateAddResourcesRequest {
    public body?: EstimateAddSubResourcesRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateAddSubResourcesRequestBody): EstimateAddResourcesRequest {
        this['body'] = body;
        return this;
    }
}
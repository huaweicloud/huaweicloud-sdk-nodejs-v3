import { EstimateChangeImageRequestBody } from './EstimateChangeImageRequestBody';


export class EstimateChangeImagesRequest {
    public body?: EstimateChangeImageRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateChangeImageRequestBody): EstimateChangeImagesRequest {
        this['body'] = body;
        return this;
    }
}
import { EstimateChangeImageRequestBody } from './EstimateChangeImageRequestBody';


export class EstimateDesktopPoolChangeImageRequest {
    public body?: EstimateChangeImageRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateChangeImageRequestBody): EstimateDesktopPoolChangeImageRequest {
        this['body'] = body;
        return this;
    }
}
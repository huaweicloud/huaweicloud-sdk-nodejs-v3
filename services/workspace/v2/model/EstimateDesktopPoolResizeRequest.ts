import { EstimateResizeRequestBody } from './EstimateResizeRequestBody';


export class EstimateDesktopPoolResizeRequest {
    public body?: EstimateResizeRequestBody;
    public constructor() { 
    }
    public withBody(body: EstimateResizeRequestBody): EstimateDesktopPoolResizeRequest {
        this['body'] = body;
        return this;
    }
}
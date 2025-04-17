import { UpdateAlertConfigRequestBody } from './UpdateAlertConfigRequestBody';


export class UpdateAlertConfigRequest {
    public body?: UpdateAlertConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateAlertConfigRequestBody): UpdateAlertConfigRequest {
        this['body'] = body;
        return this;
    }
}
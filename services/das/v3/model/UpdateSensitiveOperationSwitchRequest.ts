import { UpdateSensitiveOperationSwitchRequestBody } from './UpdateSensitiveOperationSwitchRequestBody';


export class UpdateSensitiveOperationSwitchRequest {
    public body?: UpdateSensitiveOperationSwitchRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateSensitiveOperationSwitchRequestBody): UpdateSensitiveOperationSwitchRequest {
        this['body'] = body;
        return this;
    }
}
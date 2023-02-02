import { UpdateKeyRotationIntervalRequestBody } from './UpdateKeyRotationIntervalRequestBody';


export class UpdateKeyRotationIntervalRequest {
    public body?: UpdateKeyRotationIntervalRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateKeyRotationIntervalRequestBody): UpdateKeyRotationIntervalRequest {
        this['body'] = body;
        return this;
    }
}
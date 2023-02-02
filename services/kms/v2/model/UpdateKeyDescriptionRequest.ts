import { UpdateKeyDescriptionRequestBody } from './UpdateKeyDescriptionRequestBody';


export class UpdateKeyDescriptionRequest {
    public body?: UpdateKeyDescriptionRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateKeyDescriptionRequestBody): UpdateKeyDescriptionRequest {
        this['body'] = body;
        return this;
    }
}
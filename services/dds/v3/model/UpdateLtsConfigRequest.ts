import { UpdateLtsConfigRequestBody } from './UpdateLtsConfigRequestBody';


export class UpdateLtsConfigRequest {
    public body?: UpdateLtsConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateLtsConfigRequestBody): UpdateLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}
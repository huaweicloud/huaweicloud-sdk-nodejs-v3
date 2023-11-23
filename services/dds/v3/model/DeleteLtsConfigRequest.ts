import { DeleteLtsConfigRequestBody } from './DeleteLtsConfigRequestBody';


export class DeleteLtsConfigRequest {
    public body?: DeleteLtsConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteLtsConfigRequestBody): DeleteLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}
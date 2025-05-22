import { UpdateRecycleBinEnableRequestBody } from './UpdateRecycleBinEnableRequestBody';


export class UpdateRecycleBinEnableRequest {
    public body?: UpdateRecycleBinEnableRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateRecycleBinEnableRequestBody): UpdateRecycleBinEnableRequest {
        this['body'] = body;
        return this;
    }
}
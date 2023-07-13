import { UpdateKeyAliasRequestBody } from './UpdateKeyAliasRequestBody';


export class UpdateKeyAliasRequest {
    public body?: UpdateKeyAliasRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateKeyAliasRequestBody): UpdateKeyAliasRequest {
        this['body'] = body;
        return this;
    }
}
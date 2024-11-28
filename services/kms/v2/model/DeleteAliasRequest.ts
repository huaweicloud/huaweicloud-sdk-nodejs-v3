import { DeleteAliasRequestBody } from './DeleteAliasRequestBody';


export class DeleteAliasRequest {
    public body?: DeleteAliasRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteAliasRequestBody): DeleteAliasRequest {
        this['body'] = body;
        return this;
    }
}
import { AddSshKeyRequestBody } from './AddSshKeyRequestBody';


export class AddSshKeyRequest {
    public body?: AddSshKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: AddSshKeyRequestBody): AddSshKeyRequest {
        this['body'] = body;
        return this;
    }
}
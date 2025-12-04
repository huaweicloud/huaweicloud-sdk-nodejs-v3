import { CreateNet2CloudPhoneServerRequestBody } from './CreateNet2CloudPhoneServerRequestBody';


export class CreateNet2CloudPhoneServerRequest {
    public body?: CreateNet2CloudPhoneServerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateNet2CloudPhoneServerRequestBody): CreateNet2CloudPhoneServerRequest {
        this['body'] = body;
        return this;
    }
}
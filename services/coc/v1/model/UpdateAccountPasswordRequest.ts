import { UpdateAccountPasswordRequestBody } from './UpdateAccountPasswordRequestBody';


export class UpdateAccountPasswordRequest {
    public body?: UpdateAccountPasswordRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateAccountPasswordRequestBody): UpdateAccountPasswordRequest {
        this['body'] = body;
        return this;
    }
}
import { ResetAccountPasswordRequestBody } from './ResetAccountPasswordRequestBody';


export class ResetAccountPasswordRequest {
    public body?: ResetAccountPasswordRequestBody;
    public constructor() { 
    }
    public withBody(body: ResetAccountPasswordRequestBody): ResetAccountPasswordRequest {
        this['body'] = body;
        return this;
    }
}
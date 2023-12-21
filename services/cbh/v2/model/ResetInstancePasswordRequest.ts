import { ResetPassword } from './ResetPassword';


export class ResetInstancePasswordRequest {
    public body?: ResetPassword;
    public constructor() { 
    }
    public withBody(body: ResetPassword): ResetInstancePasswordRequest {
        this['body'] = body;
        return this;
    }
}
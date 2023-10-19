import { ResetPassword } from './ResetPassword';


export class ResetPasswordRequest {
    public body?: ResetPassword;
    public constructor() { 
    }
    public withBody(body: ResetPassword): ResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}
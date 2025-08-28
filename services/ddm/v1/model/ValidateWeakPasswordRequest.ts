import { WeakPasswordReq } from './WeakPasswordReq';


export class ValidateWeakPasswordRequest {
    public body?: WeakPasswordReq;
    public constructor() { 
    }
    public withBody(body: WeakPasswordReq): ValidateWeakPasswordRequest {
        this['body'] = body;
        return this;
    }
}
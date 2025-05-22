import { AccountConfigModifyRequest } from './AccountConfigModifyRequest';


export class ModifyAccountInfoRequest {
    public body?: AccountConfigModifyRequest;
    public constructor() { 
    }
    public withBody(body: AccountConfigModifyRequest): ModifyAccountInfoRequest {
        this['body'] = body;
        return this;
    }
}
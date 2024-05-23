import { DelegatedAdministratorReqBody } from './DelegatedAdministratorReqBody';


export class RegisterDelegatedAdministratorRequest {
    public body?: DelegatedAdministratorReqBody;
    public constructor() { 
    }
    public withBody(body: DelegatedAdministratorReqBody): RegisterDelegatedAdministratorRequest {
        this['body'] = body;
        return this;
    }
}
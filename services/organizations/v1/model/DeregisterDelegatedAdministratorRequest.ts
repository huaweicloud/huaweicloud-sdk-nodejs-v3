import { DelegatedAdministratorReqBody } from './DelegatedAdministratorReqBody';


export class DeregisterDelegatedAdministratorRequest {
    public body?: DelegatedAdministratorReqBody;
    public constructor() { 
    }
    public withBody(body: DelegatedAdministratorReqBody): DeregisterDelegatedAdministratorRequest {
        this['body'] = body;
        return this;
    }
}
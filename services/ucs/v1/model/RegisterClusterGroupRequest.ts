import { RegisterClusterGroup } from './RegisterClusterGroup';


export class RegisterClusterGroupRequest {
    public body?: RegisterClusterGroup;
    public constructor() { 
    }
    public withBody(body: RegisterClusterGroup): RegisterClusterGroupRequest {
        this['body'] = body;
        return this;
    }
}
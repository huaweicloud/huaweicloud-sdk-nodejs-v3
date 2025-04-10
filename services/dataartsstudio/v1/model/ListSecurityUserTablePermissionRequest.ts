import { SecurityListUserTableList } from './SecurityListUserTableList';


export class ListSecurityUserTablePermissionRequest {
    public instance?: string;
    public body?: SecurityListUserTableList;
    public constructor() { 
    }
    public withInstance(instance: string): ListSecurityUserTablePermissionRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: SecurityListUserTableList): ListSecurityUserTablePermissionRequest {
        this['body'] = body;
        return this;
    }
}
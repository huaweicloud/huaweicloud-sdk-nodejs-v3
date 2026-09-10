import { ConnectionsHost } from './ConnectionsHost';


export class UpdateConnectionHostReq {
    public hosts?: Array<ConnectionsHost>;
    public constructor(hosts?: Array<ConnectionsHost>) { 
        this['hosts'] = hosts;
    }
    public withHosts(hosts: Array<ConnectionsHost>): UpdateConnectionHostReq {
        this['hosts'] = hosts;
        return this;
    }
}
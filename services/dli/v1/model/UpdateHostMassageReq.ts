import { EnhancedConnectionsHost } from './EnhancedConnectionsHost';


export class UpdateHostMassageReq {
    public hosts?: Array<EnhancedConnectionsHost>;
    public constructor(hosts?: Array<EnhancedConnectionsHost>) { 
        this['hosts'] = hosts;
    }
    public withHosts(hosts: Array<EnhancedConnectionsHost>): UpdateHostMassageReq {
        this['hosts'] = hosts;
        return this;
    }
}
import { ConnectionsDesc } from './ConnectionsDesc';


export class UpdateEndpointConnectionsDescRequestBody {
    public connections?: Array<ConnectionsDesc>;
    public constructor(connections?: Array<ConnectionsDesc>) { 
        this['connections'] = connections;
    }
    public withConnections(connections: Array<ConnectionsDesc>): UpdateEndpointConnectionsDescRequestBody {
        this['connections'] = connections;
        return this;
    }
}
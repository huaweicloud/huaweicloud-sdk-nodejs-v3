import { RemoveSecurityGroupsRequestBody } from './RemoveSecurityGroupsRequestBody';


export class RemoveSecurityGroupsRequest {
    private 'port_id'?: string;
    public body?: RemoveSecurityGroupsRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): RemoveSecurityGroupsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: RemoveSecurityGroupsRequestBody): RemoveSecurityGroupsRequest {
        this['body'] = body;
        return this;
    }
}
import { AddSecurityGroupsRequestBody } from './AddSecurityGroupsRequestBody';


export class AddSecurityGroupsRequest {
    private 'port_id'?: string;
    public body?: AddSecurityGroupsRequestBody;
    public constructor(portId?: string) { 
        this['port_id'] = portId;
    }
    public withPortId(portId: string): AddSecurityGroupsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: AddSecurityGroupsRequestBody): AddSecurityGroupsRequest {
        this['body'] = body;
        return this;
    }
}
import { ChangeServerNetworkInterfaceRequestBody } from './ChangeServerNetworkInterfaceRequestBody';


export class ChangeServerNetworkInterfaceRequest {
    private 'port_id'?: string;
    private 'server_id'?: string;
    public body?: ChangeServerNetworkInterfaceRequestBody;
    public constructor(portId?: string, serverId?: string) { 
        this['port_id'] = portId;
        this['server_id'] = serverId;
    }
    public withPortId(portId: string): ChangeServerNetworkInterfaceRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServerId(serverId: string): ChangeServerNetworkInterfaceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeServerNetworkInterfaceRequestBody): ChangeServerNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}
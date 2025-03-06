import { UpdateNicInfoRequestBody } from './UpdateNicInfoRequestBody';


export class UpdateServerInterfaceRequest {
    private 'server_id'?: string;
    private 'port_id'?: string;
    public body?: UpdateNicInfoRequestBody;
    public constructor(serverId?: string, portId?: string) { 
        this['server_id'] = serverId;
        this['port_id'] = portId;
    }
    public withServerId(serverId: string): UpdateServerInterfaceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withPortId(portId: string): UpdateServerInterfaceRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withBody(body: UpdateNicInfoRequestBody): UpdateServerInterfaceRequest {
        this['body'] = body;
        return this;
    }
}
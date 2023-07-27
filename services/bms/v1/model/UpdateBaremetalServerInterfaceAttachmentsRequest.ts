import { UpdateBaremetalServerInterfaceAttachmentsReq } from './UpdateBaremetalServerInterfaceAttachmentsReq';


export class UpdateBaremetalServerInterfaceAttachmentsRequest {
    private 'port_id'?: string;
    private 'server_id'?: string;
    public body?: UpdateBaremetalServerInterfaceAttachmentsReq;
    public constructor(portId?: string, serverId?: string) { 
        this['port_id'] = portId;
        this['server_id'] = serverId;
    }
    public withPortId(portId: string): UpdateBaremetalServerInterfaceAttachmentsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withServerId(serverId: string): UpdateBaremetalServerInterfaceAttachmentsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateBaremetalServerInterfaceAttachmentsReq): UpdateBaremetalServerInterfaceAttachmentsRequest {
        this['body'] = body;
        return this;
    }
}
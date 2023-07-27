import { UpdateBaremetalServerMetadataReq } from './UpdateBaremetalServerMetadataReq';


export class UpdateBaremetalServerMetadataRequest {
    private 'server_id'?: string;
    public body?: UpdateBaremetalServerMetadataReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateBaremetalServerMetadataRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateBaremetalServerMetadataReq): UpdateBaremetalServerMetadataRequest {
        this['body'] = body;
        return this;
    }
}
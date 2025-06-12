import { UpdateBaremetalServerMetadataOptionsRequestBody } from './UpdateBaremetalServerMetadataOptionsRequestBody';


export class UpdateBaremetalServerMetadataOptionsRequest {
    private 'server_id'?: string;
    public body?: UpdateBaremetalServerMetadataOptionsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateBaremetalServerMetadataOptionsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateBaremetalServerMetadataOptionsRequestBody): UpdateBaremetalServerMetadataOptionsRequest {
        this['body'] = body;
        return this;
    }
}
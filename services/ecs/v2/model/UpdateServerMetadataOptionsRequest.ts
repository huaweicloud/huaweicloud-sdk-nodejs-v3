import { UpdateServerMetadataOptionsRequestBody } from './UpdateServerMetadataOptionsRequestBody';


export class UpdateServerMetadataOptionsRequest {
    private 'server_id'?: string;
    public body?: UpdateServerMetadataOptionsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerMetadataOptionsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateServerMetadataOptionsRequestBody): UpdateServerMetadataOptionsRequest {
        this['body'] = body;
        return this;
    }
}
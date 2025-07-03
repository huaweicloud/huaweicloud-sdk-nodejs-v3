import { UpdateServerMetadataOptionsRequestBody } from './UpdateServerMetadataOptionsRequestBody';


export class UpdateMetadataOptionsRequest {
    private 'server_id'?: string;
    public body?: UpdateServerMetadataOptionsRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateMetadataOptionsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateServerMetadataOptionsRequestBody): UpdateMetadataOptionsRequest {
        this['body'] = body;
        return this;
    }
}
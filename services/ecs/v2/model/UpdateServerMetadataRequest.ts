import { UpdateServerMetadataRequestBody } from './UpdateServerMetadataRequestBody';


export class UpdateServerMetadataRequest {
    private 'server_id'?: string;
    public body?: UpdateServerMetadataRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerMetadataRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateServerMetadataRequestBody): UpdateServerMetadataRequest {
        this['body'] = body;
        return this;
    }
}
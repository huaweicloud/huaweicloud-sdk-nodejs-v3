import { UpdateServerMetadataRequestBody } from './UpdateServerMetadataRequestBody';


export class UpdateServerMetadataRequest {
    private 'server_id': string | undefined;
    public body?: UpdateServerMetadataRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerMetadataRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: UpdateServerMetadataRequestBody): UpdateServerMetadataRequest {
        this['body'] = body;
        return this;
    }
}
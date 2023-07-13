import { AttachServerVolumeRequestBody } from './AttachServerVolumeRequestBody';


export class AttachServerVolumeRequest {
    private 'server_id': string | undefined;
    public body?: AttachServerVolumeRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): AttachServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: AttachServerVolumeRequestBody): AttachServerVolumeRequest {
        this['body'] = body;
        return this;
    }
}
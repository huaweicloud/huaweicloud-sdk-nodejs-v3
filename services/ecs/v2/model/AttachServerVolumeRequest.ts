import { AttachServerVolumeRequestBody } from './AttachServerVolumeRequestBody';


export class AttachServerVolumeRequest {
    private 'server_id'?: string;
    public body?: AttachServerVolumeRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): AttachServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: AttachServerVolumeRequestBody): AttachServerVolumeRequest {
        this['body'] = body;
        return this;
    }
}
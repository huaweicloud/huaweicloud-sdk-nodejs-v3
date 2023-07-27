import { AttachVolumeBody } from './AttachVolumeBody';


export class AttachBaremetalServerVolumeRequest {
    private 'server_id'?: string;
    public body?: AttachVolumeBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): AttachBaremetalServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: AttachVolumeBody): AttachBaremetalServerVolumeRequest {
        this['body'] = body;
        return this;
    }
}
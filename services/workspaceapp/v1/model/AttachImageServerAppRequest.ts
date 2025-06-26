import { AttachServerAppReq } from './AttachServerAppReq';


export class AttachImageServerAppRequest {
    private 'server_id'?: string;
    public body?: AttachServerAppReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): AttachImageServerAppRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: AttachServerAppReq): AttachImageServerAppRequest {
        this['body'] = body;
        return this;
    }
}
import { DeleteServerNicsReq } from './DeleteServerNicsReq';


export class DeleteServerNicsRequest {
    private 'server_id'?: string;
    public body?: DeleteServerNicsReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): DeleteServerNicsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: DeleteServerNicsReq): DeleteServerNicsRequest {
        this['body'] = body;
        return this;
    }
}
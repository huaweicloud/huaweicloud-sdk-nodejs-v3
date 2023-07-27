import { AddServerNicsReq } from './AddServerNicsReq';


export class AddServerNicsRequest {
    private 'server_id'?: string;
    public body?: AddServerNicsReq;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): AddServerNicsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: AddServerNicsReq): AddServerNicsRequest {
        this['body'] = body;
        return this;
    }
}
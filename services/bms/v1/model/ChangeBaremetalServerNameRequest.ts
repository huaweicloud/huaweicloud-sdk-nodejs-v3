import { ChangeBaremetalNameBody } from './ChangeBaremetalNameBody';


export class ChangeBaremetalServerNameRequest {
    private 'server_id'?: string;
    public body?: ChangeBaremetalNameBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeBaremetalServerNameRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeBaremetalNameBody): ChangeBaremetalServerNameRequest {
        this['body'] = body;
        return this;
    }
}
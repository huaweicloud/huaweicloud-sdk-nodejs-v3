import { RegisterServerMonitorRequestBody } from './RegisterServerMonitorRequestBody';


export class RegisterServerMonitorRequest {
    private 'server_id'?: string;
    public body?: RegisterServerMonitorRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): RegisterServerMonitorRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: RegisterServerMonitorRequestBody): RegisterServerMonitorRequest {
        this['body'] = body;
        return this;
    }
}
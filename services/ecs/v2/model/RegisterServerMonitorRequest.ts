import { RegisterServerMonitorRequestBody } from './RegisterServerMonitorRequestBody';


export class RegisterServerMonitorRequest {
    private 'server_id': string | undefined;
    public body?: RegisterServerMonitorRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): RegisterServerMonitorRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: RegisterServerMonitorRequestBody): RegisterServerMonitorRequest {
        this['body'] = body;
        return this;
    }
}
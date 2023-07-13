import { RegisterServerAutoRecoveryRequestBody } from './RegisterServerAutoRecoveryRequestBody';


export class RegisterServerAutoRecoveryRequest {
    private 'server_id': string | undefined;
    public body?: RegisterServerAutoRecoveryRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): RegisterServerAutoRecoveryRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: RegisterServerAutoRecoveryRequestBody): RegisterServerAutoRecoveryRequest {
        this['body'] = body;
        return this;
    }
}
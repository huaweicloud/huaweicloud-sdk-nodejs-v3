import { ResetServerPasswordRequestBody } from './ResetServerPasswordRequestBody';


export class ResetServerPasswordRequest {
    private 'server_id': string | undefined;
    public body?: ResetServerPasswordRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResetServerPasswordRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: ResetServerPasswordRequestBody): ResetServerPasswordRequest {
        this['body'] = body;
        return this;
    }
}
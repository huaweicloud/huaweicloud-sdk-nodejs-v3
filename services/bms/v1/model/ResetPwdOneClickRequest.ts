import { ResetPasswordBody } from './ResetPasswordBody';


export class ResetPwdOneClickRequest {
    private 'server_id'?: string;
    public body?: ResetPasswordBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ResetPwdOneClickRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ResetPasswordBody): ResetPwdOneClickRequest {
        this['body'] = body;
        return this;
    }
}
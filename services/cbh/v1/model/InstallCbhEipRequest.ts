import { OperateEipRequestBody } from './OperateEipRequestBody';


export class InstallCbhEipRequest {
    private 'server_id'?: string;
    public body?: OperateEipRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): InstallCbhEipRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: OperateEipRequestBody): InstallCbhEipRequest {
        this['body'] = body;
        return this;
    }
}
import { UpdateServerAutoTerminateTimeRequestBody } from './UpdateServerAutoTerminateTimeRequestBody';


export class UpdateServerAutoTerminateTimeRequest {
    private 'server_id'?: string;
    public body?: UpdateServerAutoTerminateTimeRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerAutoTerminateTimeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: UpdateServerAutoTerminateTimeRequestBody): UpdateServerAutoTerminateTimeRequest {
        this['body'] = body;
        return this;
    }
}
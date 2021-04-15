import { UpdateServerAutoTerminateTimeRequestBody } from './UpdateServerAutoTerminateTimeRequestBody';


export class UpdateServerAutoTerminateTimeRequest {
    private 'server_id': string | undefined;
    public body?: UpdateServerAutoTerminateTimeRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): UpdateServerAutoTerminateTimeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: UpdateServerAutoTerminateTimeRequestBody): UpdateServerAutoTerminateTimeRequest {
        this['body'] = body;
        return this;
    }
}
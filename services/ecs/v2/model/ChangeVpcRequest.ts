import { ChangeVpcRequestBody } from './ChangeVpcRequestBody';


export class ChangeVpcRequest {
    private 'server_id'?: string;
    public body?: ChangeVpcRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeVpcRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeVpcRequestBody): ChangeVpcRequest {
        this['body'] = body;
        return this;
    }
}
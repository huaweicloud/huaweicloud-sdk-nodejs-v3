import { ChangeServerOsWithoutCloudInitRequestBody } from './ChangeServerOsWithoutCloudInitRequestBody';


export class ChangeServerOsWithoutCloudInitRequest {
    private 'server_id'?: string;
    public body?: ChangeServerOsWithoutCloudInitRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeServerOsWithoutCloudInitRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeServerOsWithoutCloudInitRequestBody): ChangeServerOsWithoutCloudInitRequest {
        this['body'] = body;
        return this;
    }
}
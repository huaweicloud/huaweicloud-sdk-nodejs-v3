import { ChangeCloudPhoneServerRequestBody } from './ChangeCloudPhoneServerRequestBody';


export class ChangeCloudPhoneServerRequest {
    private 'server_id'?: string;
    public body?: ChangeCloudPhoneServerRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): ChangeCloudPhoneServerRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: ChangeCloudPhoneServerRequestBody): ChangeCloudPhoneServerRequest {
        this['body'] = body;
        return this;
    }
}
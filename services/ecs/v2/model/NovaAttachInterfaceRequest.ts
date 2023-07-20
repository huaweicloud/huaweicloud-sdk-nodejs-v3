import { NovaAttachInterfaceRequestBody } from './NovaAttachInterfaceRequestBody';


export class NovaAttachInterfaceRequest {
    private 'server_id'?: string;
    public body?: NovaAttachInterfaceRequestBody;
    public constructor(serverId?: string) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaAttachInterfaceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withBody(body: NovaAttachInterfaceRequestBody): NovaAttachInterfaceRequest {
        this['body'] = body;
        return this;
    }
}
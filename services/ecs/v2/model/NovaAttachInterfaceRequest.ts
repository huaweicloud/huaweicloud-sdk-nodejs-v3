import { NovaAttachInterfaceRequestBody } from './NovaAttachInterfaceRequestBody';


export class NovaAttachInterfaceRequest {
    private 'server_id': string | undefined;
    public body?: NovaAttachInterfaceRequestBody;
    public constructor(serverId?: any) { 
        this['server_id'] = serverId;
    }
    public withServerId(serverId: string): NovaAttachInterfaceRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withBody(body: NovaAttachInterfaceRequestBody): NovaAttachInterfaceRequest {
        this['body'] = body;
        return this;
    }
}
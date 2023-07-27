import { AddTunnelDto } from './AddTunnelDto';


export class AddTunnelRequest {
    private 'Instance-Id'?: string;
    public body?: AddTunnelDto;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): AddTunnelRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withBody(body: AddTunnelDto): AddTunnelRequest {
        this['body'] = body;
        return this;
    }
}
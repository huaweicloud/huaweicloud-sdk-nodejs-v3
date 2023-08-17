import { UpdateHostedDirectConnectRequestBody } from './UpdateHostedDirectConnectRequestBody';


export class UpdateHostedDirectConnectRequest {
    private 'hosted_connect_id'?: string;
    public body?: UpdateHostedDirectConnectRequestBody;
    public constructor(hostedConnectId?: string) { 
        this['hosted_connect_id'] = hostedConnectId;
    }
    public withHostedConnectId(hostedConnectId: string): UpdateHostedDirectConnectRequest {
        this['hosted_connect_id'] = hostedConnectId;
        return this;
    }
    public set hostedConnectId(hostedConnectId: string  | undefined) {
        this['hosted_connect_id'] = hostedConnectId;
    }
    public get hostedConnectId(): string | undefined {
        return this['hosted_connect_id'];
    }
    public withBody(body: UpdateHostedDirectConnectRequestBody): UpdateHostedDirectConnectRequest {
        this['body'] = body;
        return this;
    }
}
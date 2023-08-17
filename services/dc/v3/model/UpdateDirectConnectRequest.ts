import { UpdateDirectConnectRequestBody } from './UpdateDirectConnectRequestBody';


export class UpdateDirectConnectRequest {
    private 'direct_connect_id'?: string;
    public body?: UpdateDirectConnectRequestBody;
    public constructor(directConnectId?: string) { 
        this['direct_connect_id'] = directConnectId;
    }
    public withDirectConnectId(directConnectId: string): UpdateDirectConnectRequest {
        this['direct_connect_id'] = directConnectId;
        return this;
    }
    public set directConnectId(directConnectId: string  | undefined) {
        this['direct_connect_id'] = directConnectId;
    }
    public get directConnectId(): string | undefined {
        return this['direct_connect_id'];
    }
    public withBody(body: UpdateDirectConnectRequestBody): UpdateDirectConnectRequest {
        this['body'] = body;
        return this;
    }
}
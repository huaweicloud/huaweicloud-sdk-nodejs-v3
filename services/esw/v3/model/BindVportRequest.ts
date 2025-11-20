import { BindVportRequestBody } from './BindVportRequestBody';


export class BindVportRequest {
    private 'connection_id'?: string;
    public body?: BindVportRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): BindVportRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: BindVportRequestBody): BindVportRequest {
        this['body'] = body;
        return this;
    }
}
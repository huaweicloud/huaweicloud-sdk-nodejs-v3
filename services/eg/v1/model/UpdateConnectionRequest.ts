import { ConnectionUpdateReq } from './ConnectionUpdateReq';


export class UpdateConnectionRequest {
    private 'connection_id'?: string;
    public body?: ConnectionUpdateReq;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): UpdateConnectionRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ConnectionUpdateReq): UpdateConnectionRequest {
        this['body'] = body;
        return this;
    }
}
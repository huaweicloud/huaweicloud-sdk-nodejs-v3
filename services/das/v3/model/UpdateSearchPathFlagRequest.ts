import { UpdateSearchPathFlagRequestBody } from './UpdateSearchPathFlagRequestBody';


export class UpdateSearchPathFlagRequest {
    private 'connection_id'?: string;
    public body?: UpdateSearchPathFlagRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): UpdateSearchPathFlagRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateSearchPathFlagRequestBody): UpdateSearchPathFlagRequest {
        this['body'] = body;
        return this;
    }
}
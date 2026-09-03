import { ExecuteTuningRequestBody } from './ExecuteTuningRequestBody';


export class ExecuteTuningRequest {
    private 'connection_id'?: string;
    public body?: ExecuteTuningRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ExecuteTuningRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ExecuteTuningRequestBody): ExecuteTuningRequest {
        this['body'] = body;
        return this;
    }
}
import { ShowExecutionPlanRequestBody } from './ShowExecutionPlanRequestBody';


export class ShowExecutionPlanRequest {
    private 'connection_id'?: string;
    public body?: ShowExecutionPlanRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowExecutionPlanRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ShowExecutionPlanRequestBody): ShowExecutionPlanRequest {
        this['body'] = body;
        return this;
    }
}
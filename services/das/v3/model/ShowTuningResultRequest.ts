import { ShowTuningResultRequestBody } from './ShowTuningResultRequestBody';


export class ShowTuningResultRequest {
    private 'connection_id'?: string;
    public body?: ShowTuningResultRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowTuningResultRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ShowTuningResultRequestBody): ShowTuningResultRequest {
        this['body'] = body;
        return this;
    }
}
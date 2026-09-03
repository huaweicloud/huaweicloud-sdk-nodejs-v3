import { InvokeWdrReportRequestBody } from './InvokeWdrReportRequestBody';


export class InvokeWdrReportRequest {
    private 'connection_id'?: string;
    public body?: InvokeWdrReportRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): InvokeWdrReportRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: InvokeWdrReportRequestBody): InvokeWdrReportRequest {
        this['body'] = body;
        return this;
    }
}
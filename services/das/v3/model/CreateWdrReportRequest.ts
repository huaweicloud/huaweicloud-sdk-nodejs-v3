import { CreateWdrReportRequestBody } from './CreateWdrReportRequestBody';


export class CreateWdrReportRequest {
    private 'connection_id'?: string;
    public body?: CreateWdrReportRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): CreateWdrReportRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateWdrReportRequestBody): CreateWdrReportRequest {
        this['body'] = body;
        return this;
    }
}
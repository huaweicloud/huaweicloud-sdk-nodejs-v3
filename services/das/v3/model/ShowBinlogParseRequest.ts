import { ShowBinlogParseRequestBody } from './ShowBinlogParseRequestBody';


export class ShowBinlogParseRequest {
    private 'connection_id'?: string;
    public body?: ShowBinlogParseRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ShowBinlogParseRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ShowBinlogParseRequestBody): ShowBinlogParseRequest {
        this['body'] = body;
        return this;
    }
}
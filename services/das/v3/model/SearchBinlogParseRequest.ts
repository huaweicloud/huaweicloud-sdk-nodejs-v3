import { SearchBinlogParseRequestBody } from './SearchBinlogParseRequestBody';


export class SearchBinlogParseRequest {
    private 'connection_id'?: string;
    public body?: SearchBinlogParseRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): SearchBinlogParseRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: SearchBinlogParseRequestBody): SearchBinlogParseRequest {
        this['body'] = body;
        return this;
    }
}
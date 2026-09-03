import { ListBinlogFilesRequestBody } from './ListBinlogFilesRequestBody';


export class ListBinlogFilesRequest {
    private 'connection_id'?: string;
    public body?: ListBinlogFilesRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): ListBinlogFilesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: ListBinlogFilesRequestBody): ListBinlogFilesRequest {
        this['body'] = body;
        return this;
    }
}
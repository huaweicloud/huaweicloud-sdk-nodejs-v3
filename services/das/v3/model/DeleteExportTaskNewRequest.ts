import { DeleteExportTaskNewRequestBody } from './DeleteExportTaskNewRequestBody';


export class DeleteExportTaskNewRequest {
    private 'connection_id'?: string;
    public body?: DeleteExportTaskNewRequestBody;
    public constructor(connectionId?: string) { 
        this['connection_id'] = connectionId;
    }
    public withConnectionId(connectionId: string): DeleteExportTaskNewRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: DeleteExportTaskNewRequestBody): DeleteExportTaskNewRequest {
        this['body'] = body;
        return this;
    }
}
import { DeleteExportTaskRequestBody } from './DeleteExportTaskRequestBody';


export class DeleteExportTasksRequest {
    public body?: DeleteExportTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteExportTaskRequestBody): DeleteExportTasksRequest {
        this['body'] = body;
        return this;
    }
}
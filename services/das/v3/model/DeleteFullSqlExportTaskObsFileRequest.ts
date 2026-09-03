import { DeleteFullSqlExportTaskObsFileRequestBody } from './DeleteFullSqlExportTaskObsFileRequestBody';


export class DeleteFullSqlExportTaskObsFileRequest {
    public body?: DeleteFullSqlExportTaskObsFileRequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteFullSqlExportTaskObsFileRequestBody): DeleteFullSqlExportTaskObsFileRequest {
        this['body'] = body;
        return this;
    }
}
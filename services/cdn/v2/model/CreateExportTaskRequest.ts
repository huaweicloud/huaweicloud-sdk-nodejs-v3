import { ExportTaskVo } from './ExportTaskVo';


export class CreateExportTaskRequest {
    public body?: ExportTaskVo;
    public constructor() { 
    }
    public withBody(body: ExportTaskVo): CreateExportTaskRequest {
        this['body'] = body;
        return this;
    }
}
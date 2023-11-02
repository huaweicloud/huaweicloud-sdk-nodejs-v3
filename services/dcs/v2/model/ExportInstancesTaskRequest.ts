import { ExportInstancesTaskBody } from './ExportInstancesTaskBody';


export class ExportInstancesTaskRequest {
    public body?: ExportInstancesTaskBody;
    public constructor() { 
    }
    public withBody(body: ExportInstancesTaskBody): ExportInstancesTaskRequest {
        this['body'] = body;
        return this;
    }
}
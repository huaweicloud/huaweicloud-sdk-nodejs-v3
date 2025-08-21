import { ImportDataMapLineageRequestBody } from './ImportDataMapLineageRequestBody';


export class ImportDataMapLineageRequest {
    public instance?: string;
    public body?: ImportDataMapLineageRequestBody;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ImportDataMapLineageRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: ImportDataMapLineageRequestBody): ImportDataMapLineageRequest {
        this['body'] = body;
        return this;
    }
}
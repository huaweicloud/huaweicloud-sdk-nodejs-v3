import { TableLineage } from './TableLineage';


export class ImportLineageRequest {
    public workspace?: string;
    public body?: Array<TableLineage>;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ImportLineageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: Array<TableLineage>): ImportLineageRequest {
        this['body'] = body;
        return this;
    }
}
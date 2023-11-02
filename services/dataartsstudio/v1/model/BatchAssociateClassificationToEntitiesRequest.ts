import { OpenBulkClassifications } from './OpenBulkClassifications';


export class BatchAssociateClassificationToEntitiesRequest {
    public workspace?: string;
    public body?: OpenBulkClassifications;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchAssociateClassificationToEntitiesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: OpenBulkClassifications): BatchAssociateClassificationToEntitiesRequest {
        this['body'] = body;
        return this;
    }
}
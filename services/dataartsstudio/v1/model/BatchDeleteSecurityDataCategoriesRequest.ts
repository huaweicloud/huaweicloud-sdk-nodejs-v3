import { BatchDeleteCategoryGroupDTO } from './BatchDeleteCategoryGroupDTO';


export class BatchDeleteSecurityDataCategoriesRequest {
    public workspace?: string;
    public body?: BatchDeleteCategoryGroupDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteSecurityDataCategoriesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteCategoryGroupDTO): BatchDeleteSecurityDataCategoriesRequest {
        this['body'] = body;
        return this;
    }
}
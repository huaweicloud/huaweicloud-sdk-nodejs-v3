import { DataCategoryInsertDTO } from './DataCategoryInsertDTO';


export class CreateSecurityDataCategoryRequest {
    public workspace?: string;
    public body?: DataCategoryInsertDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecurityDataCategoryRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataCategoryInsertDTO): CreateSecurityDataCategoryRequest {
        this['body'] = body;
        return this;
    }
}
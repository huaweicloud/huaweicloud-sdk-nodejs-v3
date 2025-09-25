import { DataCategoryUpdateDTO } from './DataCategoryUpdateDTO';


export class UpdateSecurityDataCategoriesRequest {
    public workspace?: string;
    public id?: string;
    public body?: DataCategoryUpdateDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecurityDataCategoriesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecurityDataCategoriesRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: DataCategoryUpdateDTO): UpdateSecurityDataCategoriesRequest {
        this['body'] = body;
        return this;
    }
}
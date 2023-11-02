import { CatalogParamsVO } from './CatalogParamsVO';


export class CreateSubjectRequest {
    public workspace?: string;
    public body?: CatalogParamsVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSubjectRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CatalogParamsVO): CreateSubjectRequest {
        this['body'] = body;
        return this;
    }
}
import { CatalogParamsVO } from './CatalogParamsVO';


export class UpdateSubjectRequest {
    public workspace?: string;
    public body?: CatalogParamsVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateSubjectRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CatalogParamsVO): UpdateSubjectRequest {
        this['body'] = body;
        return this;
    }
}
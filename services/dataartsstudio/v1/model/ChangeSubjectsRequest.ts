import { CatalogLevelVOList } from './CatalogLevelVOList';


export class ChangeSubjectsRequest {
    public workspace?: string;
    public body?: CatalogLevelVOList;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ChangeSubjectsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CatalogLevelVOList): ChangeSubjectsRequest {
        this['body'] = body;
        return this;
    }
}
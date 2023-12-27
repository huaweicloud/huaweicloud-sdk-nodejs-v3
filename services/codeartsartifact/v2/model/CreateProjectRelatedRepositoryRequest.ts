import { IDEPrivilageProjectInfo } from './IDEPrivilageProjectInfo';


export class CreateProjectRelatedRepositoryRequest {
    public body?: IDEPrivilageProjectInfo;
    public constructor() { 
    }
    public withBody(body: IDEPrivilageProjectInfo): CreateProjectRelatedRepositoryRequest {
        this['body'] = body;
        return this;
    }
}
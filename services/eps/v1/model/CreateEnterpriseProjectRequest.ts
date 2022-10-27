import { EnterpriseProject } from './EnterpriseProject';


export class CreateEnterpriseProjectRequest {
    public body?: EnterpriseProject;
    public constructor() { 
    }
    public withBody(body: EnterpriseProject): CreateEnterpriseProjectRequest {
        this['body'] = body;
        return this;
    }
}
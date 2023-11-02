import { SubjectParamsVO } from './SubjectParamsVO';


export class CreateSubjectNewRequest {
    public workspace?: string;
    public body?: SubjectParamsVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSubjectNewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: SubjectParamsVO): CreateSubjectNewRequest {
        this['body'] = body;
        return this;
    }
}
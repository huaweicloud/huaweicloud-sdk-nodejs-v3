import { SubjectParamsVO } from './SubjectParamsVO';


export class UpdateSubjectNewRequest {
    public workspace?: string;
    public body?: SubjectParamsVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateSubjectNewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: SubjectParamsVO): UpdateSubjectNewRequest {
        this['body'] = body;
        return this;
    }
}
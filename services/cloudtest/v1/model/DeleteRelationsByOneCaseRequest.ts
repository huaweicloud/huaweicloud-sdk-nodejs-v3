import { DeleteRelationsByOneCaseInfo } from './DeleteRelationsByOneCaseInfo';


export class DeleteRelationsByOneCaseRequest {
    private 'case_id'?: string;
    public body?: DeleteRelationsByOneCaseInfo;
    public constructor(caseId?: string) { 
        this['case_id'] = caseId;
    }
    public withCaseId(caseId: string): DeleteRelationsByOneCaseRequest {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withBody(body: DeleteRelationsByOneCaseInfo): DeleteRelationsByOneCaseRequest {
        this['body'] = body;
        return this;
    }
}
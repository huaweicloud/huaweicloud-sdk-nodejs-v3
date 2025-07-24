import { AddRelationsInfo } from './AddRelationsInfo';


export class CreateRelationsByOneCaseRequest {
    private 'case_id'?: string;
    public body?: AddRelationsInfo;
    public constructor(caseId?: string) { 
        this['case_id'] = caseId;
    }
    public withCaseId(caseId: string): CreateRelationsByOneCaseRequest {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withBody(body: AddRelationsInfo): CreateRelationsByOneCaseRequest {
        this['body'] = body;
        return this;
    }
}
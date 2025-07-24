import { TestCaseInfo } from './TestCaseInfo';


export class UpdateVersionTestCaseRequest {
    private 'case_id'?: string;
    public body?: TestCaseInfo;
    public constructor(caseId?: string) { 
        this['case_id'] = caseId;
    }
    public withCaseId(caseId: string): UpdateVersionTestCaseRequest {
        this['case_id'] = caseId;
        return this;
    }
    public set caseId(caseId: string  | undefined) {
        this['case_id'] = caseId;
    }
    public get caseId(): string | undefined {
        return this['case_id'];
    }
    public withBody(body: TestCaseInfo): UpdateVersionTestCaseRequest {
        this['body'] = body;
        return this;
    }
}
import { TestCaseInfo } from './TestCaseInfo';


export class UpdateTestVersionCaseRequest {
    private 'case_uri'?: string;
    public body?: TestCaseInfo;
    public constructor(caseUri?: string) { 
        this['case_uri'] = caseUri;
    }
    public withCaseUri(caseUri: string): UpdateTestVersionCaseRequest {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withBody(body: TestCaseInfo): UpdateTestVersionCaseRequest {
        this['body'] = body;
        return this;
    }
}
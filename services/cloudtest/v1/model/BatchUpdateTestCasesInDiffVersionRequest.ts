import { TestCaseInfo } from './TestCaseInfo';


export class BatchUpdateTestCasesInDiffVersionRequest {
    public body?: Array<TestCaseInfo>;
    public constructor() { 
    }
    public withBody(body: Array<TestCaseInfo>): BatchUpdateTestCasesInDiffVersionRequest {
        this['body'] = body;
        return this;
    }
}
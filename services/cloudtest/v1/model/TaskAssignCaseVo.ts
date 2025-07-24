

export class TaskAssignCaseVo {
    public sort?: number;
    private 'case_uri'?: string;
    private 'is_available'?: number;
    private 'test_case_name'?: string;
    private 'test_case_number'?: string;
    public constructor() { 
    }
    public withSort(sort: number): TaskAssignCaseVo {
        this['sort'] = sort;
        return this;
    }
    public withCaseUri(caseUri: string): TaskAssignCaseVo {
        this['case_uri'] = caseUri;
        return this;
    }
    public set caseUri(caseUri: string  | undefined) {
        this['case_uri'] = caseUri;
    }
    public get caseUri(): string | undefined {
        return this['case_uri'];
    }
    public withIsAvailable(isAvailable: number): TaskAssignCaseVo {
        this['is_available'] = isAvailable;
        return this;
    }
    public set isAvailable(isAvailable: number  | undefined) {
        this['is_available'] = isAvailable;
    }
    public get isAvailable(): number | undefined {
        return this['is_available'];
    }
    public withTestCaseName(testCaseName: string): TaskAssignCaseVo {
        this['test_case_name'] = testCaseName;
        return this;
    }
    public set testCaseName(testCaseName: string  | undefined) {
        this['test_case_name'] = testCaseName;
    }
    public get testCaseName(): string | undefined {
        return this['test_case_name'];
    }
    public withTestCaseNumber(testCaseNumber: string): TaskAssignCaseVo {
        this['test_case_number'] = testCaseNumber;
        return this;
    }
    public set testCaseNumber(testCaseNumber: string  | undefined) {
        this['test_case_number'] = testCaseNumber;
    }
    public get testCaseNumber(): string | undefined {
        return this['test_case_number'];
    }
}
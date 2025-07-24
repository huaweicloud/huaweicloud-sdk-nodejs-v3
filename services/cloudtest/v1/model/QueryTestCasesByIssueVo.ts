import { TestCaseVo } from './TestCaseVo';


export class QueryTestCasesByIssueVo {
    private 'case_status_map'?: { [key: string]: number; };
    private 'new_create'?: number;
    public designing?: number;
    public finished?: number;
    public testing?: number;
    private 'test_case_num'?: number;
    public testcases?: Array<TestCaseVo>;
    private 'total_count'?: number;
    public constructor() { 
    }
    public withCaseStatusMap(caseStatusMap: { [key: string]: number; }): QueryTestCasesByIssueVo {
        this['case_status_map'] = caseStatusMap;
        return this;
    }
    public set caseStatusMap(caseStatusMap: { [key: string]: number; }  | undefined) {
        this['case_status_map'] = caseStatusMap;
    }
    public get caseStatusMap(): { [key: string]: number; } | undefined {
        return this['case_status_map'];
    }
    public withNewCreate(newCreate: number): QueryTestCasesByIssueVo {
        this['new_create'] = newCreate;
        return this;
    }
    public set newCreate(newCreate: number  | undefined) {
        this['new_create'] = newCreate;
    }
    public get newCreate(): number | undefined {
        return this['new_create'];
    }
    public withDesigning(designing: number): QueryTestCasesByIssueVo {
        this['designing'] = designing;
        return this;
    }
    public withFinished(finished: number): QueryTestCasesByIssueVo {
        this['finished'] = finished;
        return this;
    }
    public withTesting(testing: number): QueryTestCasesByIssueVo {
        this['testing'] = testing;
        return this;
    }
    public withTestCaseNum(testCaseNum: number): QueryTestCasesByIssueVo {
        this['test_case_num'] = testCaseNum;
        return this;
    }
    public set testCaseNum(testCaseNum: number  | undefined) {
        this['test_case_num'] = testCaseNum;
    }
    public get testCaseNum(): number | undefined {
        return this['test_case_num'];
    }
    public withTestcases(testcases: Array<TestCaseVo>): QueryTestCasesByIssueVo {
        this['testcases'] = testcases;
        return this;
    }
    public withTotalCount(totalCount: number): QueryTestCasesByIssueVo {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}
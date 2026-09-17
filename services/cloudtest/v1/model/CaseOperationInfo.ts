import { AssignCaseInfo } from './AssignCaseInfo';


export class CaseOperationInfo {
    private 'test_cases_info'?: Array<AssignCaseInfo>;
    private 'set_up_cases_info'?: Array<AssignCaseInfo>;
    private 'tear_down_cases_info'?: Array<AssignCaseInfo>;
    public constructor() { 
    }
    public withTestCasesInfo(testCasesInfo: Array<AssignCaseInfo>): CaseOperationInfo {
        this['test_cases_info'] = testCasesInfo;
        return this;
    }
    public set testCasesInfo(testCasesInfo: Array<AssignCaseInfo>  | undefined) {
        this['test_cases_info'] = testCasesInfo;
    }
    public get testCasesInfo(): Array<AssignCaseInfo> | undefined {
        return this['test_cases_info'];
    }
    public withSetUpCasesInfo(setUpCasesInfo: Array<AssignCaseInfo>): CaseOperationInfo {
        this['set_up_cases_info'] = setUpCasesInfo;
        return this;
    }
    public set setUpCasesInfo(setUpCasesInfo: Array<AssignCaseInfo>  | undefined) {
        this['set_up_cases_info'] = setUpCasesInfo;
    }
    public get setUpCasesInfo(): Array<AssignCaseInfo> | undefined {
        return this['set_up_cases_info'];
    }
    public withTearDownCasesInfo(tearDownCasesInfo: Array<AssignCaseInfo>): CaseOperationInfo {
        this['tear_down_cases_info'] = tearDownCasesInfo;
        return this;
    }
    public set tearDownCasesInfo(tearDownCasesInfo: Array<AssignCaseInfo>  | undefined) {
        this['tear_down_cases_info'] = tearDownCasesInfo;
    }
    public get tearDownCasesInfo(): Array<AssignCaseInfo> | undefined {
        return this['tear_down_cases_info'];
    }
}
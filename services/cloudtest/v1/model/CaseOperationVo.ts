import { TaskAssignCaseVo } from './TaskAssignCaseVo';


export class CaseOperationVo {
    private 'test_cases_info'?: Array<TaskAssignCaseVo>;
    private 'set_up_cases_info'?: Array<TaskAssignCaseVo>;
    private 'tear_down_cases_info'?: Array<TaskAssignCaseVo>;
    public constructor() { 
    }
    public withTestCasesInfo(testCasesInfo: Array<TaskAssignCaseVo>): CaseOperationVo {
        this['test_cases_info'] = testCasesInfo;
        return this;
    }
    public set testCasesInfo(testCasesInfo: Array<TaskAssignCaseVo>  | undefined) {
        this['test_cases_info'] = testCasesInfo;
    }
    public get testCasesInfo(): Array<TaskAssignCaseVo> | undefined {
        return this['test_cases_info'];
    }
    public withSetUpCasesInfo(setUpCasesInfo: Array<TaskAssignCaseVo>): CaseOperationVo {
        this['set_up_cases_info'] = setUpCasesInfo;
        return this;
    }
    public set setUpCasesInfo(setUpCasesInfo: Array<TaskAssignCaseVo>  | undefined) {
        this['set_up_cases_info'] = setUpCasesInfo;
    }
    public get setUpCasesInfo(): Array<TaskAssignCaseVo> | undefined {
        return this['set_up_cases_info'];
    }
    public withTearDownCasesInfo(tearDownCasesInfo: Array<TaskAssignCaseVo>): CaseOperationVo {
        this['tear_down_cases_info'] = tearDownCasesInfo;
        return this;
    }
    public set tearDownCasesInfo(tearDownCasesInfo: Array<TaskAssignCaseVo>  | undefined) {
        this['tear_down_cases_info'] = tearDownCasesInfo;
    }
    public get tearDownCasesInfo(): Array<TaskAssignCaseVo> | undefined {
        return this['tear_down_cases_info'];
    }
}
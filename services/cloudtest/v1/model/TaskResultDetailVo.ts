import { TaskResultVo } from './TaskResultVo';


export class TaskResultDetailVo {
    public owner?: string;
    private 'case_result_statics'?: object;
    private 'task_result'?: TaskResultVo;
    private 'test_result_list'?: Array<TaskResultVo>;
    public constructor() { 
    }
    public withOwner(owner: string): TaskResultDetailVo {
        this['owner'] = owner;
        return this;
    }
    public withCaseResultStatics(caseResultStatics: object): TaskResultDetailVo {
        this['case_result_statics'] = caseResultStatics;
        return this;
    }
    public set caseResultStatics(caseResultStatics: object  | undefined) {
        this['case_result_statics'] = caseResultStatics;
    }
    public get caseResultStatics(): object | undefined {
        return this['case_result_statics'];
    }
    public withTaskResult(taskResult: TaskResultVo): TaskResultDetailVo {
        this['task_result'] = taskResult;
        return this;
    }
    public set taskResult(taskResult: TaskResultVo  | undefined) {
        this['task_result'] = taskResult;
    }
    public get taskResult(): TaskResultVo | undefined {
        return this['task_result'];
    }
    public withTestResultList(testResultList: Array<TaskResultVo>): TaskResultDetailVo {
        this['test_result_list'] = testResultList;
        return this;
    }
    public set testResultList(testResultList: Array<TaskResultVo>  | undefined) {
        this['test_result_list'] = testResultList;
    }
    public get testResultList(): Array<TaskResultVo> | undefined {
        return this['test_result_list'];
    }
}
import { TaskResultVo } from './TaskResultVo';
import { TestResultVo } from './TestResultVo';


export class ExecuteTaskVo {
    public flag?: boolean;
    public uri?: string;
    private 'task_result_vo'?: TaskResultVo;
    private 'update_case_uri_list'?: Array<string>;
    private 'test_case_result_list'?: Array<TestResultVo>;
    public constructor() { 
    }
    public withFlag(flag: boolean): ExecuteTaskVo {
        this['flag'] = flag;
        return this;
    }
    public withUri(uri: string): ExecuteTaskVo {
        this['uri'] = uri;
        return this;
    }
    public withTaskResultVo(taskResultVo: TaskResultVo): ExecuteTaskVo {
        this['task_result_vo'] = taskResultVo;
        return this;
    }
    public set taskResultVo(taskResultVo: TaskResultVo  | undefined) {
        this['task_result_vo'] = taskResultVo;
    }
    public get taskResultVo(): TaskResultVo | undefined {
        return this['task_result_vo'];
    }
    public withUpdateCaseUriList(updateCaseUriList: Array<string>): ExecuteTaskVo {
        this['update_case_uri_list'] = updateCaseUriList;
        return this;
    }
    public set updateCaseUriList(updateCaseUriList: Array<string>  | undefined) {
        this['update_case_uri_list'] = updateCaseUriList;
    }
    public get updateCaseUriList(): Array<string> | undefined {
        return this['update_case_uri_list'];
    }
    public withTestCaseResultList(testCaseResultList: Array<TestResultVo>): ExecuteTaskVo {
        this['test_case_result_list'] = testCaseResultList;
        return this;
    }
    public set testCaseResultList(testCaseResultList: Array<TestResultVo>  | undefined) {
        this['test_case_result_list'] = testCaseResultList;
    }
    public get testCaseResultList(): Array<TestResultVo> | undefined {
        return this['test_case_result_list'];
    }
}
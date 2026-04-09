import { AddTestCaseResultInfo } from './AddTestCaseResultInfo';


export class BatchAddTestCaseResultInTaskInfo {
    public result?: AddTestCaseResultInfo;
    private 'task_uri'?: string;
    private 'task_result_uri'?: string;
    private 'test_case_uris'?: Array<string>;
    public isAsyn?: boolean;
    public constructor() { 
    }
    public withResult(result: AddTestCaseResultInfo): BatchAddTestCaseResultInTaskInfo {
        this['result'] = result;
        return this;
    }
    public withTaskUri(taskUri: string): BatchAddTestCaseResultInTaskInfo {
        this['task_uri'] = taskUri;
        return this;
    }
    public set taskUri(taskUri: string  | undefined) {
        this['task_uri'] = taskUri;
    }
    public get taskUri(): string | undefined {
        return this['task_uri'];
    }
    public withTaskResultUri(taskResultUri: string): BatchAddTestCaseResultInTaskInfo {
        this['task_result_uri'] = taskResultUri;
        return this;
    }
    public set taskResultUri(taskResultUri: string  | undefined) {
        this['task_result_uri'] = taskResultUri;
    }
    public get taskResultUri(): string | undefined {
        return this['task_result_uri'];
    }
    public withTestCaseUris(testCaseUris: Array<string>): BatchAddTestCaseResultInTaskInfo {
        this['test_case_uris'] = testCaseUris;
        return this;
    }
    public set testCaseUris(testCaseUris: Array<string>  | undefined) {
        this['test_case_uris'] = testCaseUris;
    }
    public get testCaseUris(): Array<string> | undefined {
        return this['test_case_uris'];
    }
    public withIsAsyn(isAsyn: boolean): BatchAddTestCaseResultInTaskInfo {
        this['isAsyn'] = isAsyn;
        return this;
    }
}
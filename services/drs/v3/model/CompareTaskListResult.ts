import { CompareTaskList } from './CompareTaskList';


export class CompareTaskListResult {
    private 'compare_task_list'?: Array<CompareTaskList> | undefined;
    private 'compare_task_list_count'?: number | undefined;
    private 'error_msg'?: string | undefined;
    private 'error_code'?: string | undefined;
    public constructor() { 
    }
    public withCompareTaskList(compareTaskList: Array<CompareTaskList>): CompareTaskListResult {
        this['compare_task_list'] = compareTaskList;
        return this;
    }
    public set compareTaskList(compareTaskList: Array<CompareTaskList> | undefined) {
        this['compare_task_list'] = compareTaskList;
    }
    public get compareTaskList() {
        return this['compare_task_list'];
    }
    public withCompareTaskListCount(compareTaskListCount: number): CompareTaskListResult {
        this['compare_task_list_count'] = compareTaskListCount;
        return this;
    }
    public set compareTaskListCount(compareTaskListCount: number | undefined) {
        this['compare_task_list_count'] = compareTaskListCount;
    }
    public get compareTaskListCount() {
        return this['compare_task_list_count'];
    }
    public withErrorMsg(errorMsg: string): CompareTaskListResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): CompareTaskListResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
}
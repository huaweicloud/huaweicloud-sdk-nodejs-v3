

export class CreateCompareTaskResult {
    private 'compare_task_id'?: string;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withCompareTaskId(compareTaskId: string): CreateCompareTaskResult {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withErrorCode(errorCode: string): CreateCompareTaskResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateCompareTaskResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}


export class UpdateTestCaseListVo {
    public id?: string;
    public name?: string;
    private 'success_list'?: Array<string>;
    private 'failed_list'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): UpdateTestCaseListVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateTestCaseListVo {
        this['name'] = name;
        return this;
    }
    public withSuccessList(successList: Array<string>): UpdateTestCaseListVo {
        this['success_list'] = successList;
        return this;
    }
    public set successList(successList: Array<string>  | undefined) {
        this['success_list'] = successList;
    }
    public get successList(): Array<string> | undefined {
        return this['success_list'];
    }
    public withFailedList(failedList: Array<string>): UpdateTestCaseListVo {
        this['failed_list'] = failedList;
        return this;
    }
    public set failedList(failedList: Array<string>  | undefined) {
        this['failed_list'] = failedList;
    }
    public get failedList(): Array<string> | undefined {
        return this['failed_list'];
    }
}
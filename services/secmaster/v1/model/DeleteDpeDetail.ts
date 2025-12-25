

export class DeleteDpeDetail {
    private 'success_id_list'?: Array<string>;
    private 'error_id_list'?: Array<string>;
    public constructor() { 
    }
    public withSuccessIdList(successIdList: Array<string>): DeleteDpeDetail {
        this['success_id_list'] = successIdList;
        return this;
    }
    public set successIdList(successIdList: Array<string>  | undefined) {
        this['success_id_list'] = successIdList;
    }
    public get successIdList(): Array<string> | undefined {
        return this['success_id_list'];
    }
    public withErrorIdList(errorIdList: Array<string>): DeleteDpeDetail {
        this['error_id_list'] = errorIdList;
        return this;
    }
    public set errorIdList(errorIdList: Array<string>  | undefined) {
        this['error_id_list'] = errorIdList;
    }
    public get errorIdList(): Array<string> | undefined {
        return this['error_id_list'];
    }
}
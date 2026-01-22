import { BlackWhiteInfo } from './BlackWhiteInfo';


export class AddBlackWhiteListBatchVO {
    private 'duplicated_list'?: Array<BlackWhiteInfo>;
    private 'failed_list'?: Array<BlackWhiteInfo>;
    private 'success_list'?: Array<BlackWhiteInfo>;
    public constructor() { 
    }
    public withDuplicatedList(duplicatedList: Array<BlackWhiteInfo>): AddBlackWhiteListBatchVO {
        this['duplicated_list'] = duplicatedList;
        return this;
    }
    public set duplicatedList(duplicatedList: Array<BlackWhiteInfo>  | undefined) {
        this['duplicated_list'] = duplicatedList;
    }
    public get duplicatedList(): Array<BlackWhiteInfo> | undefined {
        return this['duplicated_list'];
    }
    public withFailedList(failedList: Array<BlackWhiteInfo>): AddBlackWhiteListBatchVO {
        this['failed_list'] = failedList;
        return this;
    }
    public set failedList(failedList: Array<BlackWhiteInfo>  | undefined) {
        this['failed_list'] = failedList;
    }
    public get failedList(): Array<BlackWhiteInfo> | undefined {
        return this['failed_list'];
    }
    public withSuccessList(successList: Array<BlackWhiteInfo>): AddBlackWhiteListBatchVO {
        this['success_list'] = successList;
        return this;
    }
    public set successList(successList: Array<BlackWhiteInfo>  | undefined) {
        this['success_list'] = successList;
    }
    public get successList(): Array<BlackWhiteInfo> | undefined {
        return this['success_list'];
    }
}
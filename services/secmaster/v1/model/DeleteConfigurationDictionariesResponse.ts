import { Dictionary } from './Dictionary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteConfigurationDictionariesResponse extends SdkResponse {
    private 'success_list'?: Array<Dictionary>;
    private 'failed_list'?: Array<Dictionary>;
    public constructor() { 
        super();
    }
    public withSuccessList(successList: Array<Dictionary>): DeleteConfigurationDictionariesResponse {
        this['success_list'] = successList;
        return this;
    }
    public set successList(successList: Array<Dictionary>  | undefined) {
        this['success_list'] = successList;
    }
    public get successList(): Array<Dictionary> | undefined {
        return this['success_list'];
    }
    public withFailedList(failedList: Array<Dictionary>): DeleteConfigurationDictionariesResponse {
        this['failed_list'] = failedList;
        return this;
    }
    public set failedList(failedList: Array<Dictionary>  | undefined) {
        this['failed_list'] = failedList;
    }
    public get failedList(): Array<Dictionary> | undefined {
        return this['failed_list'];
    }
}
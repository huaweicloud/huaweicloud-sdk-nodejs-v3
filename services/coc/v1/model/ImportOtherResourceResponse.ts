
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportOtherResourceResponse extends SdkResponse {
    public success?: number;
    public total?: number;
    private 'error_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccess(success: number): ImportOtherResourceResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ImportOtherResourceResponse {
        this['total'] = total;
        return this;
    }
    public withErrorList(errorList: Array<string>): ImportOtherResourceResponse {
        this['error_list'] = errorList;
        return this;
    }
    public set errorList(errorList: Array<string>  | undefined) {
        this['error_list'] = errorList;
    }
    public get errorList(): Array<string> | undefined {
        return this['error_list'];
    }
}
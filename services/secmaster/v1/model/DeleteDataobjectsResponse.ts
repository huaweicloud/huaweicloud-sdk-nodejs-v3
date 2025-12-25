
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDataobjectsResponse extends SdkResponse {
    private 'error_ids'?: Array<string>;
    private 'success_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withErrorIds(errorIds: Array<string>): DeleteDataobjectsResponse {
        this['error_ids'] = errorIds;
        return this;
    }
    public set errorIds(errorIds: Array<string>  | undefined) {
        this['error_ids'] = errorIds;
    }
    public get errorIds(): Array<string> | undefined {
        return this['error_ids'];
    }
    public withSuccessIds(successIds: Array<string>): DeleteDataobjectsResponse {
        this['success_ids'] = successIds;
        return this;
    }
    public set successIds(successIds: Array<string>  | undefined) {
        this['success_ids'] = successIds;
    }
    public get successIds(): Array<string> | undefined {
        return this['success_ids'];
    }
}
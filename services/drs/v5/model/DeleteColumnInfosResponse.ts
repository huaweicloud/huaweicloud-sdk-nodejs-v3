
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteColumnInfosResponse extends SdkResponse {
    private 'delete_result'?: boolean;
    public constructor() { 
        super();
    }
    public withDeleteResult(deleteResult: boolean): DeleteColumnInfosResponse {
        this['delete_result'] = deleteResult;
        return this;
    }
    public set deleteResult(deleteResult: boolean  | undefined) {
        this['delete_result'] = deleteResult;
    }
    public get deleteResult(): boolean | undefined {
        return this['delete_result'];
    }
}
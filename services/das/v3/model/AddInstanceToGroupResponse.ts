
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddInstanceToGroupResponse extends SdkResponse {
    public success?: boolean;
    private 'success_instance_ids'?: Array<string>;
    private 'failed_instance_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): AddInstanceToGroupResponse {
        this['success'] = success;
        return this;
    }
    public withSuccessInstanceIds(successInstanceIds: Array<string>): AddInstanceToGroupResponse {
        this['success_instance_ids'] = successInstanceIds;
        return this;
    }
    public set successInstanceIds(successInstanceIds: Array<string>  | undefined) {
        this['success_instance_ids'] = successInstanceIds;
    }
    public get successInstanceIds(): Array<string> | undefined {
        return this['success_instance_ids'];
    }
    public withFailedInstanceIds(failedInstanceIds: Array<string>): AddInstanceToGroupResponse {
        this['failed_instance_ids'] = failedInstanceIds;
        return this;
    }
    public set failedInstanceIds(failedInstanceIds: Array<string>  | undefined) {
        this['failed_instance_ids'] = failedInstanceIds;
    }
    public get failedInstanceIds(): Array<string> | undefined {
        return this['failed_instance_ids'];
    }
}
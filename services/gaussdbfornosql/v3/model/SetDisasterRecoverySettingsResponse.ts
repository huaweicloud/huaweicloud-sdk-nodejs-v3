
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetDisasterRecoverySettingsResponse extends SdkResponse {
    private 'successed_instance_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccessedInstanceIds(successedInstanceIds: Array<string>): SetDisasterRecoverySettingsResponse {
        this['successed_instance_ids'] = successedInstanceIds;
        return this;
    }
    public set successedInstanceIds(successedInstanceIds: Array<string>  | undefined) {
        this['successed_instance_ids'] = successedInstanceIds;
    }
    public get successedInstanceIds(): Array<string> | undefined {
        return this['successed_instance_ids'];
    }
}
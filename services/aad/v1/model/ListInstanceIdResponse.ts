
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceIdResponse extends SdkResponse {
    private 'instance_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withInstanceIds(instanceIds: Array<string>): ListInstanceIdResponse {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}
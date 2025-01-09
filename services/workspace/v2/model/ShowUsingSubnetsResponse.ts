
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUsingSubnetsResponse extends SdkResponse {
    private 'subnet_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSubnetIds(subnetIds: Array<string>): ShowUsingSubnetsResponse {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
}
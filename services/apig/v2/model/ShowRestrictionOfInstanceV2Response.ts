
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRestrictionOfInstanceV2Response extends SdkResponse {
    private 'restrict_cidrs'?: Array<string>;
    private 'resource_subnet_cidr'?: string;
    public constructor() { 
        super();
    }
    public withRestrictCidrs(restrictCidrs: Array<string>): ShowRestrictionOfInstanceV2Response {
        this['restrict_cidrs'] = restrictCidrs;
        return this;
    }
    public set restrictCidrs(restrictCidrs: Array<string>  | undefined) {
        this['restrict_cidrs'] = restrictCidrs;
    }
    public get restrictCidrs(): Array<string> | undefined {
        return this['restrict_cidrs'];
    }
    public withResourceSubnetCidr(resourceSubnetCidr: string): ShowRestrictionOfInstanceV2Response {
        this['resource_subnet_cidr'] = resourceSubnetCidr;
        return this;
    }
    public set resourceSubnetCidr(resourceSubnetCidr: string  | undefined) {
        this['resource_subnet_cidr'] = resourceSubnetCidr;
    }
    public get resourceSubnetCidr(): string | undefined {
        return this['resource_subnet_cidr'];
    }
}
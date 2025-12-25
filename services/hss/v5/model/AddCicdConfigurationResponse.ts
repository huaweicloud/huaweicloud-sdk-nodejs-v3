
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCicdConfigurationResponse extends SdkResponse {
    private 'cicd_id'?: string;
    public constructor() { 
        super();
    }
    public withCicdId(cicdId: string): AddCicdConfigurationResponse {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
}
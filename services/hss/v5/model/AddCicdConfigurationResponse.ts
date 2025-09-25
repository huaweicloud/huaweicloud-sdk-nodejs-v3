
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddCicdConfigurationResponse extends SdkResponse {
    private 'cicd_id'?: object;
    public constructor() { 
        super();
    }
    public withCicdId(cicdId: object): AddCicdConfigurationResponse {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: object  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): object | undefined {
        return this['cicd_id'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchInferDeploymentVersionResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): SwitchInferDeploymentVersionResponse {
        this['id'] = id;
        return this;
    }
}
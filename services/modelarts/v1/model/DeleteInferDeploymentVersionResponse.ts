
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInferDeploymentVersionResponse extends SdkResponse {
    public id?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteInferDeploymentVersionResponse {
        this['id'] = id;
        return this;
    }
}
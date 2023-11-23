
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFunctionAppResponse extends SdkResponse {
    private 'application_id'?: string;
    public constructor() { 
        super();
    }
    public withApplicationId(applicationId: string): CreateFunctionAppResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
}
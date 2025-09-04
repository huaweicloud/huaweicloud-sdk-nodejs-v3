
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateModuleShadowResponse extends SdkResponse {
    public properties?: object;
    private 'properties_update_time'?: object;
    public constructor() { 
        super();
    }
    public withProperties(properties: object): UpdateModuleShadowResponse {
        this['properties'] = properties;
        return this;
    }
    public withPropertiesUpdateTime(propertiesUpdateTime: object): UpdateModuleShadowResponse {
        this['properties_update_time'] = propertiesUpdateTime;
        return this;
    }
    public set propertiesUpdateTime(propertiesUpdateTime: object  | undefined) {
        this['properties_update_time'] = propertiesUpdateTime;
    }
    public get propertiesUpdateTime(): object | undefined {
        return this['properties_update_time'];
    }
}
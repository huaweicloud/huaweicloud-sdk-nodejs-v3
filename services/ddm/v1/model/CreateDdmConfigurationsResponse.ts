
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDdmConfigurationsResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateDdmConfigurationsResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateDdmConfigurationsResponse {
        this['name'] = name;
        return this;
    }
}
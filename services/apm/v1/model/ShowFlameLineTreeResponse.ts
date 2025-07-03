
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlameLineTreeResponse extends SdkResponse {
    public data?: Array<string>;
    public methods?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): ShowFlameLineTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMethods(methods: Array<string>): ShowFlameLineTreeResponse {
        this['methods'] = methods;
        return this;
    }
}
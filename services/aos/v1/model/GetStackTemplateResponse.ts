
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetStackTemplateResponse extends SdkResponse {
    private 'Location'?: string | undefined;
    public constructor() { 
        super();
    }
    public withLocation(location: string): GetStackTemplateResponse {
        this['Location'] = location;
        return this;
    }
    public set location(location: string | undefined) {
        this['Location'] = location;
    }
    public get location() {
        return this['Location'];
    }
}
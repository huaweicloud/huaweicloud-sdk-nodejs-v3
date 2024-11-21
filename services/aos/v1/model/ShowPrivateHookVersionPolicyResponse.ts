
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateHookVersionPolicyResponse extends SdkResponse {
    private 'Location'?: string;
    public constructor() { 
        super();
    }
    public withLocation(location: string): ShowPrivateHookVersionPolicyResponse {
        this['Location'] = location;
        return this;
    }
    public set location(location: string  | undefined) {
        this['Location'] = location;
    }
    public get location(): string | undefined {
        return this['Location'];
    }
}
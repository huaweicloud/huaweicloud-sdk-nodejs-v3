
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceConfigurationResponse extends SdkResponse {
    private 'anonymous_access'?: boolean;
    public constructor() { 
        super();
    }
    public withAnonymousAccess(anonymousAccess: boolean): ShowInstanceConfigurationResponse {
        this['anonymous_access'] = anonymousAccess;
        return this;
    }
    public set anonymousAccess(anonymousAccess: boolean  | undefined) {
        this['anonymous_access'] = anonymousAccess;
    }
    public get anonymousAccess(): boolean | undefined {
        return this['anonymous_access'];
    }
}
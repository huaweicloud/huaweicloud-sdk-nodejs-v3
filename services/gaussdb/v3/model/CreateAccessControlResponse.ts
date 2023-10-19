
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAccessControlResponse extends SdkResponse {
    private 'open_access_control'?: boolean;
    public constructor() { 
        super();
    }
    public withOpenAccessControl(openAccessControl: boolean): CreateAccessControlResponse {
        this['open_access_control'] = openAccessControl;
        return this;
    }
    public set openAccessControl(openAccessControl: boolean  | undefined) {
        this['open_access_control'] = openAccessControl;
    }
    public get openAccessControl(): boolean | undefined {
        return this['open_access_control'];
    }
}
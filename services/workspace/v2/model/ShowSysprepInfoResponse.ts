
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSysprepInfoResponse extends SdkResponse {
    private 'sysprep_version'?: string;
    private 'support_create_image'?: boolean;
    public constructor() { 
        super();
    }
    public withSysprepVersion(sysprepVersion: string): ShowSysprepInfoResponse {
        this['sysprep_version'] = sysprepVersion;
        return this;
    }
    public set sysprepVersion(sysprepVersion: string  | undefined) {
        this['sysprep_version'] = sysprepVersion;
    }
    public get sysprepVersion(): string | undefined {
        return this['sysprep_version'];
    }
    public withSupportCreateImage(supportCreateImage: boolean): ShowSysprepInfoResponse {
        this['support_create_image'] = supportCreateImage;
        return this;
    }
    public set supportCreateImage(supportCreateImage: boolean  | undefined) {
        this['support_create_image'] = supportCreateImage;
    }
    public get supportCreateImage(): boolean | undefined {
        return this['support_create_image'];
    }
}
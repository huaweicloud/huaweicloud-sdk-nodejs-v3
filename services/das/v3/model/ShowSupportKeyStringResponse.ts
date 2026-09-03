
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupportKeyStringResponse extends SdkResponse {
    private 'support_key_str'?: boolean;
    private 'instance_type'?: string;
    private 'instance_detail_version'?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withSupportKeyStr(supportKeyStr: boolean): ShowSupportKeyStringResponse {
        this['support_key_str'] = supportKeyStr;
        return this;
    }
    public set supportKeyStr(supportKeyStr: boolean  | undefined) {
        this['support_key_str'] = supportKeyStr;
    }
    public get supportKeyStr(): boolean | undefined {
        return this['support_key_str'];
    }
    public withInstanceType(instanceType: string): ShowSupportKeyStringResponse {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceDetailVersion(instanceDetailVersion: string): ShowSupportKeyStringResponse {
        this['instance_detail_version'] = instanceDetailVersion;
        return this;
    }
    public set instanceDetailVersion(instanceDetailVersion: string  | undefined) {
        this['instance_detail_version'] = instanceDetailVersion;
    }
    public get instanceDetailVersion(): string | undefined {
        return this['instance_detail_version'];
    }
    public withErrorMsg(errorMsg: string): ShowSupportKeyStringResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}
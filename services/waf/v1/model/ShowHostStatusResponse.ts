
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHostStatusResponse extends SdkResponse {
    public name?: string;
    public status?: string;
    private 'waf_instance_id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowHostStatusResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowHostStatusResponse {
        this['status'] = status;
        return this;
    }
    public withWafInstanceId(wafInstanceId: string): ShowHostStatusResponse {
        this['waf_instance_id'] = wafInstanceId;
        return this;
    }
    public set wafInstanceId(wafInstanceId: string  | undefined) {
        this['waf_instance_id'] = wafInstanceId;
    }
    public get wafInstanceId(): string | undefined {
        return this['waf_instance_id'];
    }
}
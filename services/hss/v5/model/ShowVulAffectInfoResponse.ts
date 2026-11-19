
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulAffectInfoResponse extends SdkResponse {
    private 'affect_host_ids'?: Array<string>;
    private 'affect_vul_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAffectHostIds(affectHostIds: Array<string>): ShowVulAffectInfoResponse {
        this['affect_host_ids'] = affectHostIds;
        return this;
    }
    public set affectHostIds(affectHostIds: Array<string>  | undefined) {
        this['affect_host_ids'] = affectHostIds;
    }
    public get affectHostIds(): Array<string> | undefined {
        return this['affect_host_ids'];
    }
    public withAffectVulIds(affectVulIds: Array<string>): ShowVulAffectInfoResponse {
        this['affect_vul_ids'] = affectVulIds;
        return this;
    }
    public set affectVulIds(affectVulIds: Array<string>  | undefined) {
        this['affect_vul_ids'] = affectVulIds;
    }
    public get affectVulIds(): Array<string> | undefined {
        return this['affect_vul_ids'];
    }
}
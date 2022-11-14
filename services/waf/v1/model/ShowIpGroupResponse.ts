import { RuleInfo } from './RuleInfo';
import { ShareInfo } from './ShareInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ips?: string;
    public size?: number;
    public rules?: Array<RuleInfo>;
    private 'share_info'?: ShareInfo | undefined;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowIpGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowIpGroupResponse {
        this['name'] = name;
        return this;
    }
    public withIps(ips: string): ShowIpGroupResponse {
        this['ips'] = ips;
        return this;
    }
    public withSize(size: number): ShowIpGroupResponse {
        this['size'] = size;
        return this;
    }
    public withRules(rules: Array<RuleInfo>): ShowIpGroupResponse {
        this['rules'] = rules;
        return this;
    }
    public withShareInfo(shareInfo: ShareInfo): ShowIpGroupResponse {
        this['share_info'] = shareInfo;
        return this;
    }
    public set shareInfo(shareInfo: ShareInfo | undefined) {
        this['share_info'] = shareInfo;
    }
    public get shareInfo() {
        return this['share_info'];
    }
    public withDescription(description: string): ShowIpGroupResponse {
        this['description'] = description;
        return this;
    }
}
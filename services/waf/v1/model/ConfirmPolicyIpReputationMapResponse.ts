import { IpReputationMapResponseBodyIpReputationMap } from './IpReputationMapResponseBodyIpReputationMap';
import { IpReputationMapResponseBodyLocale } from './IpReputationMapResponseBodyLocale';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmPolicyIpReputationMapResponse extends SdkResponse {
    private 'ip_reputation_map'?: IpReputationMapResponseBodyIpReputationMap;
    public locale?: IpReputationMapResponseBodyLocale;
    public constructor() { 
        super();
    }
    public withIpReputationMap(ipReputationMap: IpReputationMapResponseBodyIpReputationMap): ConfirmPolicyIpReputationMapResponse {
        this['ip_reputation_map'] = ipReputationMap;
        return this;
    }
    public set ipReputationMap(ipReputationMap: IpReputationMapResponseBodyIpReputationMap  | undefined) {
        this['ip_reputation_map'] = ipReputationMap;
    }
    public get ipReputationMap(): IpReputationMapResponseBodyIpReputationMap | undefined {
        return this['ip_reputation_map'];
    }
    public withLocale(locale: IpReputationMapResponseBodyLocale): ConfirmPolicyIpReputationMapResponse {
        this['locale'] = locale;
        return this;
    }
}
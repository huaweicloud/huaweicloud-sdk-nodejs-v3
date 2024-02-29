import { HttpFirewallInstanceListResponseData } from './HttpFirewallInstanceListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallListResponse extends SdkResponse {
    private 'user_support_eps'?: boolean;
    private 'has_ndr'?: boolean;
    private 'is_support_postpaid'?: boolean;
    private 'is_support_basic_version'?: boolean;
    private 'is_support_buy_professional'?: boolean;
    public data?: HttpFirewallInstanceListResponseData;
    public constructor() { 
        super();
    }
    public withUserSupportEps(userSupportEps: boolean): ListFirewallListResponse {
        this['user_support_eps'] = userSupportEps;
        return this;
    }
    public set userSupportEps(userSupportEps: boolean  | undefined) {
        this['user_support_eps'] = userSupportEps;
    }
    public get userSupportEps(): boolean | undefined {
        return this['user_support_eps'];
    }
    public withHasNdr(hasNdr: boolean): ListFirewallListResponse {
        this['has_ndr'] = hasNdr;
        return this;
    }
    public set hasNdr(hasNdr: boolean  | undefined) {
        this['has_ndr'] = hasNdr;
    }
    public get hasNdr(): boolean | undefined {
        return this['has_ndr'];
    }
    public withIsSupportPostpaid(isSupportPostpaid: boolean): ListFirewallListResponse {
        this['is_support_postpaid'] = isSupportPostpaid;
        return this;
    }
    public set isSupportPostpaid(isSupportPostpaid: boolean  | undefined) {
        this['is_support_postpaid'] = isSupportPostpaid;
    }
    public get isSupportPostpaid(): boolean | undefined {
        return this['is_support_postpaid'];
    }
    public withIsSupportBasicVersion(isSupportBasicVersion: boolean): ListFirewallListResponse {
        this['is_support_basic_version'] = isSupportBasicVersion;
        return this;
    }
    public set isSupportBasicVersion(isSupportBasicVersion: boolean  | undefined) {
        this['is_support_basic_version'] = isSupportBasicVersion;
    }
    public get isSupportBasicVersion(): boolean | undefined {
        return this['is_support_basic_version'];
    }
    public withIsSupportBuyProfessional(isSupportBuyProfessional: boolean): ListFirewallListResponse {
        this['is_support_buy_professional'] = isSupportBuyProfessional;
        return this;
    }
    public set isSupportBuyProfessional(isSupportBuyProfessional: boolean  | undefined) {
        this['is_support_buy_professional'] = isSupportBuyProfessional;
    }
    public get isSupportBuyProfessional(): boolean | undefined {
        return this['is_support_buy_professional'];
    }
    public withData(data: HttpFirewallInstanceListResponseData): ListFirewallListResponse {
        this['data'] = data;
        return this;
    }
}
import { ExpackProductInfo } from './ExpackProductInfo';
import { WafProductInfo } from './WafProductInfo';


export class CreatePrepaidCloudWafRequestBody {
    private 'project_id'?: string;
    private 'is_auto_pay'?: boolean;
    private 'is_auto_renew'?: boolean;
    private 'region_id'?: string;
    private 'waf_product_info'?: WafProductInfo;
    private 'domain_expack_product_info'?: ExpackProductInfo;
    private 'bandwidth_expack_product_info'?: ExpackProductInfo;
    private 'rule_expack_product_info'?: ExpackProductInfo;
    public constructor(projectId?: string, isAutoPay?: boolean, isAutoRenew?: boolean, regionId?: string) { 
        this['project_id'] = projectId;
        this['is_auto_pay'] = isAutoPay;
        this['is_auto_renew'] = isAutoRenew;
        this['region_id'] = regionId;
    }
    public withProjectId(projectId: string): CreatePrepaidCloudWafRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): CreatePrepaidCloudWafRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): CreatePrepaidCloudWafRequestBody {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): boolean | undefined {
        return this['is_auto_renew'];
    }
    public withRegionId(regionId: string): CreatePrepaidCloudWafRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withWafProductInfo(wafProductInfo: WafProductInfo): CreatePrepaidCloudWafRequestBody {
        this['waf_product_info'] = wafProductInfo;
        return this;
    }
    public set wafProductInfo(wafProductInfo: WafProductInfo  | undefined) {
        this['waf_product_info'] = wafProductInfo;
    }
    public get wafProductInfo(): WafProductInfo | undefined {
        return this['waf_product_info'];
    }
    public withDomainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['domain_expack_product_info'] = domainExpackProductInfo;
        return this;
    }
    public set domainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo  | undefined) {
        this['domain_expack_product_info'] = domainExpackProductInfo;
    }
    public get domainExpackProductInfo(): ExpackProductInfo | undefined {
        return this['domain_expack_product_info'];
    }
    public withBandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
        return this;
    }
    public set bandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo  | undefined) {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
    }
    public get bandwidthExpackProductInfo(): ExpackProductInfo | undefined {
        return this['bandwidth_expack_product_info'];
    }
    public withRuleExpackProductInfo(ruleExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['rule_expack_product_info'] = ruleExpackProductInfo;
        return this;
    }
    public set ruleExpackProductInfo(ruleExpackProductInfo: ExpackProductInfo  | undefined) {
        this['rule_expack_product_info'] = ruleExpackProductInfo;
    }
    public get ruleExpackProductInfo(): ExpackProductInfo | undefined {
        return this['rule_expack_product_info'];
    }
}
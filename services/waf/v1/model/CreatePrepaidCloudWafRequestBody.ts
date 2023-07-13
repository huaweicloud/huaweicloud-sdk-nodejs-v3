import { ExpackProductInfo } from './ExpackProductInfo';
import { WafProductInfo } from './WafProductInfo';


export class CreatePrepaidCloudWafRequestBody {
    private 'project_id': string | undefined;
    private 'is_auto_pay': boolean | undefined;
    private 'is_auto_renew': boolean | undefined;
    private 'region_id': string | undefined;
    private 'waf_product_info'?: WafProductInfo | undefined;
    private 'domain_expack_product_info'?: ExpackProductInfo | undefined;
    private 'bandwidth_expack_product_info'?: ExpackProductInfo | undefined;
    private 'rule_expack_product_info'?: ExpackProductInfo | undefined;
    public constructor(projectId?: any, isAutoPay?: any, isAutoRenew?: any, regionId?: any) { 
        this['project_id'] = projectId;
        this['is_auto_pay'] = isAutoPay;
        this['is_auto_renew'] = isAutoRenew;
        this['region_id'] = regionId;
    }
    public withProjectId(projectId: string): CreatePrepaidCloudWafRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): CreatePrepaidCloudWafRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
    public withIsAutoRenew(isAutoRenew: boolean): CreatePrepaidCloudWafRequestBody {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: boolean | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew() {
        return this['is_auto_renew'];
    }
    public withRegionId(regionId: string): CreatePrepaidCloudWafRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withWafProductInfo(wafProductInfo: WafProductInfo): CreatePrepaidCloudWafRequestBody {
        this['waf_product_info'] = wafProductInfo;
        return this;
    }
    public set wafProductInfo(wafProductInfo: WafProductInfo | undefined) {
        this['waf_product_info'] = wafProductInfo;
    }
    public get wafProductInfo() {
        return this['waf_product_info'];
    }
    public withDomainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['domain_expack_product_info'] = domainExpackProductInfo;
        return this;
    }
    public set domainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo | undefined) {
        this['domain_expack_product_info'] = domainExpackProductInfo;
    }
    public get domainExpackProductInfo() {
        return this['domain_expack_product_info'];
    }
    public withBandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
        return this;
    }
    public set bandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo | undefined) {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
    }
    public get bandwidthExpackProductInfo() {
        return this['bandwidth_expack_product_info'];
    }
    public withRuleExpackProductInfo(ruleExpackProductInfo: ExpackProductInfo): CreatePrepaidCloudWafRequestBody {
        this['rule_expack_product_info'] = ruleExpackProductInfo;
        return this;
    }
    public set ruleExpackProductInfo(ruleExpackProductInfo: ExpackProductInfo | undefined) {
        this['rule_expack_product_info'] = ruleExpackProductInfo;
    }
    public get ruleExpackProductInfo() {
        return this['rule_expack_product_info'];
    }
}
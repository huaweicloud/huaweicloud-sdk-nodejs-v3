import { AlterWafProductInfo } from './AlterWafProductInfo';
import { ExpackProductInfo } from './ExpackProductInfo';


export class ChangePrepaidCloudWafRequestBody {
    private 'project_id': string | undefined;
    private 'is_auto_pay': boolean | undefined;
    private 'waf_product_info'?: AlterWafProductInfo | undefined;
    private 'domain_expack_product_info'?: ExpackProductInfo | undefined;
    private 'bandwidth_expack_product_info'?: ExpackProductInfo | undefined;
    private 'rule_expack_product_info'?: ExpackProductInfo | undefined;
    public constructor(projectId?: any, isAutoPay?: any) { 
        this['project_id'] = projectId;
        this['is_auto_pay'] = isAutoPay;
    }
    public withProjectId(projectId: string): ChangePrepaidCloudWafRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withIsAutoPay(isAutoPay: boolean): ChangePrepaidCloudWafRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay() {
        return this['is_auto_pay'];
    }
    public withWafProductInfo(wafProductInfo: AlterWafProductInfo): ChangePrepaidCloudWafRequestBody {
        this['waf_product_info'] = wafProductInfo;
        return this;
    }
    public set wafProductInfo(wafProductInfo: AlterWafProductInfo | undefined) {
        this['waf_product_info'] = wafProductInfo;
    }
    public get wafProductInfo() {
        return this['waf_product_info'];
    }
    public withDomainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo): ChangePrepaidCloudWafRequestBody {
        this['domain_expack_product_info'] = domainExpackProductInfo;
        return this;
    }
    public set domainExpackProductInfo(domainExpackProductInfo: ExpackProductInfo | undefined) {
        this['domain_expack_product_info'] = domainExpackProductInfo;
    }
    public get domainExpackProductInfo() {
        return this['domain_expack_product_info'];
    }
    public withBandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo): ChangePrepaidCloudWafRequestBody {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
        return this;
    }
    public set bandwidthExpackProductInfo(bandwidthExpackProductInfo: ExpackProductInfo | undefined) {
        this['bandwidth_expack_product_info'] = bandwidthExpackProductInfo;
    }
    public get bandwidthExpackProductInfo() {
        return this['bandwidth_expack_product_info'];
    }
    public withRuleExpackProductInfo(ruleExpackProductInfo: ExpackProductInfo): ChangePrepaidCloudWafRequestBody {
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
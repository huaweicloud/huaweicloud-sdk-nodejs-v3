

export class TagResourceResourceDetail {
    private 'cert_id'?: string;
    private 'cert_name'?: string;
    public domain?: string;
    private 'cert_type'?: string;
    private 'cert_brand'?: string;
    private 'domain_type'?: string;
    private 'purchase_period'?: number;
    private 'expired_time'?: string;
    private 'order_status'?: string;
    private 'domain_num'?: number;
    private 'wildcard_number'?: number;
    public sans?: string;
    private 'cert_des'?: string;
    private 'signature_algorithm'?: string;
    private 'fail_reason'?: string;
    private 'partner_order_id'?: string;
    private 'push_support'?: boolean;
    private 'cert_issued_time'?: string;
    private 'resource_id'?: string;
    private 'unsubscribe_support'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'origin_cert_id'?: string;
    private 'renewal_cert_id'?: string;
    private 'auto_renew_status'?: number;
    private 'remain_cert_number'?: number;
    private 'auto_deploy_support'?: boolean;
    public constructor() { 
    }
    public withCertId(certId: string): TagResourceResourceDetail {
        this['cert_id'] = certId;
        return this;
    }
    public set certId(certId: string  | undefined) {
        this['cert_id'] = certId;
    }
    public get certId(): string | undefined {
        return this['cert_id'];
    }
    public withCertName(certName: string): TagResourceResourceDetail {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
    public withDomain(domain: string): TagResourceResourceDetail {
        this['domain'] = domain;
        return this;
    }
    public withCertType(certType: string): TagResourceResourceDetail {
        this['cert_type'] = certType;
        return this;
    }
    public set certType(certType: string  | undefined) {
        this['cert_type'] = certType;
    }
    public get certType(): string | undefined {
        return this['cert_type'];
    }
    public withCertBrand(certBrand: string): TagResourceResourceDetail {
        this['cert_brand'] = certBrand;
        return this;
    }
    public set certBrand(certBrand: string  | undefined) {
        this['cert_brand'] = certBrand;
    }
    public get certBrand(): string | undefined {
        return this['cert_brand'];
    }
    public withDomainType(domainType: string): TagResourceResourceDetail {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): string | undefined {
        return this['domain_type'];
    }
    public withPurchasePeriod(purchasePeriod: number): TagResourceResourceDetail {
        this['purchase_period'] = purchasePeriod;
        return this;
    }
    public set purchasePeriod(purchasePeriod: number  | undefined) {
        this['purchase_period'] = purchasePeriod;
    }
    public get purchasePeriod(): number | undefined {
        return this['purchase_period'];
    }
    public withExpiredTime(expiredTime: string): TagResourceResourceDetail {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: string  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): string | undefined {
        return this['expired_time'];
    }
    public withOrderStatus(orderStatus: string): TagResourceResourceDetail {
        this['order_status'] = orderStatus;
        return this;
    }
    public set orderStatus(orderStatus: string  | undefined) {
        this['order_status'] = orderStatus;
    }
    public get orderStatus(): string | undefined {
        return this['order_status'];
    }
    public withDomainNum(domainNum: number): TagResourceResourceDetail {
        this['domain_num'] = domainNum;
        return this;
    }
    public set domainNum(domainNum: number  | undefined) {
        this['domain_num'] = domainNum;
    }
    public get domainNum(): number | undefined {
        return this['domain_num'];
    }
    public withWildcardNumber(wildcardNumber: number): TagResourceResourceDetail {
        this['wildcard_number'] = wildcardNumber;
        return this;
    }
    public set wildcardNumber(wildcardNumber: number  | undefined) {
        this['wildcard_number'] = wildcardNumber;
    }
    public get wildcardNumber(): number | undefined {
        return this['wildcard_number'];
    }
    public withSans(sans: string): TagResourceResourceDetail {
        this['sans'] = sans;
        return this;
    }
    public withCertDes(certDes: string): TagResourceResourceDetail {
        this['cert_des'] = certDes;
        return this;
    }
    public set certDes(certDes: string  | undefined) {
        this['cert_des'] = certDes;
    }
    public get certDes(): string | undefined {
        return this['cert_des'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): TagResourceResourceDetail {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withFailReason(failReason: string): TagResourceResourceDetail {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withPartnerOrderId(partnerOrderId: string): TagResourceResourceDetail {
        this['partner_order_id'] = partnerOrderId;
        return this;
    }
    public set partnerOrderId(partnerOrderId: string  | undefined) {
        this['partner_order_id'] = partnerOrderId;
    }
    public get partnerOrderId(): string | undefined {
        return this['partner_order_id'];
    }
    public withPushSupport(pushSupport: boolean): TagResourceResourceDetail {
        this['push_support'] = pushSupport;
        return this;
    }
    public set pushSupport(pushSupport: boolean  | undefined) {
        this['push_support'] = pushSupport;
    }
    public get pushSupport(): boolean | undefined {
        return this['push_support'];
    }
    public withCertIssuedTime(certIssuedTime: string): TagResourceResourceDetail {
        this['cert_issued_time'] = certIssuedTime;
        return this;
    }
    public set certIssuedTime(certIssuedTime: string  | undefined) {
        this['cert_issued_time'] = certIssuedTime;
    }
    public get certIssuedTime(): string | undefined {
        return this['cert_issued_time'];
    }
    public withResourceId(resourceId: string): TagResourceResourceDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withUnsubscribeSupport(unsubscribeSupport: boolean): TagResourceResourceDetail {
        this['unsubscribe_support'] = unsubscribeSupport;
        return this;
    }
    public set unsubscribeSupport(unsubscribeSupport: boolean  | undefined) {
        this['unsubscribe_support'] = unsubscribeSupport;
    }
    public get unsubscribeSupport(): boolean | undefined {
        return this['unsubscribe_support'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): TagResourceResourceDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOriginCertId(originCertId: string): TagResourceResourceDetail {
        this['origin_cert_id'] = originCertId;
        return this;
    }
    public set originCertId(originCertId: string  | undefined) {
        this['origin_cert_id'] = originCertId;
    }
    public get originCertId(): string | undefined {
        return this['origin_cert_id'];
    }
    public withRenewalCertId(renewalCertId: string): TagResourceResourceDetail {
        this['renewal_cert_id'] = renewalCertId;
        return this;
    }
    public set renewalCertId(renewalCertId: string  | undefined) {
        this['renewal_cert_id'] = renewalCertId;
    }
    public get renewalCertId(): string | undefined {
        return this['renewal_cert_id'];
    }
    public withAutoRenewStatus(autoRenewStatus: number): TagResourceResourceDetail {
        this['auto_renew_status'] = autoRenewStatus;
        return this;
    }
    public set autoRenewStatus(autoRenewStatus: number  | undefined) {
        this['auto_renew_status'] = autoRenewStatus;
    }
    public get autoRenewStatus(): number | undefined {
        return this['auto_renew_status'];
    }
    public withRemainCertNumber(remainCertNumber: number): TagResourceResourceDetail {
        this['remain_cert_number'] = remainCertNumber;
        return this;
    }
    public set remainCertNumber(remainCertNumber: number  | undefined) {
        this['remain_cert_number'] = remainCertNumber;
    }
    public get remainCertNumber(): number | undefined {
        return this['remain_cert_number'];
    }
    public withAutoDeploySupport(autoDeploySupport: boolean): TagResourceResourceDetail {
        this['auto_deploy_support'] = autoDeploySupport;
        return this;
    }
    public set autoDeploySupport(autoDeploySupport: boolean  | undefined) {
        this['auto_deploy_support'] = autoDeploySupport;
    }
    public get autoDeploySupport(): boolean | undefined {
        return this['auto_deploy_support'];
    }
}
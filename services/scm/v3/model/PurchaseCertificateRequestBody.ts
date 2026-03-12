import { ScsResourceTag } from './ScsResourceTag';


export class PurchaseCertificateRequestBody {
    private 'cert_brand'?: string;
    private 'cert_type'?: string;
    private 'domain_type'?: string;
    private 'effective_time'?: number;
    private 'domain_numbers'?: number;
    private 'order_number'?: number;
    private 'agree_privacy_protection'?: boolean;
    private 'primary_domain_type'?: string;
    private 'single_domain_number'?: number;
    private 'wildcard_domain_number'?: number;
    private 'is_auto_pay'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'order_id'?: string;
    public tags?: Array<ScsResourceTag>;
    public constructor(certBrand?: string, certType?: string, domainType?: string, effectiveTime?: number, domainNumbers?: number, orderNumber?: number, agreePrivacyProtection?: boolean) { 
        this['cert_brand'] = certBrand;
        this['cert_type'] = certType;
        this['domain_type'] = domainType;
        this['effective_time'] = effectiveTime;
        this['domain_numbers'] = domainNumbers;
        this['order_number'] = orderNumber;
        this['agree_privacy_protection'] = agreePrivacyProtection;
    }
    public withCertBrand(certBrand: string): PurchaseCertificateRequestBody {
        this['cert_brand'] = certBrand;
        return this;
    }
    public set certBrand(certBrand: string  | undefined) {
        this['cert_brand'] = certBrand;
    }
    public get certBrand(): string | undefined {
        return this['cert_brand'];
    }
    public withCertType(certType: string): PurchaseCertificateRequestBody {
        this['cert_type'] = certType;
        return this;
    }
    public set certType(certType: string  | undefined) {
        this['cert_type'] = certType;
    }
    public get certType(): string | undefined {
        return this['cert_type'];
    }
    public withDomainType(domainType: string): PurchaseCertificateRequestBody {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): string | undefined {
        return this['domain_type'];
    }
    public withEffectiveTime(effectiveTime: number): PurchaseCertificateRequestBody {
        this['effective_time'] = effectiveTime;
        return this;
    }
    public set effectiveTime(effectiveTime: number  | undefined) {
        this['effective_time'] = effectiveTime;
    }
    public get effectiveTime(): number | undefined {
        return this['effective_time'];
    }
    public withDomainNumbers(domainNumbers: number): PurchaseCertificateRequestBody {
        this['domain_numbers'] = domainNumbers;
        return this;
    }
    public set domainNumbers(domainNumbers: number  | undefined) {
        this['domain_numbers'] = domainNumbers;
    }
    public get domainNumbers(): number | undefined {
        return this['domain_numbers'];
    }
    public withOrderNumber(orderNumber: number): PurchaseCertificateRequestBody {
        this['order_number'] = orderNumber;
        return this;
    }
    public set orderNumber(orderNumber: number  | undefined) {
        this['order_number'] = orderNumber;
    }
    public get orderNumber(): number | undefined {
        return this['order_number'];
    }
    public withAgreePrivacyProtection(agreePrivacyProtection: boolean): PurchaseCertificateRequestBody {
        this['agree_privacy_protection'] = agreePrivacyProtection;
        return this;
    }
    public set agreePrivacyProtection(agreePrivacyProtection: boolean  | undefined) {
        this['agree_privacy_protection'] = agreePrivacyProtection;
    }
    public get agreePrivacyProtection(): boolean | undefined {
        return this['agree_privacy_protection'];
    }
    public withPrimaryDomainType(primaryDomainType: string): PurchaseCertificateRequestBody {
        this['primary_domain_type'] = primaryDomainType;
        return this;
    }
    public set primaryDomainType(primaryDomainType: string  | undefined) {
        this['primary_domain_type'] = primaryDomainType;
    }
    public get primaryDomainType(): string | undefined {
        return this['primary_domain_type'];
    }
    public withSingleDomainNumber(singleDomainNumber: number): PurchaseCertificateRequestBody {
        this['single_domain_number'] = singleDomainNumber;
        return this;
    }
    public set singleDomainNumber(singleDomainNumber: number  | undefined) {
        this['single_domain_number'] = singleDomainNumber;
    }
    public get singleDomainNumber(): number | undefined {
        return this['single_domain_number'];
    }
    public withWildcardDomainNumber(wildcardDomainNumber: number): PurchaseCertificateRequestBody {
        this['wildcard_domain_number'] = wildcardDomainNumber;
        return this;
    }
    public set wildcardDomainNumber(wildcardDomainNumber: number  | undefined) {
        this['wildcard_domain_number'] = wildcardDomainNumber;
    }
    public get wildcardDomainNumber(): number | undefined {
        return this['wildcard_domain_number'];
    }
    public withIsAutoPay(isAutoPay: boolean): PurchaseCertificateRequestBody {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: boolean  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): boolean | undefined {
        return this['is_auto_pay'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PurchaseCertificateRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOrderId(orderId: string): PurchaseCertificateRequestBody {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTags(tags: Array<ScsResourceTag>): PurchaseCertificateRequestBody {
        this['tags'] = tags;
        return this;
    }
}
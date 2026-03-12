import { Authentification } from './Authentification';
import { ShowCertificateResponseBodyApplicationInfo } from './ShowCertificateResponseBodyApplicationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCertificateResponse extends SdkResponse {
    public id?: string;
    public status?: string;
    private 'order_id'?: string;
    public name?: string;
    public type?: string;
    public brand?: string;
    private 'push_support'?: string;
    private 'revoke_reason'?: string;
    private 'signature_algorithm'?: string;
    private 'issue_time'?: string;
    private 'not_before'?: string;
    private 'not_after'?: string;
    private 'validity_period'?: number;
    private 'validation_method'?: string;
    private 'domain_type'?: string;
    private 'multi_domain_type'?: string;
    public domain?: string;
    public sans?: string;
    private 'domain_count'?: number;
    private 'wildcard_count'?: number;
    public fingerprint?: string;
    public shared?: boolean;
    private 'application_info'?: ShowCertificateResponseBodyApplicationInfo;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public authentification?: Array<Authentification>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCertificateResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ShowCertificateResponse {
        this['status'] = status;
        return this;
    }
    public withOrderId(orderId: string): ShowCertificateResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withName(name: string): ShowCertificateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowCertificateResponse {
        this['type'] = type;
        return this;
    }
    public withBrand(brand: string): ShowCertificateResponse {
        this['brand'] = brand;
        return this;
    }
    public withPushSupport(pushSupport: string): ShowCertificateResponse {
        this['push_support'] = pushSupport;
        return this;
    }
    public set pushSupport(pushSupport: string  | undefined) {
        this['push_support'] = pushSupport;
    }
    public get pushSupport(): string | undefined {
        return this['push_support'];
    }
    public withRevokeReason(revokeReason: string): ShowCertificateResponse {
        this['revoke_reason'] = revokeReason;
        return this;
    }
    public set revokeReason(revokeReason: string  | undefined) {
        this['revoke_reason'] = revokeReason;
    }
    public get revokeReason(): string | undefined {
        return this['revoke_reason'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowCertificateResponse {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withIssueTime(issueTime: string): ShowCertificateResponse {
        this['issue_time'] = issueTime;
        return this;
    }
    public set issueTime(issueTime: string  | undefined) {
        this['issue_time'] = issueTime;
    }
    public get issueTime(): string | undefined {
        return this['issue_time'];
    }
    public withNotBefore(notBefore: string): ShowCertificateResponse {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): ShowCertificateResponse {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
    public withValidityPeriod(validityPeriod: number): ShowCertificateResponse {
        this['validity_period'] = validityPeriod;
        return this;
    }
    public set validityPeriod(validityPeriod: number  | undefined) {
        this['validity_period'] = validityPeriod;
    }
    public get validityPeriod(): number | undefined {
        return this['validity_period'];
    }
    public withValidationMethod(validationMethod: string): ShowCertificateResponse {
        this['validation_method'] = validationMethod;
        return this;
    }
    public set validationMethod(validationMethod: string  | undefined) {
        this['validation_method'] = validationMethod;
    }
    public get validationMethod(): string | undefined {
        return this['validation_method'];
    }
    public withDomainType(domainType: string): ShowCertificateResponse {
        this['domain_type'] = domainType;
        return this;
    }
    public set domainType(domainType: string  | undefined) {
        this['domain_type'] = domainType;
    }
    public get domainType(): string | undefined {
        return this['domain_type'];
    }
    public withMultiDomainType(multiDomainType: string): ShowCertificateResponse {
        this['multi_domain_type'] = multiDomainType;
        return this;
    }
    public set multiDomainType(multiDomainType: string  | undefined) {
        this['multi_domain_type'] = multiDomainType;
    }
    public get multiDomainType(): string | undefined {
        return this['multi_domain_type'];
    }
    public withDomain(domain: string): ShowCertificateResponse {
        this['domain'] = domain;
        return this;
    }
    public withSans(sans: string): ShowCertificateResponse {
        this['sans'] = sans;
        return this;
    }
    public withDomainCount(domainCount: number): ShowCertificateResponse {
        this['domain_count'] = domainCount;
        return this;
    }
    public set domainCount(domainCount: number  | undefined) {
        this['domain_count'] = domainCount;
    }
    public get domainCount(): number | undefined {
        return this['domain_count'];
    }
    public withWildcardCount(wildcardCount: number): ShowCertificateResponse {
        this['wildcard_count'] = wildcardCount;
        return this;
    }
    public set wildcardCount(wildcardCount: number  | undefined) {
        this['wildcard_count'] = wildcardCount;
    }
    public get wildcardCount(): number | undefined {
        return this['wildcard_count'];
    }
    public withFingerprint(fingerprint: string): ShowCertificateResponse {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withShared(shared: boolean): ShowCertificateResponse {
        this['shared'] = shared;
        return this;
    }
    public withApplicationInfo(applicationInfo: ShowCertificateResponseBodyApplicationInfo): ShowCertificateResponse {
        this['application_info'] = applicationInfo;
        return this;
    }
    public set applicationInfo(applicationInfo: ShowCertificateResponseBodyApplicationInfo  | undefined) {
        this['application_info'] = applicationInfo;
    }
    public get applicationInfo(): ShowCertificateResponseBodyApplicationInfo | undefined {
        return this['application_info'];
    }
    public withDescription(description: string): ShowCertificateResponse {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCertificateResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withAuthentification(authentification: Array<Authentification>): ShowCertificateResponse {
        this['authentification'] = authentification;
        return this;
    }
}
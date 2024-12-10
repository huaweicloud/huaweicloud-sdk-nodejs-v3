import { CertBase } from './CertBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfCertificateV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: ShowDetailsOfCertificateV2ResponseTypeEnum | string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'common_name'?: string;
    public san?: Array<string>;
    private 'not_after'?: Date;
    private 'signature_algorithm'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'is_has_trusted_root_ca'?: boolean;
    private 'algorithm_type'?: ShowDetailsOfCertificateV2ResponseAlgorithmTypeEnum | string;
    public version?: number;
    public organization?: Array<string>;
    private 'organizational_unit'?: Array<string>;
    public locality?: Array<string>;
    public state?: Array<string>;
    public country?: Array<string>;
    private 'not_before'?: Date;
    private 'serial_number'?: string;
    public issuer?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailsOfCertificateV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailsOfCertificateV2Response {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowDetailsOfCertificateV2ResponseTypeEnum | string): ShowDetailsOfCertificateV2Response {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ShowDetailsOfCertificateV2Response {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): ShowDetailsOfCertificateV2Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCommonName(commonName: string): ShowDetailsOfCertificateV2Response {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withSan(san: Array<string>): ShowDetailsOfCertificateV2Response {
        this['san'] = san;
        return this;
    }
    public withNotAfter(notAfter: Date): ShowDetailsOfCertificateV2Response {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: Date  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): Date | undefined {
        return this['not_after'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowDetailsOfCertificateV2Response {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withCreateTime(createTime: Date): ShowDetailsOfCertificateV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfCertificateV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withIsHasTrustedRootCa(isHasTrustedRootCa: boolean): ShowDetailsOfCertificateV2Response {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
        return this;
    }
    public set isHasTrustedRootCa(isHasTrustedRootCa: boolean  | undefined) {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
    }
    public get isHasTrustedRootCa(): boolean | undefined {
        return this['is_has_trusted_root_ca'];
    }
    public withAlgorithmType(algorithmType: ShowDetailsOfCertificateV2ResponseAlgorithmTypeEnum | string): ShowDetailsOfCertificateV2Response {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: ShowDetailsOfCertificateV2ResponseAlgorithmTypeEnum | string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): ShowDetailsOfCertificateV2ResponseAlgorithmTypeEnum | string | undefined {
        return this['algorithm_type'];
    }
    public withVersion(version: number): ShowDetailsOfCertificateV2Response {
        this['version'] = version;
        return this;
    }
    public withOrganization(organization: Array<string>): ShowDetailsOfCertificateV2Response {
        this['organization'] = organization;
        return this;
    }
    public withOrganizationalUnit(organizationalUnit: Array<string>): ShowDetailsOfCertificateV2Response {
        this['organizational_unit'] = organizationalUnit;
        return this;
    }
    public set organizationalUnit(organizationalUnit: Array<string>  | undefined) {
        this['organizational_unit'] = organizationalUnit;
    }
    public get organizationalUnit(): Array<string> | undefined {
        return this['organizational_unit'];
    }
    public withLocality(locality: Array<string>): ShowDetailsOfCertificateV2Response {
        this['locality'] = locality;
        return this;
    }
    public withState(state: Array<string>): ShowDetailsOfCertificateV2Response {
        this['state'] = state;
        return this;
    }
    public withCountry(country: Array<string>): ShowDetailsOfCertificateV2Response {
        this['country'] = country;
        return this;
    }
    public withNotBefore(notBefore: Date): ShowDetailsOfCertificateV2Response {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: Date  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): Date | undefined {
        return this['not_before'];
    }
    public withSerialNumber(serialNumber: string): ShowDetailsOfCertificateV2Response {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withIssuer(issuer: Array<string>): ShowDetailsOfCertificateV2Response {
        this['issuer'] = issuer;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfCertificateV2ResponseTypeEnum {
    GLOBAL = 'global',
    INSTANCE = 'instance'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfCertificateV2ResponseAlgorithmTypeEnum {
    RSA = 'RSA',
    ECC = 'ECC',
    SM2 = 'SM2'
}


import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfDomainNameCertificateV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: ShowDetailsOfDomainNameCertificateV2ResponseTypeEnum | string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'common_name'?: string;
    public san?: Array<string>;
    public version?: number;
    public organization?: Array<string>;
    private 'organizational_unit'?: Array<string>;
    public locality?: Array<string>;
    public state?: Array<string>;
    public country?: Array<string>;
    private 'not_before'?: string;
    private 'not_after'?: string;
    private 'serial_number'?: string;
    public issuer?: Array<string>;
    private 'signature_algorithm'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowDetailsOfDomainNameCertificateV2ResponseTypeEnum | string): ShowDetailsOfDomainNameCertificateV2Response {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: Date): ShowDetailsOfDomainNameCertificateV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfDomainNameCertificateV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCommonName(commonName: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withSan(san: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['san'] = san;
        return this;
    }
    public withVersion(version: number): ShowDetailsOfDomainNameCertificateV2Response {
        this['version'] = version;
        return this;
    }
    public withOrganization(organization: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['organization'] = organization;
        return this;
    }
    public withOrganizationalUnit(organizationalUnit: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['organizational_unit'] = organizationalUnit;
        return this;
    }
    public set organizationalUnit(organizationalUnit: Array<string>  | undefined) {
        this['organizational_unit'] = organizationalUnit;
    }
    public get organizationalUnit(): Array<string> | undefined {
        return this['organizational_unit'];
    }
    public withLocality(locality: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['locality'] = locality;
        return this;
    }
    public withState(state: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['state'] = state;
        return this;
    }
    public withCountry(country: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['country'] = country;
        return this;
    }
    public withNotBefore(notBefore: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['not_before'] = notBefore;
        return this;
    }
    public set notBefore(notBefore: string  | undefined) {
        this['not_before'] = notBefore;
    }
    public get notBefore(): string | undefined {
        return this['not_before'];
    }
    public withNotAfter(notAfter: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: string  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): string | undefined {
        return this['not_after'];
    }
    public withSerialNumber(serialNumber: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withIssuer(issuer: Array<string>): ShowDetailsOfDomainNameCertificateV2Response {
        this['issuer'] = issuer;
        return this;
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowDetailsOfDomainNameCertificateV2Response {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfDomainNameCertificateV2ResponseTypeEnum {
    GLOBAL = 'global',
    INSTANCE = 'instance'
}

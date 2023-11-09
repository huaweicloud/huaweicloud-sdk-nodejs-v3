

export class ThreatIntelProperties {
    private 'file_md5'?: string;
    private 'file_sha1'?: string;
    private 'file_sha256'?: string;
    private 'file_name'?: string;
    private 'create_time'?: Date;
    private 'file_class'?: string;
    private 'file_family'?: string;
    private 'file_maltype'?: string;
    private 'ip_resolves_to_refs'?: string;
    private 'belongs_to_refs'?: string;
    private 'ip_location'?: string;
    private 'domain_family'?: string;
    private 'domain_resolves_to_refs'?: string;
    private 'domain_dns_type'?: string;
    private 'url_host'?: string;
    private 'url_resolves_to_refs'?: string;
    private 'display_name'?: string;
    private 'url_belongs_to_ref'?: string;
    public constructor() { 
    }
    public withFileMd5(fileMd5: string): ThreatIntelProperties {
        this['file_md5'] = fileMd5;
        return this;
    }
    public set fileMd5(fileMd5: string  | undefined) {
        this['file_md5'] = fileMd5;
    }
    public get fileMd5(): string | undefined {
        return this['file_md5'];
    }
    public withFileSha1(fileSha1: string): ThreatIntelProperties {
        this['file_sha1'] = fileSha1;
        return this;
    }
    public set fileSha1(fileSha1: string  | undefined) {
        this['file_sha1'] = fileSha1;
    }
    public get fileSha1(): string | undefined {
        return this['file_sha1'];
    }
    public withFileSha256(fileSha256: string): ThreatIntelProperties {
        this['file_sha256'] = fileSha256;
        return this;
    }
    public set fileSha256(fileSha256: string  | undefined) {
        this['file_sha256'] = fileSha256;
    }
    public get fileSha256(): string | undefined {
        return this['file_sha256'];
    }
    public withFileName(fileName: string): ThreatIntelProperties {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withCreateTime(createTime: Date): ThreatIntelProperties {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withFileClass(fileClass: string): ThreatIntelProperties {
        this['file_class'] = fileClass;
        return this;
    }
    public set fileClass(fileClass: string  | undefined) {
        this['file_class'] = fileClass;
    }
    public get fileClass(): string | undefined {
        return this['file_class'];
    }
    public withFileFamily(fileFamily: string): ThreatIntelProperties {
        this['file_family'] = fileFamily;
        return this;
    }
    public set fileFamily(fileFamily: string  | undefined) {
        this['file_family'] = fileFamily;
    }
    public get fileFamily(): string | undefined {
        return this['file_family'];
    }
    public withFileMaltype(fileMaltype: string): ThreatIntelProperties {
        this['file_maltype'] = fileMaltype;
        return this;
    }
    public set fileMaltype(fileMaltype: string  | undefined) {
        this['file_maltype'] = fileMaltype;
    }
    public get fileMaltype(): string | undefined {
        return this['file_maltype'];
    }
    public withIpResolvesToRefs(ipResolvesToRefs: string): ThreatIntelProperties {
        this['ip_resolves_to_refs'] = ipResolvesToRefs;
        return this;
    }
    public set ipResolvesToRefs(ipResolvesToRefs: string  | undefined) {
        this['ip_resolves_to_refs'] = ipResolvesToRefs;
    }
    public get ipResolvesToRefs(): string | undefined {
        return this['ip_resolves_to_refs'];
    }
    public withBelongsToRefs(belongsToRefs: string): ThreatIntelProperties {
        this['belongs_to_refs'] = belongsToRefs;
        return this;
    }
    public set belongsToRefs(belongsToRefs: string  | undefined) {
        this['belongs_to_refs'] = belongsToRefs;
    }
    public get belongsToRefs(): string | undefined {
        return this['belongs_to_refs'];
    }
    public withIpLocation(ipLocation: string): ThreatIntelProperties {
        this['ip_location'] = ipLocation;
        return this;
    }
    public set ipLocation(ipLocation: string  | undefined) {
        this['ip_location'] = ipLocation;
    }
    public get ipLocation(): string | undefined {
        return this['ip_location'];
    }
    public withDomainFamily(domainFamily: string): ThreatIntelProperties {
        this['domain_family'] = domainFamily;
        return this;
    }
    public set domainFamily(domainFamily: string  | undefined) {
        this['domain_family'] = domainFamily;
    }
    public get domainFamily(): string | undefined {
        return this['domain_family'];
    }
    public withDomainResolvesToRefs(domainResolvesToRefs: string): ThreatIntelProperties {
        this['domain_resolves_to_refs'] = domainResolvesToRefs;
        return this;
    }
    public set domainResolvesToRefs(domainResolvesToRefs: string  | undefined) {
        this['domain_resolves_to_refs'] = domainResolvesToRefs;
    }
    public get domainResolvesToRefs(): string | undefined {
        return this['domain_resolves_to_refs'];
    }
    public withDomainDnsType(domainDnsType: string): ThreatIntelProperties {
        this['domain_dns_type'] = domainDnsType;
        return this;
    }
    public set domainDnsType(domainDnsType: string  | undefined) {
        this['domain_dns_type'] = domainDnsType;
    }
    public get domainDnsType(): string | undefined {
        return this['domain_dns_type'];
    }
    public withUrlHost(urlHost: string): ThreatIntelProperties {
        this['url_host'] = urlHost;
        return this;
    }
    public set urlHost(urlHost: string  | undefined) {
        this['url_host'] = urlHost;
    }
    public get urlHost(): string | undefined {
        return this['url_host'];
    }
    public withUrlResolvesToRefs(urlResolvesToRefs: string): ThreatIntelProperties {
        this['url_resolves_to_refs'] = urlResolvesToRefs;
        return this;
    }
    public set urlResolvesToRefs(urlResolvesToRefs: string  | undefined) {
        this['url_resolves_to_refs'] = urlResolvesToRefs;
    }
    public get urlResolvesToRefs(): string | undefined {
        return this['url_resolves_to_refs'];
    }
    public withDisplayName(displayName: string): ThreatIntelProperties {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withUrlBelongsToRef(urlBelongsToRef: string): ThreatIntelProperties {
        this['url_belongs_to_ref'] = urlBelongsToRef;
        return this;
    }
    public set urlBelongsToRef(urlBelongsToRef: string  | undefined) {
        this['url_belongs_to_ref'] = urlBelongsToRef;
    }
    public get urlBelongsToRef(): string | undefined {
        return this['url_belongs_to_ref'];
    }
}
import { VulnerabilityHostNumberInfo } from './VulnerabilityHostNumberInfo';


export class WindowsVulDetailInfo {
    private 'cve_id'?: string;
    private 'cve_name'?: string;
    private 'cvss_version'?: string;
    private 'cvss_vector'?: string;
    private 'cve_solution'?: string;
    private 'cve_affect'?: string;
    private 'cve_affect_description'?: string;
    private 'cve_type'?: string;
    private 'cve_type_description'?: string;
    private 'cve_level'?: string;
    public cvss?: number;
    private 'public_time'?: number;
    public description?: string;
    private 'hosts_num'?: VulnerabilityHostNumberInfo;
    public constructor() { 
    }
    public withCveId(cveId: string): WindowsVulDetailInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCveName(cveName: string): WindowsVulDetailInfo {
        this['cve_name'] = cveName;
        return this;
    }
    public set cveName(cveName: string  | undefined) {
        this['cve_name'] = cveName;
    }
    public get cveName(): string | undefined {
        return this['cve_name'];
    }
    public withCvssVersion(cvssVersion: string): WindowsVulDetailInfo {
        this['cvss_version'] = cvssVersion;
        return this;
    }
    public set cvssVersion(cvssVersion: string  | undefined) {
        this['cvss_version'] = cvssVersion;
    }
    public get cvssVersion(): string | undefined {
        return this['cvss_version'];
    }
    public withCvssVector(cvssVector: string): WindowsVulDetailInfo {
        this['cvss_vector'] = cvssVector;
        return this;
    }
    public set cvssVector(cvssVector: string  | undefined) {
        this['cvss_vector'] = cvssVector;
    }
    public get cvssVector(): string | undefined {
        return this['cvss_vector'];
    }
    public withCveSolution(cveSolution: string): WindowsVulDetailInfo {
        this['cve_solution'] = cveSolution;
        return this;
    }
    public set cveSolution(cveSolution: string  | undefined) {
        this['cve_solution'] = cveSolution;
    }
    public get cveSolution(): string | undefined {
        return this['cve_solution'];
    }
    public withCveAffect(cveAffect: string): WindowsVulDetailInfo {
        this['cve_affect'] = cveAffect;
        return this;
    }
    public set cveAffect(cveAffect: string  | undefined) {
        this['cve_affect'] = cveAffect;
    }
    public get cveAffect(): string | undefined {
        return this['cve_affect'];
    }
    public withCveAffectDescription(cveAffectDescription: string): WindowsVulDetailInfo {
        this['cve_affect_description'] = cveAffectDescription;
        return this;
    }
    public set cveAffectDescription(cveAffectDescription: string  | undefined) {
        this['cve_affect_description'] = cveAffectDescription;
    }
    public get cveAffectDescription(): string | undefined {
        return this['cve_affect_description'];
    }
    public withCveType(cveType: string): WindowsVulDetailInfo {
        this['cve_type'] = cveType;
        return this;
    }
    public set cveType(cveType: string  | undefined) {
        this['cve_type'] = cveType;
    }
    public get cveType(): string | undefined {
        return this['cve_type'];
    }
    public withCveTypeDescription(cveTypeDescription: string): WindowsVulDetailInfo {
        this['cve_type_description'] = cveTypeDescription;
        return this;
    }
    public set cveTypeDescription(cveTypeDescription: string  | undefined) {
        this['cve_type_description'] = cveTypeDescription;
    }
    public get cveTypeDescription(): string | undefined {
        return this['cve_type_description'];
    }
    public withCveLevel(cveLevel: string): WindowsVulDetailInfo {
        this['cve_level'] = cveLevel;
        return this;
    }
    public set cveLevel(cveLevel: string  | undefined) {
        this['cve_level'] = cveLevel;
    }
    public get cveLevel(): string | undefined {
        return this['cve_level'];
    }
    public withCvss(cvss: number): WindowsVulDetailInfo {
        this['cvss'] = cvss;
        return this;
    }
    public withPublicTime(publicTime: number): WindowsVulDetailInfo {
        this['public_time'] = publicTime;
        return this;
    }
    public set publicTime(publicTime: number  | undefined) {
        this['public_time'] = publicTime;
    }
    public get publicTime(): number | undefined {
        return this['public_time'];
    }
    public withDescription(description: string): WindowsVulDetailInfo {
        this['description'] = description;
        return this;
    }
    public withHostsNum(hostsNum: VulnerabilityHostNumberInfo): WindowsVulDetailInfo {
        this['hosts_num'] = hostsNum;
        return this;
    }
    public set hostsNum(hostsNum: VulnerabilityHostNumberInfo  | undefined) {
        this['hosts_num'] = hostsNum;
    }
    public get hostsNum(): VulnerabilityHostNumberInfo | undefined {
        return this['hosts_num'];
    }
}
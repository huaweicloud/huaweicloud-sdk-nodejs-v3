import { VulnerabilityHostNumberInfo } from './VulnerabilityHostNumberInfo';


export class LinuxVulDetailInfo {
    private 'cve_id'?: string;
    private 'cve_name'?: string;
    private 'cvss_vector'?: string;
    private 'cve_solution'?: string;
    private 'cve_affect'?: string;
    private 'cve_affect_description'?: string;
    private 'cve_type'?: string;
    private 'cve_type_description'?: string;
    private 'cve_level'?: string;
    public cvss?: number;
    private 'cvss_version'?: string;
    public description?: string;
    private 'public_time'?: number;
    private 'cnvd_id'?: string;
    private 'cnnvd_id'?: string;
    private 'hosts_num'?: VulnerabilityHostNumberInfo;
    public constructor() { 
    }
    public withCveId(cveId: string): LinuxVulDetailInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCveName(cveName: string): LinuxVulDetailInfo {
        this['cve_name'] = cveName;
        return this;
    }
    public set cveName(cveName: string  | undefined) {
        this['cve_name'] = cveName;
    }
    public get cveName(): string | undefined {
        return this['cve_name'];
    }
    public withCvssVector(cvssVector: string): LinuxVulDetailInfo {
        this['cvss_vector'] = cvssVector;
        return this;
    }
    public set cvssVector(cvssVector: string  | undefined) {
        this['cvss_vector'] = cvssVector;
    }
    public get cvssVector(): string | undefined {
        return this['cvss_vector'];
    }
    public withCveSolution(cveSolution: string): LinuxVulDetailInfo {
        this['cve_solution'] = cveSolution;
        return this;
    }
    public set cveSolution(cveSolution: string  | undefined) {
        this['cve_solution'] = cveSolution;
    }
    public get cveSolution(): string | undefined {
        return this['cve_solution'];
    }
    public withCveAffect(cveAffect: string): LinuxVulDetailInfo {
        this['cve_affect'] = cveAffect;
        return this;
    }
    public set cveAffect(cveAffect: string  | undefined) {
        this['cve_affect'] = cveAffect;
    }
    public get cveAffect(): string | undefined {
        return this['cve_affect'];
    }
    public withCveAffectDescription(cveAffectDescription: string): LinuxVulDetailInfo {
        this['cve_affect_description'] = cveAffectDescription;
        return this;
    }
    public set cveAffectDescription(cveAffectDescription: string  | undefined) {
        this['cve_affect_description'] = cveAffectDescription;
    }
    public get cveAffectDescription(): string | undefined {
        return this['cve_affect_description'];
    }
    public withCveType(cveType: string): LinuxVulDetailInfo {
        this['cve_type'] = cveType;
        return this;
    }
    public set cveType(cveType: string  | undefined) {
        this['cve_type'] = cveType;
    }
    public get cveType(): string | undefined {
        return this['cve_type'];
    }
    public withCveTypeDescription(cveTypeDescription: string): LinuxVulDetailInfo {
        this['cve_type_description'] = cveTypeDescription;
        return this;
    }
    public set cveTypeDescription(cveTypeDescription: string  | undefined) {
        this['cve_type_description'] = cveTypeDescription;
    }
    public get cveTypeDescription(): string | undefined {
        return this['cve_type_description'];
    }
    public withCveLevel(cveLevel: string): LinuxVulDetailInfo {
        this['cve_level'] = cveLevel;
        return this;
    }
    public set cveLevel(cveLevel: string  | undefined) {
        this['cve_level'] = cveLevel;
    }
    public get cveLevel(): string | undefined {
        return this['cve_level'];
    }
    public withCvss(cvss: number): LinuxVulDetailInfo {
        this['cvss'] = cvss;
        return this;
    }
    public withCvssVersion(cvssVersion: string): LinuxVulDetailInfo {
        this['cvss_version'] = cvssVersion;
        return this;
    }
    public set cvssVersion(cvssVersion: string  | undefined) {
        this['cvss_version'] = cvssVersion;
    }
    public get cvssVersion(): string | undefined {
        return this['cvss_version'];
    }
    public withDescription(description: string): LinuxVulDetailInfo {
        this['description'] = description;
        return this;
    }
    public withPublicTime(publicTime: number): LinuxVulDetailInfo {
        this['public_time'] = publicTime;
        return this;
    }
    public set publicTime(publicTime: number  | undefined) {
        this['public_time'] = publicTime;
    }
    public get publicTime(): number | undefined {
        return this['public_time'];
    }
    public withCnvdId(cnvdId: string): LinuxVulDetailInfo {
        this['cnvd_id'] = cnvdId;
        return this;
    }
    public set cnvdId(cnvdId: string  | undefined) {
        this['cnvd_id'] = cnvdId;
    }
    public get cnvdId(): string | undefined {
        return this['cnvd_id'];
    }
    public withCnnvdId(cnnvdId: string): LinuxVulDetailInfo {
        this['cnnvd_id'] = cnnvdId;
        return this;
    }
    public set cnnvdId(cnnvdId: string  | undefined) {
        this['cnnvd_id'] = cnnvdId;
    }
    public get cnnvdId(): string | undefined {
        return this['cnnvd_id'];
    }
    public withHostsNum(hostsNum: VulnerabilityHostNumberInfo): LinuxVulDetailInfo {
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
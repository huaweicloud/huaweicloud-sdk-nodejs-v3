import { VulnerabilityHostNumberInfo } from './VulnerabilityHostNumberInfo';


export class WebCmsVulDetailInfo {
    private 'vul_id'?: string;
    public app?: string;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    private 'public_time'?: number;
    private 'vulLabel_zh'?: string;
    private 'vulLabel_en'?: string;
    private 'repair_necessity'?: number;
    private 'severity_level'?: string;
    private 'description_zh'?: string;
    private 'description_en'?: string;
    private 'solution_zh'?: string;
    private 'solution_en'?: string;
    private 'cve_id'?: string;
    private 'cve_score'?: number;
    private 'cnvd_id'?: string;
    private 'cnnvd_id'?: string;
    private 'bugtraq_id'?: string;
    private 'suffix_path'?: string;
    public md5?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'tags_zh'?: string;
    private 'tags_en'?: string;
    private 'patch_url'?: string;
    private 'hosts_num'?: VulnerabilityHostNumberInfo;
    private 'cve_level'?: string;
    public cvss?: number;
    private 'cvss_version'?: string;
    public description?: string;
    private 'cve_name'?: string;
    private 'cvss_vector'?: string;
    private 'cve_solution'?: string;
    private 'cve_affect'?: string;
    private 'cve_affect_description'?: string;
    private 'cve_type'?: string;
    private 'cve_type_description'?: string;
    public constructor() { 
    }
    public withVulId(vulId: string): WebCmsVulDetailInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withApp(app: string): WebCmsVulDetailInfo {
        this['app'] = app;
        return this;
    }
    public withNameZh(nameZh: string): WebCmsVulDetailInfo {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): WebCmsVulDetailInfo {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withPublicTime(publicTime: number): WebCmsVulDetailInfo {
        this['public_time'] = publicTime;
        return this;
    }
    public set publicTime(publicTime: number  | undefined) {
        this['public_time'] = publicTime;
    }
    public get publicTime(): number | undefined {
        return this['public_time'];
    }
    public withVulLabelZh(vulLabelZh: string): WebCmsVulDetailInfo {
        this['vulLabel_zh'] = vulLabelZh;
        return this;
    }
    public set vulLabelZh(vulLabelZh: string  | undefined) {
        this['vulLabel_zh'] = vulLabelZh;
    }
    public get vulLabelZh(): string | undefined {
        return this['vulLabel_zh'];
    }
    public withVulLabelEn(vulLabelEn: string): WebCmsVulDetailInfo {
        this['vulLabel_en'] = vulLabelEn;
        return this;
    }
    public set vulLabelEn(vulLabelEn: string  | undefined) {
        this['vulLabel_en'] = vulLabelEn;
    }
    public get vulLabelEn(): string | undefined {
        return this['vulLabel_en'];
    }
    public withRepairNecessity(repairNecessity: number): WebCmsVulDetailInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: number  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): number | undefined {
        return this['repair_necessity'];
    }
    public withSeverityLevel(severityLevel: string): WebCmsVulDetailInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withDescriptionZh(descriptionZh: string): WebCmsVulDetailInfo {
        this['description_zh'] = descriptionZh;
        return this;
    }
    public set descriptionZh(descriptionZh: string  | undefined) {
        this['description_zh'] = descriptionZh;
    }
    public get descriptionZh(): string | undefined {
        return this['description_zh'];
    }
    public withDescriptionEn(descriptionEn: string): WebCmsVulDetailInfo {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withSolutionZh(solutionZh: string): WebCmsVulDetailInfo {
        this['solution_zh'] = solutionZh;
        return this;
    }
    public set solutionZh(solutionZh: string  | undefined) {
        this['solution_zh'] = solutionZh;
    }
    public get solutionZh(): string | undefined {
        return this['solution_zh'];
    }
    public withSolutionEn(solutionEn: string): WebCmsVulDetailInfo {
        this['solution_en'] = solutionEn;
        return this;
    }
    public set solutionEn(solutionEn: string  | undefined) {
        this['solution_en'] = solutionEn;
    }
    public get solutionEn(): string | undefined {
        return this['solution_en'];
    }
    public withCveId(cveId: string): WebCmsVulDetailInfo {
        this['cve_id'] = cveId;
        return this;
    }
    public set cveId(cveId: string  | undefined) {
        this['cve_id'] = cveId;
    }
    public get cveId(): string | undefined {
        return this['cve_id'];
    }
    public withCveScore(cveScore: number): WebCmsVulDetailInfo {
        this['cve_score'] = cveScore;
        return this;
    }
    public set cveScore(cveScore: number  | undefined) {
        this['cve_score'] = cveScore;
    }
    public get cveScore(): number | undefined {
        return this['cve_score'];
    }
    public withCnvdId(cnvdId: string): WebCmsVulDetailInfo {
        this['cnvd_id'] = cnvdId;
        return this;
    }
    public set cnvdId(cnvdId: string  | undefined) {
        this['cnvd_id'] = cnvdId;
    }
    public get cnvdId(): string | undefined {
        return this['cnvd_id'];
    }
    public withCnnvdId(cnnvdId: string): WebCmsVulDetailInfo {
        this['cnnvd_id'] = cnnvdId;
        return this;
    }
    public set cnnvdId(cnnvdId: string  | undefined) {
        this['cnnvd_id'] = cnnvdId;
    }
    public get cnnvdId(): string | undefined {
        return this['cnnvd_id'];
    }
    public withBugtraqId(bugtraqId: string): WebCmsVulDetailInfo {
        this['bugtraq_id'] = bugtraqId;
        return this;
    }
    public set bugtraqId(bugtraqId: string  | undefined) {
        this['bugtraq_id'] = bugtraqId;
    }
    public get bugtraqId(): string | undefined {
        return this['bugtraq_id'];
    }
    public withSuffixPath(suffixPath: string): WebCmsVulDetailInfo {
        this['suffix_path'] = suffixPath;
        return this;
    }
    public set suffixPath(suffixPath: string  | undefined) {
        this['suffix_path'] = suffixPath;
    }
    public get suffixPath(): string | undefined {
        return this['suffix_path'];
    }
    public withMd5(md5: string): WebCmsVulDetailInfo {
        this['md5'] = md5;
        return this;
    }
    public withCreateTime(createTime: number): WebCmsVulDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): WebCmsVulDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTagsZh(tagsZh: string): WebCmsVulDetailInfo {
        this['tags_zh'] = tagsZh;
        return this;
    }
    public set tagsZh(tagsZh: string  | undefined) {
        this['tags_zh'] = tagsZh;
    }
    public get tagsZh(): string | undefined {
        return this['tags_zh'];
    }
    public withTagsEn(tagsEn: string): WebCmsVulDetailInfo {
        this['tags_en'] = tagsEn;
        return this;
    }
    public set tagsEn(tagsEn: string  | undefined) {
        this['tags_en'] = tagsEn;
    }
    public get tagsEn(): string | undefined {
        return this['tags_en'];
    }
    public withPatchUrl(patchUrl: string): WebCmsVulDetailInfo {
        this['patch_url'] = patchUrl;
        return this;
    }
    public set patchUrl(patchUrl: string  | undefined) {
        this['patch_url'] = patchUrl;
    }
    public get patchUrl(): string | undefined {
        return this['patch_url'];
    }
    public withHostsNum(hostsNum: VulnerabilityHostNumberInfo): WebCmsVulDetailInfo {
        this['hosts_num'] = hostsNum;
        return this;
    }
    public set hostsNum(hostsNum: VulnerabilityHostNumberInfo  | undefined) {
        this['hosts_num'] = hostsNum;
    }
    public get hostsNum(): VulnerabilityHostNumberInfo | undefined {
        return this['hosts_num'];
    }
    public withCveLevel(cveLevel: string): WebCmsVulDetailInfo {
        this['cve_level'] = cveLevel;
        return this;
    }
    public set cveLevel(cveLevel: string  | undefined) {
        this['cve_level'] = cveLevel;
    }
    public get cveLevel(): string | undefined {
        return this['cve_level'];
    }
    public withCvss(cvss: number): WebCmsVulDetailInfo {
        this['cvss'] = cvss;
        return this;
    }
    public withCvssVersion(cvssVersion: string): WebCmsVulDetailInfo {
        this['cvss_version'] = cvssVersion;
        return this;
    }
    public set cvssVersion(cvssVersion: string  | undefined) {
        this['cvss_version'] = cvssVersion;
    }
    public get cvssVersion(): string | undefined {
        return this['cvss_version'];
    }
    public withDescription(description: string): WebCmsVulDetailInfo {
        this['description'] = description;
        return this;
    }
    public withCveName(cveName: string): WebCmsVulDetailInfo {
        this['cve_name'] = cveName;
        return this;
    }
    public set cveName(cveName: string  | undefined) {
        this['cve_name'] = cveName;
    }
    public get cveName(): string | undefined {
        return this['cve_name'];
    }
    public withCvssVector(cvssVector: string): WebCmsVulDetailInfo {
        this['cvss_vector'] = cvssVector;
        return this;
    }
    public set cvssVector(cvssVector: string  | undefined) {
        this['cvss_vector'] = cvssVector;
    }
    public get cvssVector(): string | undefined {
        return this['cvss_vector'];
    }
    public withCveSolution(cveSolution: string): WebCmsVulDetailInfo {
        this['cve_solution'] = cveSolution;
        return this;
    }
    public set cveSolution(cveSolution: string  | undefined) {
        this['cve_solution'] = cveSolution;
    }
    public get cveSolution(): string | undefined {
        return this['cve_solution'];
    }
    public withCveAffect(cveAffect: string): WebCmsVulDetailInfo {
        this['cve_affect'] = cveAffect;
        return this;
    }
    public set cveAffect(cveAffect: string  | undefined) {
        this['cve_affect'] = cveAffect;
    }
    public get cveAffect(): string | undefined {
        return this['cve_affect'];
    }
    public withCveAffectDescription(cveAffectDescription: string): WebCmsVulDetailInfo {
        this['cve_affect_description'] = cveAffectDescription;
        return this;
    }
    public set cveAffectDescription(cveAffectDescription: string  | undefined) {
        this['cve_affect_description'] = cveAffectDescription;
    }
    public get cveAffectDescription(): string | undefined {
        return this['cve_affect_description'];
    }
    public withCveType(cveType: string): WebCmsVulDetailInfo {
        this['cve_type'] = cveType;
        return this;
    }
    public set cveType(cveType: string  | undefined) {
        this['cve_type'] = cveType;
    }
    public get cveType(): string | undefined {
        return this['cve_type'];
    }
    public withCveTypeDescription(cveTypeDescription: string): WebCmsVulDetailInfo {
        this['cve_type_description'] = cveTypeDescription;
        return this;
    }
    public set cveTypeDescription(cveTypeDescription: string  | undefined) {
        this['cve_type_description'] = cveTypeDescription;
    }
    public get cveTypeDescription(): string | undefined {
        return this['cve_type_description'];
    }
}
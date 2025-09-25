import { GeneralImageVulsResponseInfoCveList } from './GeneralImageVulsResponseInfoCveList';


export class GeneralImageVulsResponseInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    public type?: string;
    private 'image_type'?: string;
    private 'label_list'?: Array<string>;
    private 'severity_level'?: string;
    private 'image_num'?: number;
    private 'cve_list'?: Array<GeneralImageVulsResponseInfoCveList>;
    private 'max_cvss_score'?: number;
    private 'scan_time'?: number;
    public description?: string;
    public url?: string;
    private 'solution_detail'?: string;
    private 'cluster_num'?: number;
    public constructor() { 
    }
    public withVulName(vulName: string): GeneralImageVulsResponseInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): GeneralImageVulsResponseInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withType(type: string): GeneralImageVulsResponseInfo {
        this['type'] = type;
        return this;
    }
    public withImageType(imageType: string): GeneralImageVulsResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
    public withLabelList(labelList: Array<string>): GeneralImageVulsResponseInfo {
        this['label_list'] = labelList;
        return this;
    }
    public set labelList(labelList: Array<string>  | undefined) {
        this['label_list'] = labelList;
    }
    public get labelList(): Array<string> | undefined {
        return this['label_list'];
    }
    public withSeverityLevel(severityLevel: string): GeneralImageVulsResponseInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
    public withImageNum(imageNum: number): GeneralImageVulsResponseInfo {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withCveList(cveList: Array<GeneralImageVulsResponseInfoCveList>): GeneralImageVulsResponseInfo {
        this['cve_list'] = cveList;
        return this;
    }
    public set cveList(cveList: Array<GeneralImageVulsResponseInfoCveList>  | undefined) {
        this['cve_list'] = cveList;
    }
    public get cveList(): Array<GeneralImageVulsResponseInfoCveList> | undefined {
        return this['cve_list'];
    }
    public withMaxCvssScore(maxCvssScore: number): GeneralImageVulsResponseInfo {
        this['max_cvss_score'] = maxCvssScore;
        return this;
    }
    public set maxCvssScore(maxCvssScore: number  | undefined) {
        this['max_cvss_score'] = maxCvssScore;
    }
    public get maxCvssScore(): number | undefined {
        return this['max_cvss_score'];
    }
    public withScanTime(scanTime: number): GeneralImageVulsResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withDescription(description: string): GeneralImageVulsResponseInfo {
        this['description'] = description;
        return this;
    }
    public withUrl(url: string): GeneralImageVulsResponseInfo {
        this['url'] = url;
        return this;
    }
    public withSolutionDetail(solutionDetail: string): GeneralImageVulsResponseInfo {
        this['solution_detail'] = solutionDetail;
        return this;
    }
    public set solutionDetail(solutionDetail: string  | undefined) {
        this['solution_detail'] = solutionDetail;
    }
    public get solutionDetail(): string | undefined {
        return this['solution_detail'];
    }
    public withClusterNum(clusterNum: number): GeneralImageVulsResponseInfo {
        this['cluster_num'] = clusterNum;
        return this;
    }
    public set clusterNum(clusterNum: number  | undefined) {
        this['cluster_num'] = clusterNum;
    }
    public get clusterNum(): number | undefined {
        return this['cluster_num'];
    }
}
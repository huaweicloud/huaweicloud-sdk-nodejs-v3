import { CveInfo } from './CveInfo';


export class ImageVulInfo {
    private 'vul_id'?: string;
    private 'vul_name'?: string;
    private 'repair_necessity'?: string;
    public description?: string;
    public position?: string;
    private 'app_name'?: string;
    private 'app_path'?: string;
    public version?: string;
    public solution?: string;
    public url?: string;
    private 'data_list'?: Array<CveInfo>;
    public status?: string;
    private 'severity_level'?: string;
    public constructor() { 
    }
    public withVulId(vulId: string): ImageVulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withVulName(vulName: string): ImageVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withRepairNecessity(repairNecessity: string): ImageVulInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withDescription(description: string): ImageVulInfo {
        this['description'] = description;
        return this;
    }
    public withPosition(position: string): ImageVulInfo {
        this['position'] = position;
        return this;
    }
    public withAppName(appName: string): ImageVulInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppPath(appPath: string): ImageVulInfo {
        this['app_path'] = appPath;
        return this;
    }
    public set appPath(appPath: string  | undefined) {
        this['app_path'] = appPath;
    }
    public get appPath(): string | undefined {
        return this['app_path'];
    }
    public withVersion(version: string): ImageVulInfo {
        this['version'] = version;
        return this;
    }
    public withSolution(solution: string): ImageVulInfo {
        this['solution'] = solution;
        return this;
    }
    public withUrl(url: string): ImageVulInfo {
        this['url'] = url;
        return this;
    }
    public withDataList(dataList: Array<CveInfo>): ImageVulInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CveInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CveInfo> | undefined {
        return this['data_list'];
    }
    public withStatus(status: string): ImageVulInfo {
        this['status'] = status;
        return this;
    }
    public withSeverityLevel(severityLevel: string): ImageVulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
}
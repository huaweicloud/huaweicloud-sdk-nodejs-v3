

export class ImageVulInfo {
    private 'vul_id'?: string;
    private 'repair_necessity'?: string;
    public description?: string;
    public position?: string;
    private 'app_name'?: string;
    public version?: string;
    public solution?: string;
    public url?: string;
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
}
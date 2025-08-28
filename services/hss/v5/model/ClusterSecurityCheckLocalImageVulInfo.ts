

export class ClusterSecurityCheckLocalImageVulInfo {
    private 'local_image_name'?: string;
    private 'local_image_version'?: string;
    private 'local_image_size'?: number;
    private 'vul_name'?: string;
    private 'app_name'?: string;
    private 'app_version'?: string;
    private 'severity_level'?: ClusterSecurityCheckLocalImageVulInfoSeverityLevelEnum | string;
    public solution?: string;
    private 'vul_description'?: string;
    public constructor() { 
    }
    public withLocalImageName(localImageName: string): ClusterSecurityCheckLocalImageVulInfo {
        this['local_image_name'] = localImageName;
        return this;
    }
    public set localImageName(localImageName: string  | undefined) {
        this['local_image_name'] = localImageName;
    }
    public get localImageName(): string | undefined {
        return this['local_image_name'];
    }
    public withLocalImageVersion(localImageVersion: string): ClusterSecurityCheckLocalImageVulInfo {
        this['local_image_version'] = localImageVersion;
        return this;
    }
    public set localImageVersion(localImageVersion: string  | undefined) {
        this['local_image_version'] = localImageVersion;
    }
    public get localImageVersion(): string | undefined {
        return this['local_image_version'];
    }
    public withLocalImageSize(localImageSize: number): ClusterSecurityCheckLocalImageVulInfo {
        this['local_image_size'] = localImageSize;
        return this;
    }
    public set localImageSize(localImageSize: number  | undefined) {
        this['local_image_size'] = localImageSize;
    }
    public get localImageSize(): number | undefined {
        return this['local_image_size'];
    }
    public withVulName(vulName: string): ClusterSecurityCheckLocalImageVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withAppName(appName: string): ClusterSecurityCheckLocalImageVulInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppVersion(appVersion: string): ClusterSecurityCheckLocalImageVulInfo {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withSeverityLevel(severityLevel: ClusterSecurityCheckLocalImageVulInfoSeverityLevelEnum | string): ClusterSecurityCheckLocalImageVulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: ClusterSecurityCheckLocalImageVulInfoSeverityLevelEnum | string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): ClusterSecurityCheckLocalImageVulInfoSeverityLevelEnum | string | undefined {
        return this['severity_level'];
    }
    public withSolution(solution: string): ClusterSecurityCheckLocalImageVulInfo {
        this['solution'] = solution;
        return this;
    }
    public withVulDescription(vulDescription: string): ClusterSecurityCheckLocalImageVulInfo {
        this['vul_description'] = vulDescription;
        return this;
    }
    public set vulDescription(vulDescription: string  | undefined) {
        this['vul_description'] = vulDescription;
    }
    public get vulDescription(): string | undefined {
        return this['vul_description'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ClusterSecurityCheckLocalImageVulInfoSeverityLevelEnum {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low'
}

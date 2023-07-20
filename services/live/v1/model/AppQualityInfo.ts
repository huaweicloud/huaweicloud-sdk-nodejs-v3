import { QualityInfo } from './QualityInfo';


export class AppQualityInfo {
    private 'app_name'?: string;
    private 'quality_info'?: Array<QualityInfo>;
    public constructor() { 
    }
    public withAppName(appName: string): AppQualityInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withQualityInfo(qualityInfo: Array<QualityInfo>): AppQualityInfo {
        this['quality_info'] = qualityInfo;
        return this;
    }
    public set qualityInfo(qualityInfo: Array<QualityInfo>  | undefined) {
        this['quality_info'] = qualityInfo;
    }
    public get qualityInfo(): Array<QualityInfo> | undefined {
        return this['quality_info'];
    }
}
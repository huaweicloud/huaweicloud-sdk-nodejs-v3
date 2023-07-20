import { QualityInfo } from './QualityInfo';


export class StreamTranscodingTemplate {
    public domain?: string;
    private 'app_name'?: string;
    private 'trans_type'?: StreamTranscodingTemplateTransTypeEnum | string;
    private 'quality_info'?: Array<QualityInfo>;
    public constructor(domain?: string, appName?: string, qualityInfo?: Array<QualityInfo>) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['quality_info'] = qualityInfo;
    }
    public withDomain(domain: string): StreamTranscodingTemplate {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): StreamTranscodingTemplate {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withTransType(transType: StreamTranscodingTemplateTransTypeEnum | string): StreamTranscodingTemplate {
        this['trans_type'] = transType;
        return this;
    }
    public set transType(transType: StreamTranscodingTemplateTransTypeEnum | string  | undefined) {
        this['trans_type'] = transType;
    }
    public get transType(): StreamTranscodingTemplateTransTypeEnum | string | undefined {
        return this['trans_type'];
    }
    public withQualityInfo(qualityInfo: Array<QualityInfo>): StreamTranscodingTemplate {
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

/**
    * @export
    * @enum {string}
    */
export enum StreamTranscodingTemplateTransTypeEnum {
    PLAY = 'play',
    PUBLISH = 'publish'
}

import { QualityInfo } from './QualityInfo';


export class StreamTranscodingTemplate {
    public domain: string;
    private 'app_name': string | undefined;
    private 'trans_type'?: StreamTranscodingTemplateTransTypeEnum | undefined;
    private 'quality_info': Array<QualityInfo> | undefined;
    public constructor(domain?: any, appName?: any, qualityInfo?: any) { 
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
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withTransType(transType: StreamTranscodingTemplateTransTypeEnum): StreamTranscodingTemplate {
        this['trans_type'] = transType;
        return this;
    }
    public set transType(transType: StreamTranscodingTemplateTransTypeEnum | undefined) {
        this['trans_type'] = transType;
    }
    public get transType() {
        return this['trans_type'];
    }
    public withQualityInfo(qualityInfo: Array<QualityInfo>): StreamTranscodingTemplate {
        this['quality_info'] = qualityInfo;
        return this;
    }
    public set qualityInfo(qualityInfo: Array<QualityInfo> | undefined) {
        this['quality_info'] = qualityInfo;
    }
    public get qualityInfo() {
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

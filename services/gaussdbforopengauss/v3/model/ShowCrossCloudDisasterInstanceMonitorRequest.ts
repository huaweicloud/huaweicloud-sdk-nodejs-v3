

export class ShowCrossCloudDisasterInstanceMonitorRequest {
    private 'X-Language'?: ShowCrossCloudDisasterInstanceMonitorRequestXLanguageEnum | string;
    private 'instance_id'?: string;
    private 'disaster_type'?: ShowCrossCloudDisasterInstanceMonitorRequestDisasterTypeEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: ShowCrossCloudDisasterInstanceMonitorRequestXLanguageEnum | string): ShowCrossCloudDisasterInstanceMonitorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCrossCloudDisasterInstanceMonitorRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCrossCloudDisasterInstanceMonitorRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowCrossCloudDisasterInstanceMonitorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDisasterType(disasterType: ShowCrossCloudDisasterInstanceMonitorRequestDisasterTypeEnum | string): ShowCrossCloudDisasterInstanceMonitorRequest {
        this['disaster_type'] = disasterType;
        return this;
    }
    public set disasterType(disasterType: ShowCrossCloudDisasterInstanceMonitorRequestDisasterTypeEnum | string  | undefined) {
        this['disaster_type'] = disasterType;
    }
    public get disasterType(): ShowCrossCloudDisasterInstanceMonitorRequestDisasterTypeEnum | string | undefined {
        return this['disaster_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterInstanceMonitorRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterInstanceMonitorRequestDisasterTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}

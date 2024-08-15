

export class ReportCustomEventRequestBody {
    public alarmId?: string;
    public alarmName?: string;
    public alarmLevel?: ReportCustomEventRequestBodyAlarmLevelEnum | string;
    public time?: number;
    public nameSpace?: string;
    public regionId?: string;
    public applicationId?: string;
    public resourceName?: string;
    public resourceId?: string;
    public alarmDesc?: string;
    private 'URL'?: string;
    public alarmStatus?: ReportCustomEventRequestBodyAlarmStatusEnum | string;
    public alarmSource?: string;
    public additional?: object;
    public constructor(alarmId?: string, alarmName?: string, alarmLevel?: string, time?: number, nameSpace?: string, alarmDesc?: string, alarmSource?: string) { 
        this['alarmId'] = alarmId;
        this['alarmName'] = alarmName;
        this['alarmLevel'] = alarmLevel;
        this['time'] = time;
        this['nameSpace'] = nameSpace;
        this['alarmDesc'] = alarmDesc;
        this['alarmSource'] = alarmSource;
    }
    public withAlarmId(alarmId: string): ReportCustomEventRequestBody {
        this['alarmId'] = alarmId;
        return this;
    }
    public withAlarmName(alarmName: string): ReportCustomEventRequestBody {
        this['alarmName'] = alarmName;
        return this;
    }
    public withAlarmLevel(alarmLevel: ReportCustomEventRequestBodyAlarmLevelEnum | string): ReportCustomEventRequestBody {
        this['alarmLevel'] = alarmLevel;
        return this;
    }
    public withTime(time: number): ReportCustomEventRequestBody {
        this['time'] = time;
        return this;
    }
    public withNameSpace(nameSpace: string): ReportCustomEventRequestBody {
        this['nameSpace'] = nameSpace;
        return this;
    }
    public withRegionId(regionId: string): ReportCustomEventRequestBody {
        this['regionId'] = regionId;
        return this;
    }
    public withApplicationId(applicationId: string): ReportCustomEventRequestBody {
        this['applicationId'] = applicationId;
        return this;
    }
    public withResourceName(resourceName: string): ReportCustomEventRequestBody {
        this['resourceName'] = resourceName;
        return this;
    }
    public withResourceId(resourceId: string): ReportCustomEventRequestBody {
        this['resourceId'] = resourceId;
        return this;
    }
    public withAlarmDesc(alarmDesc: string): ReportCustomEventRequestBody {
        this['alarmDesc'] = alarmDesc;
        return this;
    }
    public withUrl(url: string): ReportCustomEventRequestBody {
        this['URL'] = url;
        return this;
    }
    public set url(url: string  | undefined) {
        this['URL'] = url;
    }
    public get url(): string | undefined {
        return this['URL'];
    }
    public withAlarmStatus(alarmStatus: ReportCustomEventRequestBodyAlarmStatusEnum | string): ReportCustomEventRequestBody {
        this['alarmStatus'] = alarmStatus;
        return this;
    }
    public withAlarmSource(alarmSource: string): ReportCustomEventRequestBody {
        this['alarmSource'] = alarmSource;
        return this;
    }
    public withAdditional(additional: object): ReportCustomEventRequestBody {
        this['additional'] = additional;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReportCustomEventRequestBodyAlarmLevelEnum {
    CRITICAL = 'Critical',
    MAJOR = 'Major',
    MINOR = 'Minor',
    INFO = 'Info'
}
/**
    * @export
    * @enum {string}
    */
export enum ReportCustomEventRequestBodyAlarmStatusEnum {
    ALARM = 'alarm',
    OK = 'ok'
}

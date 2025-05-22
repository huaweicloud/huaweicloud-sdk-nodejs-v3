import { SCTE35StatisticReq } from './SCTE35StatisticReq';


export class ShowChannelStatisticReq {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public type?: ShowChannelStatisticReqTypeEnum | string;
    public scte35?: SCTE35StatisticReq;
    public constructor(domain?: string, appName?: string, id?: string, type?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
        this['type'] = type;
    }
    public withDomain(domain: string): ShowChannelStatisticReq {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ShowChannelStatisticReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ShowChannelStatisticReq {
        this['id'] = id;
        return this;
    }
    public withType(type: ShowChannelStatisticReqTypeEnum | string): ShowChannelStatisticReq {
        this['type'] = type;
        return this;
    }
    public withScte35(scte35: SCTE35StatisticReq): ShowChannelStatisticReq {
        this['scte35'] = scte35;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowChannelStatisticReqTypeEnum {
    SCTE35 = 'scte35'
}

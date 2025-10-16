

export class ListTranscodeConcurrencyNumRequest {
    private 'publish_domains'?: Array<string>;
    public app?: string;
    public interval?: ListTranscodeConcurrencyNumRequestIntervalEnum | number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(publishDomains?: Array<string>) { 
        this['publish_domains'] = publishDomains;
    }
    public withPublishDomains(publishDomains: Array<string>): ListTranscodeConcurrencyNumRequest {
        this['publish_domains'] = publishDomains;
        return this;
    }
    public set publishDomains(publishDomains: Array<string>  | undefined) {
        this['publish_domains'] = publishDomains;
    }
    public get publishDomains(): Array<string> | undefined {
        return this['publish_domains'];
    }
    public withApp(app: string): ListTranscodeConcurrencyNumRequest {
        this['app'] = app;
        return this;
    }
    public withInterval(interval: ListTranscodeConcurrencyNumRequestIntervalEnum | number): ListTranscodeConcurrencyNumRequest {
        this['interval'] = interval;
        return this;
    }
    public withStartTime(startTime: string): ListTranscodeConcurrencyNumRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTranscodeConcurrencyNumRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTranscodeConcurrencyNumRequestIntervalEnum {
    NUMBER_60 = 60,
    NUMBER_300 = 300,
    NUMBER_3600 = 3600
}

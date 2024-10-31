

export class GetCreateFirewallJobResponseData {
    public id?: string;
    public status?: GetCreateFirewallJobResponseDataStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withId(id: string): GetCreateFirewallJobResponseData {
        this['id'] = id;
        return this;
    }
    public withStatus(status: GetCreateFirewallJobResponseDataStatusEnum | string): GetCreateFirewallJobResponseData {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): GetCreateFirewallJobResponseData {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): GetCreateFirewallJobResponseData {
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
export enum GetCreateFirewallJobResponseDataStatusEnum {
    RUNNING = 'Running',
    SUCCESS = 'Success',
    FAILED = 'Failed'
}

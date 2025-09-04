

export class ScheduleTask {
    private 'device_ids'?: Array<string>;
    public action?: string;
    public paras?: object;
    public constructor(deviceIds?: Array<string>, action?: string, paras?: object) { 
        this['device_ids'] = deviceIds;
        this['action'] = action;
        this['paras'] = paras;
    }
    public withDeviceIds(deviceIds: Array<string>): ScheduleTask {
        this['device_ids'] = deviceIds;
        return this;
    }
    public set deviceIds(deviceIds: Array<string>  | undefined) {
        this['device_ids'] = deviceIds;
    }
    public get deviceIds(): Array<string> | undefined {
        return this['device_ids'];
    }
    public withAction(action: string): ScheduleTask {
        this['action'] = action;
        return this;
    }
    public withParas(paras: object): ScheduleTask {
        this['paras'] = paras;
        return this;
    }
}
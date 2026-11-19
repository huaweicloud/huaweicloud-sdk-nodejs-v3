

export class BinlogInfo {
    public id?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public size?: number;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withId(id: string): BinlogInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BinlogInfo {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): BinlogInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): BinlogInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withSize(size: number): BinlogInfo {
        this['size'] = size;
        return this;
    }
    public withBeginTime(beginTime: string): BinlogInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BinlogInfo {
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
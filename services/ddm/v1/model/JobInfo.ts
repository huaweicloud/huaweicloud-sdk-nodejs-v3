import { Instance } from './Instance';


export class JobInfo {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'created_time'?: string;
    private 'end_time'?: string;
    public process?: string;
    public instance?: Instance;
    public constructor(id?: string, name?: string, status?: string, createdTime?: string, endTime?: string, instance?: Instance) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['created_time'] = createdTime;
        this['end_time'] = endTime;
        this['instance'] = instance;
    }
    public withId(id: string): JobInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): JobInfo {
        this['status'] = status;
        return this;
    }
    public withCreatedTime(createdTime: string): JobInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withEndTime(endTime: string): JobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withProcess(process: string): JobInfo {
        this['process'] = process;
        return this;
    }
    public withInstance(instance: Instance): JobInfo {
        this['instance'] = instance;
        return this;
    }
}
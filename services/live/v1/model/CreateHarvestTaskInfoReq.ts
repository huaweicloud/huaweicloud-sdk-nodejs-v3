import { VodPackageInfo } from './VodPackageInfo';


export class CreateHarvestTaskInfoReq {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'event_name'?: string;
    private 'task_desc'?: string;
    private 'package_info'?: VodPackageInfo;
    public constructor(domain?: string, appName?: string, id?: string, startTime?: number, endTime?: number, eventName?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['event_name'] = eventName;
    }
    public withDomain(domain: string): CreateHarvestTaskInfoReq {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): CreateHarvestTaskInfoReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): CreateHarvestTaskInfoReq {
        this['id'] = id;
        return this;
    }
    public withStartTime(startTime: number): CreateHarvestTaskInfoReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): CreateHarvestTaskInfoReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEventName(eventName: string): CreateHarvestTaskInfoReq {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withTaskDesc(taskDesc: string): CreateHarvestTaskInfoReq {
        this['task_desc'] = taskDesc;
        return this;
    }
    public set taskDesc(taskDesc: string  | undefined) {
        this['task_desc'] = taskDesc;
    }
    public get taskDesc(): string | undefined {
        return this['task_desc'];
    }
    public withPackageInfo(packageInfo: VodPackageInfo): CreateHarvestTaskInfoReq {
        this['package_info'] = packageInfo;
        return this;
    }
    public set packageInfo(packageInfo: VodPackageInfo  | undefined) {
        this['package_info'] = packageInfo;
    }
    public get packageInfo(): VodPackageInfo | undefined {
        return this['package_info'];
    }
}
import { TrendView } from './TrendView';


export class TrendParam {
    private 'view_config'?: TrendView;
    private 'instance_id'?: number;
    private 'monitor_item_id'?: number;
    private 'env_id'?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(viewConfig?: TrendView, envId?: number, startTime?: string, endTime?: string) { 
        this['view_config'] = viewConfig;
        this['env_id'] = envId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withViewConfig(viewConfig: TrendView): TrendParam {
        this['view_config'] = viewConfig;
        return this;
    }
    public set viewConfig(viewConfig: TrendView  | undefined) {
        this['view_config'] = viewConfig;
    }
    public get viewConfig(): TrendView | undefined {
        return this['view_config'];
    }
    public withInstanceId(instanceId: number): TrendParam {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withMonitorItemId(monitorItemId: number): TrendParam {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withEnvId(envId: number): TrendParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withStartTime(startTime: string): TrendParam {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TrendParam {
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
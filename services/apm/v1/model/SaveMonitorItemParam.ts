import { ConfigItem } from './ConfigItem';


export class SaveMonitorItemParam {
    private 'monitor_item_id'?: number;
    public interval?: number;
    private 'env_id'?: number;
    private 'config_value_list'?: Array<ConfigItem>;
    public constructor(monitorItemId?: number, envId?: number) { 
        this['monitor_item_id'] = monitorItemId;
        this['env_id'] = envId;
    }
    public withMonitorItemId(monitorItemId: number): SaveMonitorItemParam {
        this['monitor_item_id'] = monitorItemId;
        return this;
    }
    public set monitorItemId(monitorItemId: number  | undefined) {
        this['monitor_item_id'] = monitorItemId;
    }
    public get monitorItemId(): number | undefined {
        return this['monitor_item_id'];
    }
    public withInterval(interval: number): SaveMonitorItemParam {
        this['interval'] = interval;
        return this;
    }
    public withEnvId(envId: number): SaveMonitorItemParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withConfigValueList(configValueList: Array<ConfigItem>): SaveMonitorItemParam {
        this['config_value_list'] = configValueList;
        return this;
    }
    public set configValueList(configValueList: Array<ConfigItem>  | undefined) {
        this['config_value_list'] = configValueList;
    }
    public get configValueList(): Array<ConfigItem> | undefined {
        return this['config_value_list'];
    }
}
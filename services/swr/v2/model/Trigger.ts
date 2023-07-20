import { TriggerHistories } from './TriggerHistories';


export class Trigger {
    public action?: string;
    private 'app_type'?: string;
    public application?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_ns'?: string;
    public condition?: string;
    public container?: string;
    private 'created_at'?: string;
    private 'creator_name'?: string;
    public enable?: string;
    public name?: string;
    private 'trigger_history'?: Array<TriggerHistories>;
    private 'trigger_mode'?: string;
    private 'trigger_type'?: string;
    public constructor(action?: string, appType?: string, application?: string, clusterId?: string, clusterName?: string, clusterNs?: string, condition?: string, container?: string, createdAt?: string, creatorName?: string, enable?: string, name?: string, triggerHistory?: Array<TriggerHistories>, triggerMode?: string, triggerType?: string) { 
        this['action'] = action;
        this['app_type'] = appType;
        this['application'] = application;
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
        this['cluster_ns'] = clusterNs;
        this['condition'] = condition;
        this['container'] = container;
        this['created_at'] = createdAt;
        this['creator_name'] = creatorName;
        this['enable'] = enable;
        this['name'] = name;
        this['trigger_history'] = triggerHistory;
        this['trigger_mode'] = triggerMode;
        this['trigger_type'] = triggerType;
    }
    public withAction(action: string): Trigger {
        this['action'] = action;
        return this;
    }
    public withAppType(appType: string): Trigger {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withApplication(application: string): Trigger {
        this['application'] = application;
        return this;
    }
    public withClusterId(clusterId: string): Trigger {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): Trigger {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterNs(clusterNs: string): Trigger {
        this['cluster_ns'] = clusterNs;
        return this;
    }
    public set clusterNs(clusterNs: string  | undefined) {
        this['cluster_ns'] = clusterNs;
    }
    public get clusterNs(): string | undefined {
        return this['cluster_ns'];
    }
    public withCondition(condition: string): Trigger {
        this['condition'] = condition;
        return this;
    }
    public withContainer(container: string): Trigger {
        this['container'] = container;
        return this;
    }
    public withCreatedAt(createdAt: string): Trigger {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCreatorName(creatorName: string): Trigger {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withEnable(enable: string): Trigger {
        this['enable'] = enable;
        return this;
    }
    public withName(name: string): Trigger {
        this['name'] = name;
        return this;
    }
    public withTriggerHistory(triggerHistory: Array<TriggerHistories>): Trigger {
        this['trigger_history'] = triggerHistory;
        return this;
    }
    public set triggerHistory(triggerHistory: Array<TriggerHistories>  | undefined) {
        this['trigger_history'] = triggerHistory;
    }
    public get triggerHistory(): Array<TriggerHistories> | undefined {
        return this['trigger_history'];
    }
    public withTriggerMode(triggerMode: string): Trigger {
        this['trigger_mode'] = triggerMode;
        return this;
    }
    public set triggerMode(triggerMode: string  | undefined) {
        this['trigger_mode'] = triggerMode;
    }
    public get triggerMode(): string | undefined {
        return this['trigger_mode'];
    }
    public withTriggerType(triggerType: string): Trigger {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
}
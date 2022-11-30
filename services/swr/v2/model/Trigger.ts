import { TriggerHistories } from './TriggerHistories';


export class Trigger {
    public action: string;
    private 'app_type': string | undefined;
    public application: string;
    private 'cluster_id': string | undefined;
    private 'cluster_name': string | undefined;
    private 'cluster_ns': string | undefined;
    public condition: string;
    public container: string;
    private 'created_at': string | undefined;
    private 'creator_name': string | undefined;
    public enable: string;
    public name: string;
    private 'trigger_history': Array<TriggerHistories> | undefined;
    private 'trigger_mode': string | undefined;
    private 'trigger_type': string | undefined;
    public constructor(action?: any, appType?: any, application?: any, clusterId?: any, clusterName?: any, clusterNs?: any, condition?: any, container?: any, createdAt?: any, creatorName?: any, enable?: any, name?: any, triggerHistory?: any, triggerMode?: any, triggerType?: any) { 
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
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
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
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): Trigger {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withClusterNs(clusterNs: string): Trigger {
        this['cluster_ns'] = clusterNs;
        return this;
    }
    public set clusterNs(clusterNs: string | undefined) {
        this['cluster_ns'] = clusterNs;
    }
    public get clusterNs() {
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
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withCreatorName(creatorName: string): Trigger {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
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
    public set triggerHistory(triggerHistory: Array<TriggerHistories> | undefined) {
        this['trigger_history'] = triggerHistory;
    }
    public get triggerHistory() {
        return this['trigger_history'];
    }
    public withTriggerMode(triggerMode: string): Trigger {
        this['trigger_mode'] = triggerMode;
        return this;
    }
    public set triggerMode(triggerMode: string | undefined) {
        this['trigger_mode'] = triggerMode;
    }
    public get triggerMode() {
        return this['trigger_mode'];
    }
    public withTriggerType(triggerType: string): Trigger {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType() {
        return this['trigger_type'];
    }
}


export class TriggerHistories {
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
    public detail: string;
    public result: string;
    public tag: string;
    public constructor(action?: any, appType?: any, application?: any, clusterId?: any, clusterName?: any, clusterNs?: any, condition?: any, container?: any, createdAt?: any, creatorName?: any, detail?: any, result?: any, tag?: any) { 
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
        this['detail'] = detail;
        this['result'] = result;
        this['tag'] = tag;
    }
    public withAction(action: string): TriggerHistories {
        this['action'] = action;
        return this;
    }
    public withAppType(appType: string): TriggerHistories {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
        return this['app_type'];
    }
    public withApplication(application: string): TriggerHistories {
        this['application'] = application;
        return this;
    }
    public withClusterId(clusterId: string): TriggerHistories {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): TriggerHistories {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withClusterNs(clusterNs: string): TriggerHistories {
        this['cluster_ns'] = clusterNs;
        return this;
    }
    public set clusterNs(clusterNs: string | undefined) {
        this['cluster_ns'] = clusterNs;
    }
    public get clusterNs() {
        return this['cluster_ns'];
    }
    public withCondition(condition: string): TriggerHistories {
        this['condition'] = condition;
        return this;
    }
    public withContainer(container: string): TriggerHistories {
        this['container'] = container;
        return this;
    }
    public withCreatedAt(createdAt: string): TriggerHistories {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withCreatorName(creatorName: string): TriggerHistories {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withDetail(detail: string): TriggerHistories {
        this['detail'] = detail;
        return this;
    }
    public withResult(result: string): TriggerHistories {
        this['result'] = result;
        return this;
    }
    public withTag(tag: string): TriggerHistories {
        this['tag'] = tag;
        return this;
    }
}
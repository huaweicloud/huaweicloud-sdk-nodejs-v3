

export class CreateTriggerRequestBody {
    public action?: string;
    private 'app_type'?: string;
    public application?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_ns'?: string;
    public condition?: string;
    public container?: string;
    public enable?: string;
    public name?: string;
    private 'trigger_mode'?: string;
    private 'trigger_type'?: string;
    public constructor(action?: string, appType?: string, application?: string, clusterNs?: string, condition?: string, enable?: string, name?: string, triggerType?: string) { 
        this['action'] = action;
        this['app_type'] = appType;
        this['application'] = application;
        this['cluster_ns'] = clusterNs;
        this['condition'] = condition;
        this['enable'] = enable;
        this['name'] = name;
        this['trigger_type'] = triggerType;
    }
    public withAction(action: string): CreateTriggerRequestBody {
        this['action'] = action;
        return this;
    }
    public withAppType(appType: string): CreateTriggerRequestBody {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withApplication(application: string): CreateTriggerRequestBody {
        this['application'] = application;
        return this;
    }
    public withClusterId(clusterId: string): CreateTriggerRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CreateTriggerRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterNs(clusterNs: string): CreateTriggerRequestBody {
        this['cluster_ns'] = clusterNs;
        return this;
    }
    public set clusterNs(clusterNs: string  | undefined) {
        this['cluster_ns'] = clusterNs;
    }
    public get clusterNs(): string | undefined {
        return this['cluster_ns'];
    }
    public withCondition(condition: string): CreateTriggerRequestBody {
        this['condition'] = condition;
        return this;
    }
    public withContainer(container: string): CreateTriggerRequestBody {
        this['container'] = container;
        return this;
    }
    public withEnable(enable: string): CreateTriggerRequestBody {
        this['enable'] = enable;
        return this;
    }
    public withName(name: string): CreateTriggerRequestBody {
        this['name'] = name;
        return this;
    }
    public withTriggerMode(triggerMode: string): CreateTriggerRequestBody {
        this['trigger_mode'] = triggerMode;
        return this;
    }
    public set triggerMode(triggerMode: string  | undefined) {
        this['trigger_mode'] = triggerMode;
    }
    public get triggerMode(): string | undefined {
        return this['trigger_mode'];
    }
    public withTriggerType(triggerType: string): CreateTriggerRequestBody {
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


export class MicroServiceInfoCCEBase {
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'workload_type'?: MicroServiceInfoCCEBaseWorkloadTypeEnum | string;
    private 'app_name'?: string;
    private 'label_key'?: string;
    private 'label_value'?: string;
    public constructor(clusterId?: string, namespace?: string, workloadType?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['workload_type'] = workloadType;
    }
    public withClusterId(clusterId: string): MicroServiceInfoCCEBase {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): MicroServiceInfoCCEBase {
        this['namespace'] = namespace;
        return this;
    }
    public withWorkloadType(workloadType: MicroServiceInfoCCEBaseWorkloadTypeEnum | string): MicroServiceInfoCCEBase {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: MicroServiceInfoCCEBaseWorkloadTypeEnum | string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): MicroServiceInfoCCEBaseWorkloadTypeEnum | string | undefined {
        return this['workload_type'];
    }
    public withAppName(appName: string): MicroServiceInfoCCEBase {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withLabelKey(labelKey: string): MicroServiceInfoCCEBase {
        this['label_key'] = labelKey;
        return this;
    }
    public set labelKey(labelKey: string  | undefined) {
        this['label_key'] = labelKey;
    }
    public get labelKey(): string | undefined {
        return this['label_key'];
    }
    public withLabelValue(labelValue: string): MicroServiceInfoCCEBase {
        this['label_value'] = labelValue;
        return this;
    }
    public set labelValue(labelValue: string  | undefined) {
        this['label_value'] = labelValue;
    }
    public get labelValue(): string | undefined {
        return this['label_value'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroServiceInfoCCEBaseWorkloadTypeEnum {
    DEPLOYMENT = 'deployment',
    STATEFULSET = 'statefulset',
    DAEMONSET = 'daemonset'
}

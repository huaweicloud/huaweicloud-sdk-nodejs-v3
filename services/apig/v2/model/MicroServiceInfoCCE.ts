import { MicroServiceInfoCCEBase } from './MicroServiceInfoCCEBase';


export class MicroServiceInfoCCE {
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'workload_type'?: MicroServiceInfoCCEWorkloadTypeEnum | string;
    private 'app_name'?: string;
    private 'label_key'?: string;
    private 'label_value'?: string;
    private 'cluster_name'?: string;
    public constructor(clusterId?: string, namespace?: string, workloadType?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['workload_type'] = workloadType;
    }
    public withClusterId(clusterId: string): MicroServiceInfoCCE {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): MicroServiceInfoCCE {
        this['namespace'] = namespace;
        return this;
    }
    public withWorkloadType(workloadType: MicroServiceInfoCCEWorkloadTypeEnum | string): MicroServiceInfoCCE {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: MicroServiceInfoCCEWorkloadTypeEnum | string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): MicroServiceInfoCCEWorkloadTypeEnum | string | undefined {
        return this['workload_type'];
    }
    public withAppName(appName: string): MicroServiceInfoCCE {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withLabelKey(labelKey: string): MicroServiceInfoCCE {
        this['label_key'] = labelKey;
        return this;
    }
    public set labelKey(labelKey: string  | undefined) {
        this['label_key'] = labelKey;
    }
    public get labelKey(): string | undefined {
        return this['label_key'];
    }
    public withLabelValue(labelValue: string): MicroServiceInfoCCE {
        this['label_value'] = labelValue;
        return this;
    }
    public set labelValue(labelValue: string  | undefined) {
        this['label_value'] = labelValue;
    }
    public get labelValue(): string | undefined {
        return this['label_value'];
    }
    public withClusterName(clusterName: string): MicroServiceInfoCCE {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroServiceInfoCCEWorkloadTypeEnum {
    DEPLOYMENT = 'deployment',
    STATEFULSET = 'statefulset',
    DAEMONSET = 'daemonset'
}

import { MicroServiceInfoCCEBase } from './MicroServiceInfoCCEBase';
import { MicroserviceLabel } from './MicroserviceLabel';


export class MicroServiceInfoCCECreate {
    private 'cluster_id'?: string;
    public namespace?: string;
    private 'workload_type'?: MicroServiceInfoCCECreateWorkloadTypeEnum | string;
    private 'app_name'?: string;
    private 'label_key'?: string;
    private 'label_value'?: string;
    public version?: string;
    public port?: number;
    public labels?: Array<MicroserviceLabel>;
    public constructor(clusterId?: string, namespace?: string, workloadType?: string, port?: number) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
        this['workload_type'] = workloadType;
        this['port'] = port;
    }
    public withClusterId(clusterId: string): MicroServiceInfoCCECreate {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): MicroServiceInfoCCECreate {
        this['namespace'] = namespace;
        return this;
    }
    public withWorkloadType(workloadType: MicroServiceInfoCCECreateWorkloadTypeEnum | string): MicroServiceInfoCCECreate {
        this['workload_type'] = workloadType;
        return this;
    }
    public set workloadType(workloadType: MicroServiceInfoCCECreateWorkloadTypeEnum | string  | undefined) {
        this['workload_type'] = workloadType;
    }
    public get workloadType(): MicroServiceInfoCCECreateWorkloadTypeEnum | string | undefined {
        return this['workload_type'];
    }
    public withAppName(appName: string): MicroServiceInfoCCECreate {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withLabelKey(labelKey: string): MicroServiceInfoCCECreate {
        this['label_key'] = labelKey;
        return this;
    }
    public set labelKey(labelKey: string  | undefined) {
        this['label_key'] = labelKey;
    }
    public get labelKey(): string | undefined {
        return this['label_key'];
    }
    public withLabelValue(labelValue: string): MicroServiceInfoCCECreate {
        this['label_value'] = labelValue;
        return this;
    }
    public set labelValue(labelValue: string  | undefined) {
        this['label_value'] = labelValue;
    }
    public get labelValue(): string | undefined {
        return this['label_value'];
    }
    public withVersion(version: string): MicroServiceInfoCCECreate {
        this['version'] = version;
        return this;
    }
    public withPort(port: number): MicroServiceInfoCCECreate {
        this['port'] = port;
        return this;
    }
    public withLabels(labels: Array<MicroserviceLabel>): MicroServiceInfoCCECreate {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MicroServiceInfoCCECreateWorkloadTypeEnum {
    DEPLOYMENT = 'deployment',
    STATEFULSET = 'statefulset',
    DAEMONSET = 'daemonset'
}

import { KubernetesEndpointPodInfo } from './KubernetesEndpointPodInfo';
import { KubernetesEndpointPortInfo } from './KubernetesEndpointPortInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKubernetesEndpointInfoResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'service_name'?: string;
    public namespace?: string;
    private 'creation_timestamp'?: number;
    private 'cluster_name'?: string;
    public labels?: string;
    private 'association_service'?: boolean;
    private 'endpoint_pod_list'?: Array<KubernetesEndpointPodInfo>;
    private 'endpoint_port_list'?: Array<KubernetesEndpointPortInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowKubernetesEndpointInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowKubernetesEndpointInfoResponse {
        this['name'] = name;
        return this;
    }
    public withServiceName(serviceName: string): ShowKubernetesEndpointInfoResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withNamespace(namespace: string): ShowKubernetesEndpointInfoResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): ShowKubernetesEndpointInfoResponse {
        this['creation_timestamp'] = creationTimestamp;
        return this;
    }
    public set creationTimestamp(creationTimestamp: number  | undefined) {
        this['creation_timestamp'] = creationTimestamp;
    }
    public get creationTimestamp(): number | undefined {
        return this['creation_timestamp'];
    }
    public withClusterName(clusterName: string): ShowKubernetesEndpointInfoResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLabels(labels: string): ShowKubernetesEndpointInfoResponse {
        this['labels'] = labels;
        return this;
    }
    public withAssociationService(associationService: boolean): ShowKubernetesEndpointInfoResponse {
        this['association_service'] = associationService;
        return this;
    }
    public set associationService(associationService: boolean  | undefined) {
        this['association_service'] = associationService;
    }
    public get associationService(): boolean | undefined {
        return this['association_service'];
    }
    public withEndpointPodList(endpointPodList: Array<KubernetesEndpointPodInfo>): ShowKubernetesEndpointInfoResponse {
        this['endpoint_pod_list'] = endpointPodList;
        return this;
    }
    public set endpointPodList(endpointPodList: Array<KubernetesEndpointPodInfo>  | undefined) {
        this['endpoint_pod_list'] = endpointPodList;
    }
    public get endpointPodList(): Array<KubernetesEndpointPodInfo> | undefined {
        return this['endpoint_pod_list'];
    }
    public withEndpointPortList(endpointPortList: Array<KubernetesEndpointPortInfo>): ShowKubernetesEndpointInfoResponse {
        this['endpoint_port_list'] = endpointPortList;
        return this;
    }
    public set endpointPortList(endpointPortList: Array<KubernetesEndpointPortInfo>  | undefined) {
        this['endpoint_port_list'] = endpointPortList;
    }
    public get endpointPortList(): Array<KubernetesEndpointPortInfo> | undefined {
        return this['endpoint_port_list'];
    }
}
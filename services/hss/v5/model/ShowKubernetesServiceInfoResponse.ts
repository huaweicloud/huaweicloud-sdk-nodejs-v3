import { KubernetesServicePortInfo } from './KubernetesServicePortInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKubernetesServiceInfoResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'endpoint_name'?: string;
    public namespace?: string;
    private 'creation_timestamp'?: number;
    private 'cluster_name'?: string;
    public labels?: string;
    public type?: string;
    private 'cluster_ip'?: string;
    public selector?: string;
    private 'session_affinity'?: string;
    private 'service_port_list'?: Array<KubernetesServicePortInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowKubernetesServiceInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowKubernetesServiceInfoResponse {
        this['name'] = name;
        return this;
    }
    public withEndpointName(endpointName: string): ShowKubernetesServiceInfoResponse {
        this['endpoint_name'] = endpointName;
        return this;
    }
    public set endpointName(endpointName: string  | undefined) {
        this['endpoint_name'] = endpointName;
    }
    public get endpointName(): string | undefined {
        return this['endpoint_name'];
    }
    public withNamespace(namespace: string): ShowKubernetesServiceInfoResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): ShowKubernetesServiceInfoResponse {
        this['creation_timestamp'] = creationTimestamp;
        return this;
    }
    public set creationTimestamp(creationTimestamp: number  | undefined) {
        this['creation_timestamp'] = creationTimestamp;
    }
    public get creationTimestamp(): number | undefined {
        return this['creation_timestamp'];
    }
    public withClusterName(clusterName: string): ShowKubernetesServiceInfoResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withLabels(labels: string): ShowKubernetesServiceInfoResponse {
        this['labels'] = labels;
        return this;
    }
    public withType(type: string): ShowKubernetesServiceInfoResponse {
        this['type'] = type;
        return this;
    }
    public withClusterIp(clusterIp: string): ShowKubernetesServiceInfoResponse {
        this['cluster_ip'] = clusterIp;
        return this;
    }
    public set clusterIp(clusterIp: string  | undefined) {
        this['cluster_ip'] = clusterIp;
    }
    public get clusterIp(): string | undefined {
        return this['cluster_ip'];
    }
    public withSelector(selector: string): ShowKubernetesServiceInfoResponse {
        this['selector'] = selector;
        return this;
    }
    public withSessionAffinity(sessionAffinity: string): ShowKubernetesServiceInfoResponse {
        this['session_affinity'] = sessionAffinity;
        return this;
    }
    public set sessionAffinity(sessionAffinity: string  | undefined) {
        this['session_affinity'] = sessionAffinity;
    }
    public get sessionAffinity(): string | undefined {
        return this['session_affinity'];
    }
    public withServicePortList(servicePortList: Array<KubernetesServicePortInfo>): ShowKubernetesServiceInfoResponse {
        this['service_port_list'] = servicePortList;
        return this;
    }
    public set servicePortList(servicePortList: Array<KubernetesServicePortInfo>  | undefined) {
        this['service_port_list'] = servicePortList;
    }
    public get servicePortList(): Array<KubernetesServicePortInfo> | undefined {
        return this['service_port_list'];
    }
}
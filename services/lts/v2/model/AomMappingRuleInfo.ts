import { AomMappingfilesInfo } from './AomMappingfilesInfo';


export class AomMappingRuleInfo {
    private 'cluster_id': string | undefined;
    private 'cluster_name': string | undefined;
    private 'deployments_prefix'?: string | undefined;
    public deployments: Array<string>;
    public namespace: string;
    private 'container_name'?: string | undefined;
    public files: Array<AomMappingfilesInfo>;
    public constructor(clusterId?: any, clusterName?: any, deployments?: any, namespace?: any, files?: any) { 
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
        this['deployments'] = deployments;
        this['namespace'] = namespace;
        this['files'] = files;
    }
    public withClusterId(clusterId: string): AomMappingRuleInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): AomMappingRuleInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withDeploymentsPrefix(deploymentsPrefix: string): AomMappingRuleInfo {
        this['deployments_prefix'] = deploymentsPrefix;
        return this;
    }
    public set deploymentsPrefix(deploymentsPrefix: string | undefined) {
        this['deployments_prefix'] = deploymentsPrefix;
    }
    public get deploymentsPrefix() {
        return this['deployments_prefix'];
    }
    public withDeployments(deployments: Array<string>): AomMappingRuleInfo {
        this['deployments'] = deployments;
        return this;
    }
    public withNamespace(namespace: string): AomMappingRuleInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withContainerName(containerName: string): AomMappingRuleInfo {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName() {
        return this['container_name'];
    }
    public withFiles(files: Array<AomMappingfilesInfo>): AomMappingRuleInfo {
        this['files'] = files;
        return this;
    }
}
import { ActionProgress } from './ActionProgress';


export class ClusterDetail {
    private 'action_progress'?: ActionProgress | undefined;
    public actions?: Array<string>;
    private 'auth_mode'?: string | undefined;
    private 'az_code'?: string | undefined;
    private 'cluster_id'?: string | undefined;
    private 'cluster_name'?: string | undefined;
    public created?: string;
    private 'enable_dfv'?: string | undefined;
    private 'enable_free'?: string | undefined;
    private 'enable_lemon'?: string | undefined;
    private 'enable_openTSDB'?: string | undefined;
    public status?: string;
    public tags?: string;
    public version?: string;
    private 'zookeeper_link'?: string | undefined;
    public constructor() { 
    }
    public withActionProgress(actionProgress: ActionProgress): ClusterDetail {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: ActionProgress | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress() {
        return this['action_progress'];
    }
    public withActions(actions: Array<string>): ClusterDetail {
        this['actions'] = actions;
        return this;
    }
    public withAuthMode(authMode: string): ClusterDetail {
        this['auth_mode'] = authMode;
        return this;
    }
    public set authMode(authMode: string | undefined) {
        this['auth_mode'] = authMode;
    }
    public get authMode() {
        return this['auth_mode'];
    }
    public withAzCode(azCode: string): ClusterDetail {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode() {
        return this['az_code'];
    }
    public withClusterId(clusterId: string): ClusterDetail {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClusterDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withCreated(created: string): ClusterDetail {
        this['created'] = created;
        return this;
    }
    public withEnableDfv(enableDfv: string): ClusterDetail {
        this['enable_dfv'] = enableDfv;
        return this;
    }
    public set enableDfv(enableDfv: string | undefined) {
        this['enable_dfv'] = enableDfv;
    }
    public get enableDfv() {
        return this['enable_dfv'];
    }
    public withEnableFree(enableFree: string): ClusterDetail {
        this['enable_free'] = enableFree;
        return this;
    }
    public set enableFree(enableFree: string | undefined) {
        this['enable_free'] = enableFree;
    }
    public get enableFree() {
        return this['enable_free'];
    }
    public withEnableLemon(enableLemon: string): ClusterDetail {
        this['enable_lemon'] = enableLemon;
        return this;
    }
    public set enableLemon(enableLemon: string | undefined) {
        this['enable_lemon'] = enableLemon;
    }
    public get enableLemon() {
        return this['enable_lemon'];
    }
    public withEnableOpenTSDB(enableOpenTSDB: string): ClusterDetail {
        this['enable_openTSDB'] = enableOpenTSDB;
        return this;
    }
    public set enableOpenTSDB(enableOpenTSDB: string | undefined) {
        this['enable_openTSDB'] = enableOpenTSDB;
    }
    public get enableOpenTSDB() {
        return this['enable_openTSDB'];
    }
    public withStatus(status: string): ClusterDetail {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): ClusterDetail {
        this['tags'] = tags;
        return this;
    }
    public withVersion(version: string): ClusterDetail {
        this['version'] = version;
        return this;
    }
    public withZookeeperLink(zookeeperLink: string): ClusterDetail {
        this['zookeeper_link'] = zookeeperLink;
        return this;
    }
    public set zookeeperLink(zookeeperLink: string | undefined) {
        this['zookeeper_link'] = zookeeperLink;
    }
    public get zookeeperLink() {
        return this['zookeeper_link'];
    }
}
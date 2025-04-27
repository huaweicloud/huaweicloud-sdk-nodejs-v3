import { ActionProgress } from './ActionProgress';


export class ClusterDetail {
    private 'action_progress'?: ActionProgress;
    public actions?: Array<string>;
    public localHdfs?: boolean;
    private 'is_show_222_version_feature'?: string;
    public actionsCount?: Array<string>;
    private 'support_auth'?: boolean;
    private 'eps_id'?: string;
    private 'cluster_type'?: string;
    private 'order_id'?: string;
    private 'order_status'?: string;
    private 'is_local_hdfs'?: boolean;
    private 'ck_deploy_mode'?: string;
    private 'flavor_type_en'?: string;
    private 'enable_hot_cold_feature_cluster'?: string;
    private 'enable_hot_cold_feature'?: string;
    private 'data_flavor'?: string;
    private 'control_flavor'?: string;
    private 'data_node_num'?: string;
    private 'control_node_num'?: string;
    private 'data_node_total_storage_size'?: string;
    private 'control_node_total_storage_size'?: string;
    private 'cold_storage_used_size'?: string;
    private 'data_node_volume_type'?: string;
    private 'control_node_volume_type'?: string;
    private 'auth_mode'?: string;
    private 'az_code'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public created?: string;
    private 'enable_dfv'?: string;
    private 'enable_free'?: string;
    private 'enable_lemon'?: string;
    private 'enable_openTSDB'?: string;
    public status?: string;
    public tags?: string;
    public version?: string;
    private 'zookeeper_link'?: string;
    public constructor() { 
    }
    public withActionProgress(actionProgress: ActionProgress): ClusterDetail {
        this['action_progress'] = actionProgress;
        return this;
    }
    public set actionProgress(actionProgress: ActionProgress  | undefined) {
        this['action_progress'] = actionProgress;
    }
    public get actionProgress(): ActionProgress | undefined {
        return this['action_progress'];
    }
    public withActions(actions: Array<string>): ClusterDetail {
        this['actions'] = actions;
        return this;
    }
    public withLocalHdfs(localHdfs: boolean): ClusterDetail {
        this['localHdfs'] = localHdfs;
        return this;
    }
    public withIsShow222VersionFeature(isShow222VersionFeature: string): ClusterDetail {
        this['is_show_222_version_feature'] = isShow222VersionFeature;
        return this;
    }
    public set isShow222VersionFeature(isShow222VersionFeature: string  | undefined) {
        this['is_show_222_version_feature'] = isShow222VersionFeature;
    }
    public get isShow222VersionFeature(): string | undefined {
        return this['is_show_222_version_feature'];
    }
    public withActionsCount(actionsCount: Array<string>): ClusterDetail {
        this['actionsCount'] = actionsCount;
        return this;
    }
    public withSupportAuth(supportAuth: boolean): ClusterDetail {
        this['support_auth'] = supportAuth;
        return this;
    }
    public set supportAuth(supportAuth: boolean  | undefined) {
        this['support_auth'] = supportAuth;
    }
    public get supportAuth(): boolean | undefined {
        return this['support_auth'];
    }
    public withEpsId(epsId: string): ClusterDetail {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withClusterType(clusterType: string): ClusterDetail {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withOrderId(orderId: string): ClusterDetail {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOrderStatus(orderStatus: string): ClusterDetail {
        this['order_status'] = orderStatus;
        return this;
    }
    public set orderStatus(orderStatus: string  | undefined) {
        this['order_status'] = orderStatus;
    }
    public get orderStatus(): string | undefined {
        return this['order_status'];
    }
    public withIsLocalHdfs(isLocalHdfs: boolean): ClusterDetail {
        this['is_local_hdfs'] = isLocalHdfs;
        return this;
    }
    public set isLocalHdfs(isLocalHdfs: boolean  | undefined) {
        this['is_local_hdfs'] = isLocalHdfs;
    }
    public get isLocalHdfs(): boolean | undefined {
        return this['is_local_hdfs'];
    }
    public withCkDeployMode(ckDeployMode: string): ClusterDetail {
        this['ck_deploy_mode'] = ckDeployMode;
        return this;
    }
    public set ckDeployMode(ckDeployMode: string  | undefined) {
        this['ck_deploy_mode'] = ckDeployMode;
    }
    public get ckDeployMode(): string | undefined {
        return this['ck_deploy_mode'];
    }
    public withFlavorTypeEn(flavorTypeEn: string): ClusterDetail {
        this['flavor_type_en'] = flavorTypeEn;
        return this;
    }
    public set flavorTypeEn(flavorTypeEn: string  | undefined) {
        this['flavor_type_en'] = flavorTypeEn;
    }
    public get flavorTypeEn(): string | undefined {
        return this['flavor_type_en'];
    }
    public withEnableHotColdFeatureCluster(enableHotColdFeatureCluster: string): ClusterDetail {
        this['enable_hot_cold_feature_cluster'] = enableHotColdFeatureCluster;
        return this;
    }
    public set enableHotColdFeatureCluster(enableHotColdFeatureCluster: string  | undefined) {
        this['enable_hot_cold_feature_cluster'] = enableHotColdFeatureCluster;
    }
    public get enableHotColdFeatureCluster(): string | undefined {
        return this['enable_hot_cold_feature_cluster'];
    }
    public withEnableHotColdFeature(enableHotColdFeature: string): ClusterDetail {
        this['enable_hot_cold_feature'] = enableHotColdFeature;
        return this;
    }
    public set enableHotColdFeature(enableHotColdFeature: string  | undefined) {
        this['enable_hot_cold_feature'] = enableHotColdFeature;
    }
    public get enableHotColdFeature(): string | undefined {
        return this['enable_hot_cold_feature'];
    }
    public withDataFlavor(dataFlavor: string): ClusterDetail {
        this['data_flavor'] = dataFlavor;
        return this;
    }
    public set dataFlavor(dataFlavor: string  | undefined) {
        this['data_flavor'] = dataFlavor;
    }
    public get dataFlavor(): string | undefined {
        return this['data_flavor'];
    }
    public withControlFlavor(controlFlavor: string): ClusterDetail {
        this['control_flavor'] = controlFlavor;
        return this;
    }
    public set controlFlavor(controlFlavor: string  | undefined) {
        this['control_flavor'] = controlFlavor;
    }
    public get controlFlavor(): string | undefined {
        return this['control_flavor'];
    }
    public withDataNodeNum(dataNodeNum: string): ClusterDetail {
        this['data_node_num'] = dataNodeNum;
        return this;
    }
    public set dataNodeNum(dataNodeNum: string  | undefined) {
        this['data_node_num'] = dataNodeNum;
    }
    public get dataNodeNum(): string | undefined {
        return this['data_node_num'];
    }
    public withControlNodeNum(controlNodeNum: string): ClusterDetail {
        this['control_node_num'] = controlNodeNum;
        return this;
    }
    public set controlNodeNum(controlNodeNum: string  | undefined) {
        this['control_node_num'] = controlNodeNum;
    }
    public get controlNodeNum(): string | undefined {
        return this['control_node_num'];
    }
    public withDataNodeTotalStorageSize(dataNodeTotalStorageSize: string): ClusterDetail {
        this['data_node_total_storage_size'] = dataNodeTotalStorageSize;
        return this;
    }
    public set dataNodeTotalStorageSize(dataNodeTotalStorageSize: string  | undefined) {
        this['data_node_total_storage_size'] = dataNodeTotalStorageSize;
    }
    public get dataNodeTotalStorageSize(): string | undefined {
        return this['data_node_total_storage_size'];
    }
    public withControlNodeTotalStorageSize(controlNodeTotalStorageSize: string): ClusterDetail {
        this['control_node_total_storage_size'] = controlNodeTotalStorageSize;
        return this;
    }
    public set controlNodeTotalStorageSize(controlNodeTotalStorageSize: string  | undefined) {
        this['control_node_total_storage_size'] = controlNodeTotalStorageSize;
    }
    public get controlNodeTotalStorageSize(): string | undefined {
        return this['control_node_total_storage_size'];
    }
    public withColdStorageUsedSize(coldStorageUsedSize: string): ClusterDetail {
        this['cold_storage_used_size'] = coldStorageUsedSize;
        return this;
    }
    public set coldStorageUsedSize(coldStorageUsedSize: string  | undefined) {
        this['cold_storage_used_size'] = coldStorageUsedSize;
    }
    public get coldStorageUsedSize(): string | undefined {
        return this['cold_storage_used_size'];
    }
    public withDataNodeVolumeType(dataNodeVolumeType: string): ClusterDetail {
        this['data_node_volume_type'] = dataNodeVolumeType;
        return this;
    }
    public set dataNodeVolumeType(dataNodeVolumeType: string  | undefined) {
        this['data_node_volume_type'] = dataNodeVolumeType;
    }
    public get dataNodeVolumeType(): string | undefined {
        return this['data_node_volume_type'];
    }
    public withControlNodeVolumeType(controlNodeVolumeType: string): ClusterDetail {
        this['control_node_volume_type'] = controlNodeVolumeType;
        return this;
    }
    public set controlNodeVolumeType(controlNodeVolumeType: string  | undefined) {
        this['control_node_volume_type'] = controlNodeVolumeType;
    }
    public get controlNodeVolumeType(): string | undefined {
        return this['control_node_volume_type'];
    }
    public withAuthMode(authMode: string): ClusterDetail {
        this['auth_mode'] = authMode;
        return this;
    }
    public set authMode(authMode: string  | undefined) {
        this['auth_mode'] = authMode;
    }
    public get authMode(): string | undefined {
        return this['auth_mode'];
    }
    public withAzCode(azCode: string): ClusterDetail {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
    public withClusterId(clusterId: string): ClusterDetail {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClusterDetail {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
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
    public set enableDfv(enableDfv: string  | undefined) {
        this['enable_dfv'] = enableDfv;
    }
    public get enableDfv(): string | undefined {
        return this['enable_dfv'];
    }
    public withEnableFree(enableFree: string): ClusterDetail {
        this['enable_free'] = enableFree;
        return this;
    }
    public set enableFree(enableFree: string  | undefined) {
        this['enable_free'] = enableFree;
    }
    public get enableFree(): string | undefined {
        return this['enable_free'];
    }
    public withEnableLemon(enableLemon: string): ClusterDetail {
        this['enable_lemon'] = enableLemon;
        return this;
    }
    public set enableLemon(enableLemon: string  | undefined) {
        this['enable_lemon'] = enableLemon;
    }
    public get enableLemon(): string | undefined {
        return this['enable_lemon'];
    }
    public withEnableOpenTSDB(enableOpenTSDB: string): ClusterDetail {
        this['enable_openTSDB'] = enableOpenTSDB;
        return this;
    }
    public set enableOpenTSDB(enableOpenTSDB: string  | undefined) {
        this['enable_openTSDB'] = enableOpenTSDB;
    }
    public get enableOpenTSDB(): string | undefined {
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
    public set zookeeperLink(zookeeperLink: string  | undefined) {
        this['zookeeper_link'] = zookeeperLink;
    }
    public get zookeeperLink(): string | undefined {
        return this['zookeeper_link'];
    }
}
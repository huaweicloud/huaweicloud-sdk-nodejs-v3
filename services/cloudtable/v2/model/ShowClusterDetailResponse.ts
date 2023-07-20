import { Datastore } from './Datastore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterDetailResponse extends SdkResponse {
    public actions?: Array<string>;
    public datastore?: Datastore;
    private 'enable_openTSDB'?: boolean;
    private 'enable_lemon'?: boolean;
    private 'cluster_name'?: string;
    private 'cu_num'?: string;
    private 'tsd_num'?: string;
    private 'lemon_num'?: string;
    private 'storage_type'?: string;
    private 'storage_quota'?: string;
    private 'used_storage_size'?: string;
    private 'auth_mode'?: boolean;
    private 'enable_dfv'?: boolean;
    public updated?: string;
    public created?: string;
    private 'cluster_id'?: string;
    public status?: string;
    private 'openTSDB_link'?: string;
    private 'tsd_public_endpoint'?: string;
    private 'lemon_link'?: string;
    private 'zookeeper_link'?: string;
    private 'hbase_public_endpoint'?: string;
    private 'is_frozen'?: string;
    private 'vpc_id'?: string;
    private 'sub_net_id'?: string;
    private 'security_group_id'?: string;
    private 'availability_zone'?: string;
    public constructor() { 
        super();
    }
    public withActions(actions: Array<string>): ShowClusterDetailResponse {
        this['actions'] = actions;
        return this;
    }
    public withDatastore(datastore: Datastore): ShowClusterDetailResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withEnableOpenTSDB(enableOpenTSDB: boolean): ShowClusterDetailResponse {
        this['enable_openTSDB'] = enableOpenTSDB;
        return this;
    }
    public set enableOpenTSDB(enableOpenTSDB: boolean  | undefined) {
        this['enable_openTSDB'] = enableOpenTSDB;
    }
    public get enableOpenTSDB(): boolean | undefined {
        return this['enable_openTSDB'];
    }
    public withEnableLemon(enableLemon: boolean): ShowClusterDetailResponse {
        this['enable_lemon'] = enableLemon;
        return this;
    }
    public set enableLemon(enableLemon: boolean  | undefined) {
        this['enable_lemon'] = enableLemon;
    }
    public get enableLemon(): boolean | undefined {
        return this['enable_lemon'];
    }
    public withClusterName(clusterName: string): ShowClusterDetailResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCuNum(cuNum: string): ShowClusterDetailResponse {
        this['cu_num'] = cuNum;
        return this;
    }
    public set cuNum(cuNum: string  | undefined) {
        this['cu_num'] = cuNum;
    }
    public get cuNum(): string | undefined {
        return this['cu_num'];
    }
    public withTsdNum(tsdNum: string): ShowClusterDetailResponse {
        this['tsd_num'] = tsdNum;
        return this;
    }
    public set tsdNum(tsdNum: string  | undefined) {
        this['tsd_num'] = tsdNum;
    }
    public get tsdNum(): string | undefined {
        return this['tsd_num'];
    }
    public withLemonNum(lemonNum: string): ShowClusterDetailResponse {
        this['lemon_num'] = lemonNum;
        return this;
    }
    public set lemonNum(lemonNum: string  | undefined) {
        this['lemon_num'] = lemonNum;
    }
    public get lemonNum(): string | undefined {
        return this['lemon_num'];
    }
    public withStorageType(storageType: string): ShowClusterDetailResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): string | undefined {
        return this['storage_type'];
    }
    public withStorageQuota(storageQuota: string): ShowClusterDetailResponse {
        this['storage_quota'] = storageQuota;
        return this;
    }
    public set storageQuota(storageQuota: string  | undefined) {
        this['storage_quota'] = storageQuota;
    }
    public get storageQuota(): string | undefined {
        return this['storage_quota'];
    }
    public withUsedStorageSize(usedStorageSize: string): ShowClusterDetailResponse {
        this['used_storage_size'] = usedStorageSize;
        return this;
    }
    public set usedStorageSize(usedStorageSize: string  | undefined) {
        this['used_storage_size'] = usedStorageSize;
    }
    public get usedStorageSize(): string | undefined {
        return this['used_storage_size'];
    }
    public withAuthMode(authMode: boolean): ShowClusterDetailResponse {
        this['auth_mode'] = authMode;
        return this;
    }
    public set authMode(authMode: boolean  | undefined) {
        this['auth_mode'] = authMode;
    }
    public get authMode(): boolean | undefined {
        return this['auth_mode'];
    }
    public withEnableDfv(enableDfv: boolean): ShowClusterDetailResponse {
        this['enable_dfv'] = enableDfv;
        return this;
    }
    public set enableDfv(enableDfv: boolean  | undefined) {
        this['enable_dfv'] = enableDfv;
    }
    public get enableDfv(): boolean | undefined {
        return this['enable_dfv'];
    }
    public withUpdated(updated: string): ShowClusterDetailResponse {
        this['updated'] = updated;
        return this;
    }
    public withCreated(created: string): ShowClusterDetailResponse {
        this['created'] = created;
        return this;
    }
    public withClusterId(clusterId: string): ShowClusterDetailResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStatus(status: string): ShowClusterDetailResponse {
        this['status'] = status;
        return this;
    }
    public withOpenTSDBLink(openTSDBLink: string): ShowClusterDetailResponse {
        this['openTSDB_link'] = openTSDBLink;
        return this;
    }
    public set openTSDBLink(openTSDBLink: string  | undefined) {
        this['openTSDB_link'] = openTSDBLink;
    }
    public get openTSDBLink(): string | undefined {
        return this['openTSDB_link'];
    }
    public withTsdPublicEndpoint(tsdPublicEndpoint: string): ShowClusterDetailResponse {
        this['tsd_public_endpoint'] = tsdPublicEndpoint;
        return this;
    }
    public set tsdPublicEndpoint(tsdPublicEndpoint: string  | undefined) {
        this['tsd_public_endpoint'] = tsdPublicEndpoint;
    }
    public get tsdPublicEndpoint(): string | undefined {
        return this['tsd_public_endpoint'];
    }
    public withLemonLink(lemonLink: string): ShowClusterDetailResponse {
        this['lemon_link'] = lemonLink;
        return this;
    }
    public set lemonLink(lemonLink: string  | undefined) {
        this['lemon_link'] = lemonLink;
    }
    public get lemonLink(): string | undefined {
        return this['lemon_link'];
    }
    public withZookeeperLink(zookeeperLink: string): ShowClusterDetailResponse {
        this['zookeeper_link'] = zookeeperLink;
        return this;
    }
    public set zookeeperLink(zookeeperLink: string  | undefined) {
        this['zookeeper_link'] = zookeeperLink;
    }
    public get zookeeperLink(): string | undefined {
        return this['zookeeper_link'];
    }
    public withHbasePublicEndpoint(hbasePublicEndpoint: string): ShowClusterDetailResponse {
        this['hbase_public_endpoint'] = hbasePublicEndpoint;
        return this;
    }
    public set hbasePublicEndpoint(hbasePublicEndpoint: string  | undefined) {
        this['hbase_public_endpoint'] = hbasePublicEndpoint;
    }
    public get hbasePublicEndpoint(): string | undefined {
        return this['hbase_public_endpoint'];
    }
    public withIsFrozen(isFrozen: string): ShowClusterDetailResponse {
        this['is_frozen'] = isFrozen;
        return this;
    }
    public set isFrozen(isFrozen: string  | undefined) {
        this['is_frozen'] = isFrozen;
    }
    public get isFrozen(): string | undefined {
        return this['is_frozen'];
    }
    public withVpcId(vpcId: string): ShowClusterDetailResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubNetId(subNetId: string): ShowClusterDetailResponse {
        this['sub_net_id'] = subNetId;
        return this;
    }
    public set subNetId(subNetId: string  | undefined) {
        this['sub_net_id'] = subNetId;
    }
    public get subNetId(): string | undefined {
        return this['sub_net_id'];
    }
    public withSecurityGroupId(securityGroupId: string): ShowClusterDetailResponse {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withAvailabilityZone(availabilityZone: string): ShowClusterDetailResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}
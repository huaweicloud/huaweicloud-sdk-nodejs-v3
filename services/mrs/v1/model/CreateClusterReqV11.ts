import { AddJobsReqV11 } from './AddJobsReqV11';
import { BootstrapScript } from './BootstrapScript';
import { ComponentAmbV11 } from './ComponentAmbV11';
import { NodeGroupV11 } from './NodeGroupV11';
import { Tag } from './Tag';
import { TaskNodeGroup } from './TaskNodeGroup';


export class CreateClusterReqV11 {
    private 'cluster_version'?: string;
    private 'cluster_name'?: string;
    private 'master_node_num'?: number;
    private 'core_node_num'?: number;
    private 'billing_type'?: CreateClusterReqV11BillingTypeEnum | number;
    private 'data_center'?: string;
    public vpc?: string;
    private 'master_node_size'?: string;
    private 'core_node_size'?: string;
    private 'component_list'?: Array<ComponentAmbV11>;
    private 'available_zone_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'security_groups_id'?: string;
    private 'add_jobs'?: Array<AddJobsReqV11>;
    private 'volume_size'?: number;
    private 'volume_type'?: CreateClusterReqV11VolumeTypeEnum | string;
    private 'master_data_volume_type'?: CreateClusterReqV11MasterDataVolumeTypeEnum | string;
    private 'master_data_volume_size'?: number;
    private 'master_data_volume_count'?: CreateClusterReqV11MasterDataVolumeCountEnum | number;
    private 'core_data_volume_type'?: CreateClusterReqV11CoreDataVolumeTypeEnum | string;
    private 'core_data_volume_size'?: number;
    private 'core_data_volume_count'?: number;
    private 'task_node_groups'?: Array<TaskNodeGroup>;
    private 'bootstrap_scripts'?: Array<BootstrapScript>;
    private 'node_public_cert_name'?: string;
    private 'cluster_admin_secret'?: string;
    private 'cluster_master_secret'?: string;
    private 'safe_mode'?: CreateClusterReqV11SafeModeEnum | number;
    private 'cluster_type'?: CreateClusterReqV11ClusterTypeEnum | number;
    private 'log_collection'?: CreateClusterReqV11LogCollectionEnum | number;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'login_mode'?: CreateClusterReqV11LoginModeEnum | number;
    private 'node_groups'?: Array<NodeGroupV11>;
    public constructor(clusterVersion?: string, clusterName?: string, billingType?: number, dataCenter?: string, vpc?: string, componentList?: Array<ComponentAmbV11>, availableZoneId?: string, vpcId?: string, subnetId?: string, subnetName?: string, safeMode?: number) { 
        this['cluster_version'] = clusterVersion;
        this['cluster_name'] = clusterName;
        this['billing_type'] = billingType;
        this['data_center'] = dataCenter;
        this['vpc'] = vpc;
        this['component_list'] = componentList;
        this['available_zone_id'] = availableZoneId;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['subnet_name'] = subnetName;
        this['safe_mode'] = safeMode;
    }
    public withClusterVersion(clusterVersion: string): CreateClusterReqV11 {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withClusterName(clusterName: string): CreateClusterReqV11 {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withMasterNodeNum(masterNodeNum: number): CreateClusterReqV11 {
        this['master_node_num'] = masterNodeNum;
        return this;
    }
    public set masterNodeNum(masterNodeNum: number  | undefined) {
        this['master_node_num'] = masterNodeNum;
    }
    public get masterNodeNum(): number | undefined {
        return this['master_node_num'];
    }
    public withCoreNodeNum(coreNodeNum: number): CreateClusterReqV11 {
        this['core_node_num'] = coreNodeNum;
        return this;
    }
    public set coreNodeNum(coreNodeNum: number  | undefined) {
        this['core_node_num'] = coreNodeNum;
    }
    public get coreNodeNum(): number | undefined {
        return this['core_node_num'];
    }
    public withBillingType(billingType: CreateClusterReqV11BillingTypeEnum | number): CreateClusterReqV11 {
        this['billing_type'] = billingType;
        return this;
    }
    public set billingType(billingType: CreateClusterReqV11BillingTypeEnum | number  | undefined) {
        this['billing_type'] = billingType;
    }
    public get billingType(): CreateClusterReqV11BillingTypeEnum | number | undefined {
        return this['billing_type'];
    }
    public withDataCenter(dataCenter: string): CreateClusterReqV11 {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withVpc(vpc: string): CreateClusterReqV11 {
        this['vpc'] = vpc;
        return this;
    }
    public withMasterNodeSize(masterNodeSize: string): CreateClusterReqV11 {
        this['master_node_size'] = masterNodeSize;
        return this;
    }
    public set masterNodeSize(masterNodeSize: string  | undefined) {
        this['master_node_size'] = masterNodeSize;
    }
    public get masterNodeSize(): string | undefined {
        return this['master_node_size'];
    }
    public withCoreNodeSize(coreNodeSize: string): CreateClusterReqV11 {
        this['core_node_size'] = coreNodeSize;
        return this;
    }
    public set coreNodeSize(coreNodeSize: string  | undefined) {
        this['core_node_size'] = coreNodeSize;
    }
    public get coreNodeSize(): string | undefined {
        return this['core_node_size'];
    }
    public withComponentList(componentList: Array<ComponentAmbV11>): CreateClusterReqV11 {
        this['component_list'] = componentList;
        return this;
    }
    public set componentList(componentList: Array<ComponentAmbV11>  | undefined) {
        this['component_list'] = componentList;
    }
    public get componentList(): Array<ComponentAmbV11> | undefined {
        return this['component_list'];
    }
    public withAvailableZoneId(availableZoneId: string): CreateClusterReqV11 {
        this['available_zone_id'] = availableZoneId;
        return this;
    }
    public set availableZoneId(availableZoneId: string  | undefined) {
        this['available_zone_id'] = availableZoneId;
    }
    public get availableZoneId(): string | undefined {
        return this['available_zone_id'];
    }
    public withVpcId(vpcId: string): CreateClusterReqV11 {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateClusterReqV11 {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): CreateClusterReqV11 {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withSecurityGroupsId(securityGroupsId: string): CreateClusterReqV11 {
        this['security_groups_id'] = securityGroupsId;
        return this;
    }
    public set securityGroupsId(securityGroupsId: string  | undefined) {
        this['security_groups_id'] = securityGroupsId;
    }
    public get securityGroupsId(): string | undefined {
        return this['security_groups_id'];
    }
    public withAddJobs(addJobs: Array<AddJobsReqV11>): CreateClusterReqV11 {
        this['add_jobs'] = addJobs;
        return this;
    }
    public set addJobs(addJobs: Array<AddJobsReqV11>  | undefined) {
        this['add_jobs'] = addJobs;
    }
    public get addJobs(): Array<AddJobsReqV11> | undefined {
        return this['add_jobs'];
    }
    public withVolumeSize(volumeSize: number): CreateClusterReqV11 {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withVolumeType(volumeType: CreateClusterReqV11VolumeTypeEnum | string): CreateClusterReqV11 {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: CreateClusterReqV11VolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): CreateClusterReqV11VolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withMasterDataVolumeType(masterDataVolumeType: CreateClusterReqV11MasterDataVolumeTypeEnum | string): CreateClusterReqV11 {
        this['master_data_volume_type'] = masterDataVolumeType;
        return this;
    }
    public set masterDataVolumeType(masterDataVolumeType: CreateClusterReqV11MasterDataVolumeTypeEnum | string  | undefined) {
        this['master_data_volume_type'] = masterDataVolumeType;
    }
    public get masterDataVolumeType(): CreateClusterReqV11MasterDataVolumeTypeEnum | string | undefined {
        return this['master_data_volume_type'];
    }
    public withMasterDataVolumeSize(masterDataVolumeSize: number): CreateClusterReqV11 {
        this['master_data_volume_size'] = masterDataVolumeSize;
        return this;
    }
    public set masterDataVolumeSize(masterDataVolumeSize: number  | undefined) {
        this['master_data_volume_size'] = masterDataVolumeSize;
    }
    public get masterDataVolumeSize(): number | undefined {
        return this['master_data_volume_size'];
    }
    public withMasterDataVolumeCount(masterDataVolumeCount: CreateClusterReqV11MasterDataVolumeCountEnum | number): CreateClusterReqV11 {
        this['master_data_volume_count'] = masterDataVolumeCount;
        return this;
    }
    public set masterDataVolumeCount(masterDataVolumeCount: CreateClusterReqV11MasterDataVolumeCountEnum | number  | undefined) {
        this['master_data_volume_count'] = masterDataVolumeCount;
    }
    public get masterDataVolumeCount(): CreateClusterReqV11MasterDataVolumeCountEnum | number | undefined {
        return this['master_data_volume_count'];
    }
    public withCoreDataVolumeType(coreDataVolumeType: CreateClusterReqV11CoreDataVolumeTypeEnum | string): CreateClusterReqV11 {
        this['core_data_volume_type'] = coreDataVolumeType;
        return this;
    }
    public set coreDataVolumeType(coreDataVolumeType: CreateClusterReqV11CoreDataVolumeTypeEnum | string  | undefined) {
        this['core_data_volume_type'] = coreDataVolumeType;
    }
    public get coreDataVolumeType(): CreateClusterReqV11CoreDataVolumeTypeEnum | string | undefined {
        return this['core_data_volume_type'];
    }
    public withCoreDataVolumeSize(coreDataVolumeSize: number): CreateClusterReqV11 {
        this['core_data_volume_size'] = coreDataVolumeSize;
        return this;
    }
    public set coreDataVolumeSize(coreDataVolumeSize: number  | undefined) {
        this['core_data_volume_size'] = coreDataVolumeSize;
    }
    public get coreDataVolumeSize(): number | undefined {
        return this['core_data_volume_size'];
    }
    public withCoreDataVolumeCount(coreDataVolumeCount: number): CreateClusterReqV11 {
        this['core_data_volume_count'] = coreDataVolumeCount;
        return this;
    }
    public set coreDataVolumeCount(coreDataVolumeCount: number  | undefined) {
        this['core_data_volume_count'] = coreDataVolumeCount;
    }
    public get coreDataVolumeCount(): number | undefined {
        return this['core_data_volume_count'];
    }
    public withTaskNodeGroups(taskNodeGroups: Array<TaskNodeGroup>): CreateClusterReqV11 {
        this['task_node_groups'] = taskNodeGroups;
        return this;
    }
    public set taskNodeGroups(taskNodeGroups: Array<TaskNodeGroup>  | undefined) {
        this['task_node_groups'] = taskNodeGroups;
    }
    public get taskNodeGroups(): Array<TaskNodeGroup> | undefined {
        return this['task_node_groups'];
    }
    public withBootstrapScripts(bootstrapScripts: Array<BootstrapScript>): CreateClusterReqV11 {
        this['bootstrap_scripts'] = bootstrapScripts;
        return this;
    }
    public set bootstrapScripts(bootstrapScripts: Array<BootstrapScript>  | undefined) {
        this['bootstrap_scripts'] = bootstrapScripts;
    }
    public get bootstrapScripts(): Array<BootstrapScript> | undefined {
        return this['bootstrap_scripts'];
    }
    public withNodePublicCertName(nodePublicCertName: string): CreateClusterReqV11 {
        this['node_public_cert_name'] = nodePublicCertName;
        return this;
    }
    public set nodePublicCertName(nodePublicCertName: string  | undefined) {
        this['node_public_cert_name'] = nodePublicCertName;
    }
    public get nodePublicCertName(): string | undefined {
        return this['node_public_cert_name'];
    }
    public withClusterAdminSecret(clusterAdminSecret: string): CreateClusterReqV11 {
        this['cluster_admin_secret'] = clusterAdminSecret;
        return this;
    }
    public set clusterAdminSecret(clusterAdminSecret: string  | undefined) {
        this['cluster_admin_secret'] = clusterAdminSecret;
    }
    public get clusterAdminSecret(): string | undefined {
        return this['cluster_admin_secret'];
    }
    public withClusterMasterSecret(clusterMasterSecret: string): CreateClusterReqV11 {
        this['cluster_master_secret'] = clusterMasterSecret;
        return this;
    }
    public set clusterMasterSecret(clusterMasterSecret: string  | undefined) {
        this['cluster_master_secret'] = clusterMasterSecret;
    }
    public get clusterMasterSecret(): string | undefined {
        return this['cluster_master_secret'];
    }
    public withSafeMode(safeMode: CreateClusterReqV11SafeModeEnum | number): CreateClusterReqV11 {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: CreateClusterReqV11SafeModeEnum | number  | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode(): CreateClusterReqV11SafeModeEnum | number | undefined {
        return this['safe_mode'];
    }
    public withClusterType(clusterType: CreateClusterReqV11ClusterTypeEnum | number): CreateClusterReqV11 {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: CreateClusterReqV11ClusterTypeEnum | number  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): CreateClusterReqV11ClusterTypeEnum | number | undefined {
        return this['cluster_type'];
    }
    public withLogCollection(logCollection: CreateClusterReqV11LogCollectionEnum | number): CreateClusterReqV11 {
        this['log_collection'] = logCollection;
        return this;
    }
    public set logCollection(logCollection: CreateClusterReqV11LogCollectionEnum | number  | undefined) {
        this['log_collection'] = logCollection;
    }
    public get logCollection(): CreateClusterReqV11LogCollectionEnum | number | undefined {
        return this['log_collection'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterReqV11 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateClusterReqV11 {
        this['tags'] = tags;
        return this;
    }
    public withLoginMode(loginMode: CreateClusterReqV11LoginModeEnum | number): CreateClusterReqV11 {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: CreateClusterReqV11LoginModeEnum | number  | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode(): CreateClusterReqV11LoginModeEnum | number | undefined {
        return this['login_mode'];
    }
    public withNodeGroups(nodeGroups: Array<NodeGroupV11>): CreateClusterReqV11 {
        this['node_groups'] = nodeGroups;
        return this;
    }
    public set nodeGroups(nodeGroups: Array<NodeGroupV11>  | undefined) {
        this['node_groups'] = nodeGroups;
    }
    public get nodeGroups(): Array<NodeGroupV11> | undefined {
        return this['node_groups'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11BillingTypeEnum {
    NUMBER_12 = 12
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11VolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11MasterDataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11MasterDataVolumeCountEnum {
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11CoreDataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11SafeModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11ClusterTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11LogCollectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV11LoginModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

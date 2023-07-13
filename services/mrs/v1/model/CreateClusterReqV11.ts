import { AddJobsReqV11 } from './AddJobsReqV11';
import { BootstrapScript } from './BootstrapScript';
import { ComponentAmbV11 } from './ComponentAmbV11';
import { NodeGroupV11 } from './NodeGroupV11';
import { Tag } from './Tag';
import { TaskNodeGroup } from './TaskNodeGroup';


export class CreateClusterReqV11 {
    private 'cluster_version': string | undefined;
    private 'cluster_name': string | undefined;
    private 'master_node_num'?: number | undefined;
    private 'core_node_num'?: number | undefined;
    private 'billing_type': CreateClusterReqV11BillingTypeEnum | undefined;
    private 'data_center': string | undefined;
    public vpc: string;
    private 'master_node_size'?: string | undefined;
    private 'core_node_size'?: string | undefined;
    private 'component_list': Array<ComponentAmbV11> | undefined;
    private 'available_zone_id': string | undefined;
    private 'vpc_id': string | undefined;
    private 'subnet_id': string | undefined;
    private 'subnet_name': string | undefined;
    private 'security_groups_id'?: string | undefined;
    private 'add_jobs'?: Array<AddJobsReqV11> | undefined;
    private 'volume_size'?: number | undefined;
    private 'volume_type'?: CreateClusterReqV11VolumeTypeEnum | undefined;
    private 'master_data_volume_type'?: CreateClusterReqV11MasterDataVolumeTypeEnum | undefined;
    private 'master_data_volume_size'?: number | undefined;
    private 'master_data_volume_count'?: CreateClusterReqV11MasterDataVolumeCountEnum | undefined;
    private 'core_data_volume_type'?: CreateClusterReqV11CoreDataVolumeTypeEnum | undefined;
    private 'core_data_volume_size'?: number | undefined;
    private 'core_data_volume_count'?: number | undefined;
    private 'task_node_groups'?: Array<TaskNodeGroup> | undefined;
    private 'bootstrap_scripts'?: Array<BootstrapScript> | undefined;
    private 'node_public_cert_name'?: string | undefined;
    private 'cluster_admin_secret'?: string | undefined;
    private 'cluster_master_secret'?: string | undefined;
    private 'safe_mode': CreateClusterReqV11SafeModeEnum | undefined;
    private 'cluster_type'?: CreateClusterReqV11ClusterTypeEnum | undefined;
    private 'log_collection'?: CreateClusterReqV11LogCollectionEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public tags?: Array<Tag>;
    private 'login_mode'?: CreateClusterReqV11LoginModeEnum | undefined;
    private 'node_groups'?: Array<NodeGroupV11> | undefined;
    public constructor(clusterVersion?: any, clusterName?: any, billingType?: any, dataCenter?: any, vpc?: any, componentList?: any, availableZoneId?: any, vpcId?: any, subnetId?: any, subnetName?: any, safeMode?: any) { 
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
    public set clusterVersion(clusterVersion: string | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion() {
        return this['cluster_version'];
    }
    public withClusterName(clusterName: string): CreateClusterReqV11 {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withMasterNodeNum(masterNodeNum: number): CreateClusterReqV11 {
        this['master_node_num'] = masterNodeNum;
        return this;
    }
    public set masterNodeNum(masterNodeNum: number | undefined) {
        this['master_node_num'] = masterNodeNum;
    }
    public get masterNodeNum() {
        return this['master_node_num'];
    }
    public withCoreNodeNum(coreNodeNum: number): CreateClusterReqV11 {
        this['core_node_num'] = coreNodeNum;
        return this;
    }
    public set coreNodeNum(coreNodeNum: number | undefined) {
        this['core_node_num'] = coreNodeNum;
    }
    public get coreNodeNum() {
        return this['core_node_num'];
    }
    public withBillingType(billingType: CreateClusterReqV11BillingTypeEnum): CreateClusterReqV11 {
        this['billing_type'] = billingType;
        return this;
    }
    public set billingType(billingType: CreateClusterReqV11BillingTypeEnum | undefined) {
        this['billing_type'] = billingType;
    }
    public get billingType() {
        return this['billing_type'];
    }
    public withDataCenter(dataCenter: string): CreateClusterReqV11 {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter() {
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
    public set masterNodeSize(masterNodeSize: string | undefined) {
        this['master_node_size'] = masterNodeSize;
    }
    public get masterNodeSize() {
        return this['master_node_size'];
    }
    public withCoreNodeSize(coreNodeSize: string): CreateClusterReqV11 {
        this['core_node_size'] = coreNodeSize;
        return this;
    }
    public set coreNodeSize(coreNodeSize: string | undefined) {
        this['core_node_size'] = coreNodeSize;
    }
    public get coreNodeSize() {
        return this['core_node_size'];
    }
    public withComponentList(componentList: Array<ComponentAmbV11>): CreateClusterReqV11 {
        this['component_list'] = componentList;
        return this;
    }
    public set componentList(componentList: Array<ComponentAmbV11> | undefined) {
        this['component_list'] = componentList;
    }
    public get componentList() {
        return this['component_list'];
    }
    public withAvailableZoneId(availableZoneId: string): CreateClusterReqV11 {
        this['available_zone_id'] = availableZoneId;
        return this;
    }
    public set availableZoneId(availableZoneId: string | undefined) {
        this['available_zone_id'] = availableZoneId;
    }
    public get availableZoneId() {
        return this['available_zone_id'];
    }
    public withVpcId(vpcId: string): CreateClusterReqV11 {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateClusterReqV11 {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): CreateClusterReqV11 {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName() {
        return this['subnet_name'];
    }
    public withSecurityGroupsId(securityGroupsId: string): CreateClusterReqV11 {
        this['security_groups_id'] = securityGroupsId;
        return this;
    }
    public set securityGroupsId(securityGroupsId: string | undefined) {
        this['security_groups_id'] = securityGroupsId;
    }
    public get securityGroupsId() {
        return this['security_groups_id'];
    }
    public withAddJobs(addJobs: Array<AddJobsReqV11>): CreateClusterReqV11 {
        this['add_jobs'] = addJobs;
        return this;
    }
    public set addJobs(addJobs: Array<AddJobsReqV11> | undefined) {
        this['add_jobs'] = addJobs;
    }
    public get addJobs() {
        return this['add_jobs'];
    }
    public withVolumeSize(volumeSize: number): CreateClusterReqV11 {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize() {
        return this['volume_size'];
    }
    public withVolumeType(volumeType: CreateClusterReqV11VolumeTypeEnum): CreateClusterReqV11 {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: CreateClusterReqV11VolumeTypeEnum | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withMasterDataVolumeType(masterDataVolumeType: CreateClusterReqV11MasterDataVolumeTypeEnum): CreateClusterReqV11 {
        this['master_data_volume_type'] = masterDataVolumeType;
        return this;
    }
    public set masterDataVolumeType(masterDataVolumeType: CreateClusterReqV11MasterDataVolumeTypeEnum | undefined) {
        this['master_data_volume_type'] = masterDataVolumeType;
    }
    public get masterDataVolumeType() {
        return this['master_data_volume_type'];
    }
    public withMasterDataVolumeSize(masterDataVolumeSize: number): CreateClusterReqV11 {
        this['master_data_volume_size'] = masterDataVolumeSize;
        return this;
    }
    public set masterDataVolumeSize(masterDataVolumeSize: number | undefined) {
        this['master_data_volume_size'] = masterDataVolumeSize;
    }
    public get masterDataVolumeSize() {
        return this['master_data_volume_size'];
    }
    public withMasterDataVolumeCount(masterDataVolumeCount: CreateClusterReqV11MasterDataVolumeCountEnum): CreateClusterReqV11 {
        this['master_data_volume_count'] = masterDataVolumeCount;
        return this;
    }
    public set masterDataVolumeCount(masterDataVolumeCount: CreateClusterReqV11MasterDataVolumeCountEnum | undefined) {
        this['master_data_volume_count'] = masterDataVolumeCount;
    }
    public get masterDataVolumeCount() {
        return this['master_data_volume_count'];
    }
    public withCoreDataVolumeType(coreDataVolumeType: CreateClusterReqV11CoreDataVolumeTypeEnum): CreateClusterReqV11 {
        this['core_data_volume_type'] = coreDataVolumeType;
        return this;
    }
    public set coreDataVolumeType(coreDataVolumeType: CreateClusterReqV11CoreDataVolumeTypeEnum | undefined) {
        this['core_data_volume_type'] = coreDataVolumeType;
    }
    public get coreDataVolumeType() {
        return this['core_data_volume_type'];
    }
    public withCoreDataVolumeSize(coreDataVolumeSize: number): CreateClusterReqV11 {
        this['core_data_volume_size'] = coreDataVolumeSize;
        return this;
    }
    public set coreDataVolumeSize(coreDataVolumeSize: number | undefined) {
        this['core_data_volume_size'] = coreDataVolumeSize;
    }
    public get coreDataVolumeSize() {
        return this['core_data_volume_size'];
    }
    public withCoreDataVolumeCount(coreDataVolumeCount: number): CreateClusterReqV11 {
        this['core_data_volume_count'] = coreDataVolumeCount;
        return this;
    }
    public set coreDataVolumeCount(coreDataVolumeCount: number | undefined) {
        this['core_data_volume_count'] = coreDataVolumeCount;
    }
    public get coreDataVolumeCount() {
        return this['core_data_volume_count'];
    }
    public withTaskNodeGroups(taskNodeGroups: Array<TaskNodeGroup>): CreateClusterReqV11 {
        this['task_node_groups'] = taskNodeGroups;
        return this;
    }
    public set taskNodeGroups(taskNodeGroups: Array<TaskNodeGroup> | undefined) {
        this['task_node_groups'] = taskNodeGroups;
    }
    public get taskNodeGroups() {
        return this['task_node_groups'];
    }
    public withBootstrapScripts(bootstrapScripts: Array<BootstrapScript>): CreateClusterReqV11 {
        this['bootstrap_scripts'] = bootstrapScripts;
        return this;
    }
    public set bootstrapScripts(bootstrapScripts: Array<BootstrapScript> | undefined) {
        this['bootstrap_scripts'] = bootstrapScripts;
    }
    public get bootstrapScripts() {
        return this['bootstrap_scripts'];
    }
    public withNodePublicCertName(nodePublicCertName: string): CreateClusterReqV11 {
        this['node_public_cert_name'] = nodePublicCertName;
        return this;
    }
    public set nodePublicCertName(nodePublicCertName: string | undefined) {
        this['node_public_cert_name'] = nodePublicCertName;
    }
    public get nodePublicCertName() {
        return this['node_public_cert_name'];
    }
    public withClusterAdminSecret(clusterAdminSecret: string): CreateClusterReqV11 {
        this['cluster_admin_secret'] = clusterAdminSecret;
        return this;
    }
    public set clusterAdminSecret(clusterAdminSecret: string | undefined) {
        this['cluster_admin_secret'] = clusterAdminSecret;
    }
    public get clusterAdminSecret() {
        return this['cluster_admin_secret'];
    }
    public withClusterMasterSecret(clusterMasterSecret: string): CreateClusterReqV11 {
        this['cluster_master_secret'] = clusterMasterSecret;
        return this;
    }
    public set clusterMasterSecret(clusterMasterSecret: string | undefined) {
        this['cluster_master_secret'] = clusterMasterSecret;
    }
    public get clusterMasterSecret() {
        return this['cluster_master_secret'];
    }
    public withSafeMode(safeMode: CreateClusterReqV11SafeModeEnum): CreateClusterReqV11 {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: CreateClusterReqV11SafeModeEnum | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode() {
        return this['safe_mode'];
    }
    public withClusterType(clusterType: CreateClusterReqV11ClusterTypeEnum): CreateClusterReqV11 {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: CreateClusterReqV11ClusterTypeEnum | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withLogCollection(logCollection: CreateClusterReqV11LogCollectionEnum): CreateClusterReqV11 {
        this['log_collection'] = logCollection;
        return this;
    }
    public set logCollection(logCollection: CreateClusterReqV11LogCollectionEnum | undefined) {
        this['log_collection'] = logCollection;
    }
    public get logCollection() {
        return this['log_collection'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterReqV11 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateClusterReqV11 {
        this['tags'] = tags;
        return this;
    }
    public withLoginMode(loginMode: CreateClusterReqV11LoginModeEnum): CreateClusterReqV11 {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: CreateClusterReqV11LoginModeEnum | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode() {
        return this['login_mode'];
    }
    public withNodeGroups(nodeGroups: Array<NodeGroupV11>): CreateClusterReqV11 {
        this['node_groups'] = nodeGroups;
        return this;
    }
    public set nodeGroups(nodeGroups: Array<NodeGroupV11> | undefined) {
        this['node_groups'] = nodeGroups;
    }
    public get nodeGroups() {
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

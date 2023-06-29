import { AddJobsReqV11 } from './AddJobsReqV11';
import { BootstrapScript } from './BootstrapScript';
import { ChargeInfo } from './ChargeInfo';
import { ClusterDataConnectorMap } from './ClusterDataConnectorMap';
import { ComponentConfig } from './ComponentConfig';
import { NodeGroupV2 } from './NodeGroupV2';
import { Tag } from './Tag';


export class CreateClusterReqV2 {
    private 'is_dec_project'?: boolean | undefined;
    private 'cluster_version': string | undefined;
    private 'cluster_name': string | undefined;
    private 'cluster_type': string | undefined;
    private 'charge_info'?: ChargeInfo | undefined;
    public region: string;
    private 'vpc_name': string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'subnet_name': string | undefined;
    public components: string;
    private 'external_datasources'?: Array<ClusterDataConnectorMap> | undefined;
    private 'availability_zone': string | undefined;
    private 'security_groups_id'?: string | undefined;
    private 'auto_create_default_security_group'?: boolean | undefined;
    private 'safe_mode': string | undefined;
    private 'manager_admin_password': string | undefined;
    private 'login_mode': string | undefined;
    private 'node_root_password'?: string | undefined;
    private 'node_keypair_name'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'eip_address'?: string | undefined;
    private 'eip_id'?: string | undefined;
    private 'mrs_ecs_default_agency'?: string | undefined;
    private 'template_id'?: string | undefined;
    public tags?: Array<Tag>;
    private 'log_collection'?: CreateClusterReqV2LogCollectionEnum | undefined;
    private 'node_groups': Array<NodeGroupV2> | undefined;
    private 'bootstrap_scripts'?: Array<BootstrapScript> | undefined;
    private 'add_jobs'?: Array<AddJobsReqV11> | undefined;
    private 'log_uri'?: string | undefined;
    private 'component_configs'?: Array<ComponentConfig> | undefined;
    public constructor(clusterVersion?: any, clusterName?: any, clusterType?: any, region?: any, vpcName?: any, subnetName?: any, components?: any, availabilityZone?: any, safeMode?: any, managerAdminPassword?: any, loginMode?: any, nodeGroups?: any) { 
        this['cluster_version'] = clusterVersion;
        this['cluster_name'] = clusterName;
        this['cluster_type'] = clusterType;
        this['region'] = region;
        this['vpc_name'] = vpcName;
        this['subnet_name'] = subnetName;
        this['components'] = components;
        this['availability_zone'] = availabilityZone;
        this['safe_mode'] = safeMode;
        this['manager_admin_password'] = managerAdminPassword;
        this['login_mode'] = loginMode;
        this['node_groups'] = nodeGroups;
    }
    public withIsDecProject(isDecProject: boolean): CreateClusterReqV2 {
        this['is_dec_project'] = isDecProject;
        return this;
    }
    public set isDecProject(isDecProject: boolean | undefined) {
        this['is_dec_project'] = isDecProject;
    }
    public get isDecProject() {
        return this['is_dec_project'];
    }
    public withClusterVersion(clusterVersion: string): CreateClusterReqV2 {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion() {
        return this['cluster_version'];
    }
    public withClusterName(clusterName: string): CreateClusterReqV2 {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName() {
        return this['cluster_name'];
    }
    public withClusterType(clusterType: string): CreateClusterReqV2 {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType() {
        return this['cluster_type'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): CreateClusterReqV2 {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo() {
        return this['charge_info'];
    }
    public withRegion(region: string): CreateClusterReqV2 {
        this['region'] = region;
        return this;
    }
    public withVpcName(vpcName: string): CreateClusterReqV2 {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): CreateClusterReqV2 {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): CreateClusterReqV2 {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName() {
        return this['subnet_name'];
    }
    public withComponents(components: string): CreateClusterReqV2 {
        this['components'] = components;
        return this;
    }
    public withExternalDatasources(externalDatasources: Array<ClusterDataConnectorMap>): CreateClusterReqV2 {
        this['external_datasources'] = externalDatasources;
        return this;
    }
    public set externalDatasources(externalDatasources: Array<ClusterDataConnectorMap> | undefined) {
        this['external_datasources'] = externalDatasources;
    }
    public get externalDatasources() {
        return this['external_datasources'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateClusterReqV2 {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withSecurityGroupsId(securityGroupsId: string): CreateClusterReqV2 {
        this['security_groups_id'] = securityGroupsId;
        return this;
    }
    public set securityGroupsId(securityGroupsId: string | undefined) {
        this['security_groups_id'] = securityGroupsId;
    }
    public get securityGroupsId() {
        return this['security_groups_id'];
    }
    public withAutoCreateDefaultSecurityGroup(autoCreateDefaultSecurityGroup: boolean): CreateClusterReqV2 {
        this['auto_create_default_security_group'] = autoCreateDefaultSecurityGroup;
        return this;
    }
    public set autoCreateDefaultSecurityGroup(autoCreateDefaultSecurityGroup: boolean | undefined) {
        this['auto_create_default_security_group'] = autoCreateDefaultSecurityGroup;
    }
    public get autoCreateDefaultSecurityGroup() {
        return this['auto_create_default_security_group'];
    }
    public withSafeMode(safeMode: string): CreateClusterReqV2 {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: string | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode() {
        return this['safe_mode'];
    }
    public withManagerAdminPassword(managerAdminPassword: string): CreateClusterReqV2 {
        this['manager_admin_password'] = managerAdminPassword;
        return this;
    }
    public set managerAdminPassword(managerAdminPassword: string | undefined) {
        this['manager_admin_password'] = managerAdminPassword;
    }
    public get managerAdminPassword() {
        return this['manager_admin_password'];
    }
    public withLoginMode(loginMode: string): CreateClusterReqV2 {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: string | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode() {
        return this['login_mode'];
    }
    public withNodeRootPassword(nodeRootPassword: string): CreateClusterReqV2 {
        this['node_root_password'] = nodeRootPassword;
        return this;
    }
    public set nodeRootPassword(nodeRootPassword: string | undefined) {
        this['node_root_password'] = nodeRootPassword;
    }
    public get nodeRootPassword() {
        return this['node_root_password'];
    }
    public withNodeKeypairName(nodeKeypairName: string): CreateClusterReqV2 {
        this['node_keypair_name'] = nodeKeypairName;
        return this;
    }
    public set nodeKeypairName(nodeKeypairName: string | undefined) {
        this['node_keypair_name'] = nodeKeypairName;
    }
    public get nodeKeypairName() {
        return this['node_keypair_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateClusterReqV2 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withEipAddress(eipAddress: string): CreateClusterReqV2 {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress() {
        return this['eip_address'];
    }
    public withEipId(eipId: string): CreateClusterReqV2 {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId() {
        return this['eip_id'];
    }
    public withMrsEcsDefaultAgency(mrsEcsDefaultAgency: string): CreateClusterReqV2 {
        this['mrs_ecs_default_agency'] = mrsEcsDefaultAgency;
        return this;
    }
    public set mrsEcsDefaultAgency(mrsEcsDefaultAgency: string | undefined) {
        this['mrs_ecs_default_agency'] = mrsEcsDefaultAgency;
    }
    public get mrsEcsDefaultAgency() {
        return this['mrs_ecs_default_agency'];
    }
    public withTemplateId(templateId: string): CreateClusterReqV2 {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTags(tags: Array<Tag>): CreateClusterReqV2 {
        this['tags'] = tags;
        return this;
    }
    public withLogCollection(logCollection: CreateClusterReqV2LogCollectionEnum): CreateClusterReqV2 {
        this['log_collection'] = logCollection;
        return this;
    }
    public set logCollection(logCollection: CreateClusterReqV2LogCollectionEnum | undefined) {
        this['log_collection'] = logCollection;
    }
    public get logCollection() {
        return this['log_collection'];
    }
    public withNodeGroups(nodeGroups: Array<NodeGroupV2>): CreateClusterReqV2 {
        this['node_groups'] = nodeGroups;
        return this;
    }
    public set nodeGroups(nodeGroups: Array<NodeGroupV2> | undefined) {
        this['node_groups'] = nodeGroups;
    }
    public get nodeGroups() {
        return this['node_groups'];
    }
    public withBootstrapScripts(bootstrapScripts: Array<BootstrapScript>): CreateClusterReqV2 {
        this['bootstrap_scripts'] = bootstrapScripts;
        return this;
    }
    public set bootstrapScripts(bootstrapScripts: Array<BootstrapScript> | undefined) {
        this['bootstrap_scripts'] = bootstrapScripts;
    }
    public get bootstrapScripts() {
        return this['bootstrap_scripts'];
    }
    public withAddJobs(addJobs: Array<AddJobsReqV11>): CreateClusterReqV2 {
        this['add_jobs'] = addJobs;
        return this;
    }
    public set addJobs(addJobs: Array<AddJobsReqV11> | undefined) {
        this['add_jobs'] = addJobs;
    }
    public get addJobs() {
        return this['add_jobs'];
    }
    public withLogUri(logUri: string): CreateClusterReqV2 {
        this['log_uri'] = logUri;
        return this;
    }
    public set logUri(logUri: string | undefined) {
        this['log_uri'] = logUri;
    }
    public get logUri() {
        return this['log_uri'];
    }
    public withComponentConfigs(componentConfigs: Array<ComponentConfig>): CreateClusterReqV2 {
        this['component_configs'] = componentConfigs;
        return this;
    }
    public set componentConfigs(componentConfigs: Array<ComponentConfig> | undefined) {
        this['component_configs'] = componentConfigs;
    }
    public get componentConfigs() {
        return this['component_configs'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateClusterReqV2LogCollectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

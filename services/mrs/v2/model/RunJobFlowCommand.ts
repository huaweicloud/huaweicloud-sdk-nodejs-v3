import { BootstrapScript } from './BootstrapScript';
import { ChargeInfo } from './ChargeInfo';
import { ClusterDataConnectorMap } from './ClusterDataConnectorMap';
import { ComponentConfig } from './ComponentConfig';
import { NodeGroupV2 } from './NodeGroupV2';
import { StepConfig } from './StepConfig';
import { Tag } from './Tag';


export class RunJobFlowCommand {
    private 'is_dec_project'?: boolean;
    private 'cluster_version'?: string;
    private 'cluster_name'?: string;
    private 'cluster_type'?: string;
    private 'charge_info'?: ChargeInfo;
    public region?: string;
    private 'vpc_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    public components?: string;
    private 'external_datasources'?: Array<ClusterDataConnectorMap>;
    private 'availability_zone'?: string;
    private 'security_groups_id'?: string;
    private 'auto_create_default_security_group'?: boolean;
    private 'safe_mode'?: string;
    private 'manager_admin_password'?: string;
    private 'login_mode'?: string;
    private 'node_root_password'?: string;
    private 'node_keypair_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'eip_address'?: string;
    private 'eip_id'?: string;
    private 'mrs_ecs_default_agency'?: string;
    private 'template_id'?: string;
    public tags?: Array<Tag>;
    private 'log_collection'?: RunJobFlowCommandLogCollectionEnum | number;
    private 'node_groups'?: Array<NodeGroupV2>;
    private 'bootstrap_scripts'?: Array<BootstrapScript>;
    private 'log_uri'?: string;
    private 'component_configs'?: Array<ComponentConfig>;
    private 'delete_when_no_steps'?: boolean;
    public steps?: Array<StepConfig>;
    public constructor(clusterVersion?: string, clusterName?: string, clusterType?: string, region?: string, vpcName?: string, subnetName?: string, components?: string, availabilityZone?: string, safeMode?: string, managerAdminPassword?: string, loginMode?: string, nodeGroups?: Array<NodeGroupV2>, steps?: Array<StepConfig>) { 
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
        this['steps'] = steps;
    }
    public withIsDecProject(isDecProject: boolean): RunJobFlowCommand {
        this['is_dec_project'] = isDecProject;
        return this;
    }
    public set isDecProject(isDecProject: boolean  | undefined) {
        this['is_dec_project'] = isDecProject;
    }
    public get isDecProject(): boolean | undefined {
        return this['is_dec_project'];
    }
    public withClusterVersion(clusterVersion: string): RunJobFlowCommand {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withClusterName(clusterName: string): RunJobFlowCommand {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterType(clusterType: string): RunJobFlowCommand {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withChargeInfo(chargeInfo: ChargeInfo): RunJobFlowCommand {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withRegion(region: string): RunJobFlowCommand {
        this['region'] = region;
        return this;
    }
    public withVpcName(vpcName: string): RunJobFlowCommand {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): RunJobFlowCommand {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): RunJobFlowCommand {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withComponents(components: string): RunJobFlowCommand {
        this['components'] = components;
        return this;
    }
    public withExternalDatasources(externalDatasources: Array<ClusterDataConnectorMap>): RunJobFlowCommand {
        this['external_datasources'] = externalDatasources;
        return this;
    }
    public set externalDatasources(externalDatasources: Array<ClusterDataConnectorMap>  | undefined) {
        this['external_datasources'] = externalDatasources;
    }
    public get externalDatasources(): Array<ClusterDataConnectorMap> | undefined {
        return this['external_datasources'];
    }
    public withAvailabilityZone(availabilityZone: string): RunJobFlowCommand {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSecurityGroupsId(securityGroupsId: string): RunJobFlowCommand {
        this['security_groups_id'] = securityGroupsId;
        return this;
    }
    public set securityGroupsId(securityGroupsId: string  | undefined) {
        this['security_groups_id'] = securityGroupsId;
    }
    public get securityGroupsId(): string | undefined {
        return this['security_groups_id'];
    }
    public withAutoCreateDefaultSecurityGroup(autoCreateDefaultSecurityGroup: boolean): RunJobFlowCommand {
        this['auto_create_default_security_group'] = autoCreateDefaultSecurityGroup;
        return this;
    }
    public set autoCreateDefaultSecurityGroup(autoCreateDefaultSecurityGroup: boolean  | undefined) {
        this['auto_create_default_security_group'] = autoCreateDefaultSecurityGroup;
    }
    public get autoCreateDefaultSecurityGroup(): boolean | undefined {
        return this['auto_create_default_security_group'];
    }
    public withSafeMode(safeMode: string): RunJobFlowCommand {
        this['safe_mode'] = safeMode;
        return this;
    }
    public set safeMode(safeMode: string  | undefined) {
        this['safe_mode'] = safeMode;
    }
    public get safeMode(): string | undefined {
        return this['safe_mode'];
    }
    public withManagerAdminPassword(managerAdminPassword: string): RunJobFlowCommand {
        this['manager_admin_password'] = managerAdminPassword;
        return this;
    }
    public set managerAdminPassword(managerAdminPassword: string  | undefined) {
        this['manager_admin_password'] = managerAdminPassword;
    }
    public get managerAdminPassword(): string | undefined {
        return this['manager_admin_password'];
    }
    public withLoginMode(loginMode: string): RunJobFlowCommand {
        this['login_mode'] = loginMode;
        return this;
    }
    public set loginMode(loginMode: string  | undefined) {
        this['login_mode'] = loginMode;
    }
    public get loginMode(): string | undefined {
        return this['login_mode'];
    }
    public withNodeRootPassword(nodeRootPassword: string): RunJobFlowCommand {
        this['node_root_password'] = nodeRootPassword;
        return this;
    }
    public set nodeRootPassword(nodeRootPassword: string  | undefined) {
        this['node_root_password'] = nodeRootPassword;
    }
    public get nodeRootPassword(): string | undefined {
        return this['node_root_password'];
    }
    public withNodeKeypairName(nodeKeypairName: string): RunJobFlowCommand {
        this['node_keypair_name'] = nodeKeypairName;
        return this;
    }
    public set nodeKeypairName(nodeKeypairName: string  | undefined) {
        this['node_keypair_name'] = nodeKeypairName;
    }
    public get nodeKeypairName(): string | undefined {
        return this['node_keypair_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RunJobFlowCommand {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEipAddress(eipAddress: string): RunJobFlowCommand {
        this['eip_address'] = eipAddress;
        return this;
    }
    public set eipAddress(eipAddress: string  | undefined) {
        this['eip_address'] = eipAddress;
    }
    public get eipAddress(): string | undefined {
        return this['eip_address'];
    }
    public withEipId(eipId: string): RunJobFlowCommand {
        this['eip_id'] = eipId;
        return this;
    }
    public set eipId(eipId: string  | undefined) {
        this['eip_id'] = eipId;
    }
    public get eipId(): string | undefined {
        return this['eip_id'];
    }
    public withMrsEcsDefaultAgency(mrsEcsDefaultAgency: string): RunJobFlowCommand {
        this['mrs_ecs_default_agency'] = mrsEcsDefaultAgency;
        return this;
    }
    public set mrsEcsDefaultAgency(mrsEcsDefaultAgency: string  | undefined) {
        this['mrs_ecs_default_agency'] = mrsEcsDefaultAgency;
    }
    public get mrsEcsDefaultAgency(): string | undefined {
        return this['mrs_ecs_default_agency'];
    }
    public withTemplateId(templateId: string): RunJobFlowCommand {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTags(tags: Array<Tag>): RunJobFlowCommand {
        this['tags'] = tags;
        return this;
    }
    public withLogCollection(logCollection: RunJobFlowCommandLogCollectionEnum | number): RunJobFlowCommand {
        this['log_collection'] = logCollection;
        return this;
    }
    public set logCollection(logCollection: RunJobFlowCommandLogCollectionEnum | number  | undefined) {
        this['log_collection'] = logCollection;
    }
    public get logCollection(): RunJobFlowCommandLogCollectionEnum | number | undefined {
        return this['log_collection'];
    }
    public withNodeGroups(nodeGroups: Array<NodeGroupV2>): RunJobFlowCommand {
        this['node_groups'] = nodeGroups;
        return this;
    }
    public set nodeGroups(nodeGroups: Array<NodeGroupV2>  | undefined) {
        this['node_groups'] = nodeGroups;
    }
    public get nodeGroups(): Array<NodeGroupV2> | undefined {
        return this['node_groups'];
    }
    public withBootstrapScripts(bootstrapScripts: Array<BootstrapScript>): RunJobFlowCommand {
        this['bootstrap_scripts'] = bootstrapScripts;
        return this;
    }
    public set bootstrapScripts(bootstrapScripts: Array<BootstrapScript>  | undefined) {
        this['bootstrap_scripts'] = bootstrapScripts;
    }
    public get bootstrapScripts(): Array<BootstrapScript> | undefined {
        return this['bootstrap_scripts'];
    }
    public withLogUri(logUri: string): RunJobFlowCommand {
        this['log_uri'] = logUri;
        return this;
    }
    public set logUri(logUri: string  | undefined) {
        this['log_uri'] = logUri;
    }
    public get logUri(): string | undefined {
        return this['log_uri'];
    }
    public withComponentConfigs(componentConfigs: Array<ComponentConfig>): RunJobFlowCommand {
        this['component_configs'] = componentConfigs;
        return this;
    }
    public set componentConfigs(componentConfigs: Array<ComponentConfig>  | undefined) {
        this['component_configs'] = componentConfigs;
    }
    public get componentConfigs(): Array<ComponentConfig> | undefined {
        return this['component_configs'];
    }
    public withDeleteWhenNoSteps(deleteWhenNoSteps: boolean): RunJobFlowCommand {
        this['delete_when_no_steps'] = deleteWhenNoSteps;
        return this;
    }
    public set deleteWhenNoSteps(deleteWhenNoSteps: boolean  | undefined) {
        this['delete_when_no_steps'] = deleteWhenNoSteps;
    }
    public get deleteWhenNoSteps(): boolean | undefined {
        return this['delete_when_no_steps'];
    }
    public withSteps(steps: Array<StepConfig>): RunJobFlowCommand {
        this['steps'] = steps;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunJobFlowCommandLogCollectionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

import { AdInfo } from './AdInfo';
import { AssistAuthConfigInfo } from './AssistAuthConfigInfo';
import { SecurityGroup } from './SecurityGroup';
import { SiteConfigsResponse } from './SiteConfigsResponse';
import { SubnetInfo } from './SubnetInfo';
import { ThirdGatewayInfo } from './ThirdGatewayInfo';
import { VpcConfigInfo } from './VpcConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspacesResponse extends SdkResponse {
    public id?: string;
    private 'auth_type'?: string;
    private 'ad_domains'?: AdInfo;
    private 'third_gateway_info'?: ThirdGatewayInfo;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'access_mode'?: string;
    private 'adn_conflict_network'?: string;
    private 'dedicated_subnets'?: string;
    private 'dedicated_access_address'?: string;
    private 'dedicated_access_address_ipv6'?: string;
    private 'internet_access_address'?: string;
    private 'internet_access_address_ipv6'?: string;
    private 'internet_access_port'?: string;
    public status?: ListWorkspacesResponseStatusEnum | string;
    private 'access_status'?: string;
    private 'subnet_ids'?: Array<SubnetInfo>;
    private 'vpc_config_infos'?: Array<VpcConfigInfo>;
    private 'management_subnet_cidr'?: string;
    private 'infrastructure_security_group'?: SecurityGroup;
    private 'desktop_security_group'?: SecurityGroup;
    public closable?: boolean;
    private 'config_status'?: string;
    public progress?: string;
    private 'job_id'?: string;
    private 'fail_code'?: number;
    private 'fail_reason'?: string;
    private 'enterprise_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_resource_type'?: string;
    private 'assist_auth_config_info'?: AssistAuthConfigInfo;
    private 'is_send_email'?: boolean;
    private 'authorized_collect_log'?: boolean;
    private 'authorized_hda_upgrade'?: boolean;
    private 'site_configs'?: Array<SiteConfigsResponse>;
    private 'is_multi_vpc'?: boolean;
    private 'is_config_nat_mapping'?: boolean;
    private 'dc_vnc_ip'?: string;
    private 'dc_vnc_vpcep_id'?: string;
    private 'is_authorized_install_agent'?: boolean;
    private 'is_support_ipv6'?: boolean;
    private 'enable_user_create_snapshot'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ListWorkspacesResponse {
        this['id'] = id;
        return this;
    }
    public withAuthType(authType: string): ListWorkspacesResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withAdDomains(adDomains: AdInfo): ListWorkspacesResponse {
        this['ad_domains'] = adDomains;
        return this;
    }
    public set adDomains(adDomains: AdInfo  | undefined) {
        this['ad_domains'] = adDomains;
    }
    public get adDomains(): AdInfo | undefined {
        return this['ad_domains'];
    }
    public withThirdGatewayInfo(thirdGatewayInfo: ThirdGatewayInfo): ListWorkspacesResponse {
        this['third_gateway_info'] = thirdGatewayInfo;
        return this;
    }
    public set thirdGatewayInfo(thirdGatewayInfo: ThirdGatewayInfo  | undefined) {
        this['third_gateway_info'] = thirdGatewayInfo;
    }
    public get thirdGatewayInfo(): ThirdGatewayInfo | undefined {
        return this['third_gateway_info'];
    }
    public withVpcId(vpcId: string): ListWorkspacesResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ListWorkspacesResponse {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withAccessMode(accessMode: string): ListWorkspacesResponse {
        this['access_mode'] = accessMode;
        return this;
    }
    public set accessMode(accessMode: string  | undefined) {
        this['access_mode'] = accessMode;
    }
    public get accessMode(): string | undefined {
        return this['access_mode'];
    }
    public withAdnConflictNetwork(adnConflictNetwork: string): ListWorkspacesResponse {
        this['adn_conflict_network'] = adnConflictNetwork;
        return this;
    }
    public set adnConflictNetwork(adnConflictNetwork: string  | undefined) {
        this['adn_conflict_network'] = adnConflictNetwork;
    }
    public get adnConflictNetwork(): string | undefined {
        return this['adn_conflict_network'];
    }
    public withDedicatedSubnets(dedicatedSubnets: string): ListWorkspacesResponse {
        this['dedicated_subnets'] = dedicatedSubnets;
        return this;
    }
    public set dedicatedSubnets(dedicatedSubnets: string  | undefined) {
        this['dedicated_subnets'] = dedicatedSubnets;
    }
    public get dedicatedSubnets(): string | undefined {
        return this['dedicated_subnets'];
    }
    public withDedicatedAccessAddress(dedicatedAccessAddress: string): ListWorkspacesResponse {
        this['dedicated_access_address'] = dedicatedAccessAddress;
        return this;
    }
    public set dedicatedAccessAddress(dedicatedAccessAddress: string  | undefined) {
        this['dedicated_access_address'] = dedicatedAccessAddress;
    }
    public get dedicatedAccessAddress(): string | undefined {
        return this['dedicated_access_address'];
    }
    public withDedicatedAccessAddressIpv6(dedicatedAccessAddressIpv6: string): ListWorkspacesResponse {
        this['dedicated_access_address_ipv6'] = dedicatedAccessAddressIpv6;
        return this;
    }
    public set dedicatedAccessAddressIpv6(dedicatedAccessAddressIpv6: string  | undefined) {
        this['dedicated_access_address_ipv6'] = dedicatedAccessAddressIpv6;
    }
    public get dedicatedAccessAddressIpv6(): string | undefined {
        return this['dedicated_access_address_ipv6'];
    }
    public withInternetAccessAddress(internetAccessAddress: string): ListWorkspacesResponse {
        this['internet_access_address'] = internetAccessAddress;
        return this;
    }
    public set internetAccessAddress(internetAccessAddress: string  | undefined) {
        this['internet_access_address'] = internetAccessAddress;
    }
    public get internetAccessAddress(): string | undefined {
        return this['internet_access_address'];
    }
    public withInternetAccessAddressIpv6(internetAccessAddressIpv6: string): ListWorkspacesResponse {
        this['internet_access_address_ipv6'] = internetAccessAddressIpv6;
        return this;
    }
    public set internetAccessAddressIpv6(internetAccessAddressIpv6: string  | undefined) {
        this['internet_access_address_ipv6'] = internetAccessAddressIpv6;
    }
    public get internetAccessAddressIpv6(): string | undefined {
        return this['internet_access_address_ipv6'];
    }
    public withInternetAccessPort(internetAccessPort: string): ListWorkspacesResponse {
        this['internet_access_port'] = internetAccessPort;
        return this;
    }
    public set internetAccessPort(internetAccessPort: string  | undefined) {
        this['internet_access_port'] = internetAccessPort;
    }
    public get internetAccessPort(): string | undefined {
        return this['internet_access_port'];
    }
    public withStatus(status: ListWorkspacesResponseStatusEnum | string): ListWorkspacesResponse {
        this['status'] = status;
        return this;
    }
    public withAccessStatus(accessStatus: string): ListWorkspacesResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: string  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): string | undefined {
        return this['access_status'];
    }
    public withSubnetIds(subnetIds: Array<SubnetInfo>): ListWorkspacesResponse {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<SubnetInfo>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<SubnetInfo> | undefined {
        return this['subnet_ids'];
    }
    public withVpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>): ListWorkspacesResponse {
        this['vpc_config_infos'] = vpcConfigInfos;
        return this;
    }
    public set vpcConfigInfos(vpcConfigInfos: Array<VpcConfigInfo>  | undefined) {
        this['vpc_config_infos'] = vpcConfigInfos;
    }
    public get vpcConfigInfos(): Array<VpcConfigInfo> | undefined {
        return this['vpc_config_infos'];
    }
    public withManagementSubnetCidr(managementSubnetCidr: string): ListWorkspacesResponse {
        this['management_subnet_cidr'] = managementSubnetCidr;
        return this;
    }
    public set managementSubnetCidr(managementSubnetCidr: string  | undefined) {
        this['management_subnet_cidr'] = managementSubnetCidr;
    }
    public get managementSubnetCidr(): string | undefined {
        return this['management_subnet_cidr'];
    }
    public withInfrastructureSecurityGroup(infrastructureSecurityGroup: SecurityGroup): ListWorkspacesResponse {
        this['infrastructure_security_group'] = infrastructureSecurityGroup;
        return this;
    }
    public set infrastructureSecurityGroup(infrastructureSecurityGroup: SecurityGroup  | undefined) {
        this['infrastructure_security_group'] = infrastructureSecurityGroup;
    }
    public get infrastructureSecurityGroup(): SecurityGroup | undefined {
        return this['infrastructure_security_group'];
    }
    public withDesktopSecurityGroup(desktopSecurityGroup: SecurityGroup): ListWorkspacesResponse {
        this['desktop_security_group'] = desktopSecurityGroup;
        return this;
    }
    public set desktopSecurityGroup(desktopSecurityGroup: SecurityGroup  | undefined) {
        this['desktop_security_group'] = desktopSecurityGroup;
    }
    public get desktopSecurityGroup(): SecurityGroup | undefined {
        return this['desktop_security_group'];
    }
    public withClosable(closable: boolean): ListWorkspacesResponse {
        this['closable'] = closable;
        return this;
    }
    public withConfigStatus(configStatus: string): ListWorkspacesResponse {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
    public withProgress(progress: string): ListWorkspacesResponse {
        this['progress'] = progress;
        return this;
    }
    public withJobId(jobId: string): ListWorkspacesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withFailCode(failCode: number): ListWorkspacesResponse {
        this['fail_code'] = failCode;
        return this;
    }
    public set failCode(failCode: number  | undefined) {
        this['fail_code'] = failCode;
    }
    public get failCode(): number | undefined {
        return this['fail_code'];
    }
    public withFailReason(failReason: string): ListWorkspacesResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withEnterpriseId(enterpriseId: string): ListWorkspacesResponse {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWorkspacesResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectResourceType(projectResourceType: string): ListWorkspacesResponse {
        this['project_resource_type'] = projectResourceType;
        return this;
    }
    public set projectResourceType(projectResourceType: string  | undefined) {
        this['project_resource_type'] = projectResourceType;
    }
    public get projectResourceType(): string | undefined {
        return this['project_resource_type'];
    }
    public withAssistAuthConfigInfo(assistAuthConfigInfo: AssistAuthConfigInfo): ListWorkspacesResponse {
        this['assist_auth_config_info'] = assistAuthConfigInfo;
        return this;
    }
    public set assistAuthConfigInfo(assistAuthConfigInfo: AssistAuthConfigInfo  | undefined) {
        this['assist_auth_config_info'] = assistAuthConfigInfo;
    }
    public get assistAuthConfigInfo(): AssistAuthConfigInfo | undefined {
        return this['assist_auth_config_info'];
    }
    public withIsSendEmail(isSendEmail: boolean): ListWorkspacesResponse {
        this['is_send_email'] = isSendEmail;
        return this;
    }
    public set isSendEmail(isSendEmail: boolean  | undefined) {
        this['is_send_email'] = isSendEmail;
    }
    public get isSendEmail(): boolean | undefined {
        return this['is_send_email'];
    }
    public withAuthorizedCollectLog(authorizedCollectLog: boolean): ListWorkspacesResponse {
        this['authorized_collect_log'] = authorizedCollectLog;
        return this;
    }
    public set authorizedCollectLog(authorizedCollectLog: boolean  | undefined) {
        this['authorized_collect_log'] = authorizedCollectLog;
    }
    public get authorizedCollectLog(): boolean | undefined {
        return this['authorized_collect_log'];
    }
    public withAuthorizedHdaUpgrade(authorizedHdaUpgrade: boolean): ListWorkspacesResponse {
        this['authorized_hda_upgrade'] = authorizedHdaUpgrade;
        return this;
    }
    public set authorizedHdaUpgrade(authorizedHdaUpgrade: boolean  | undefined) {
        this['authorized_hda_upgrade'] = authorizedHdaUpgrade;
    }
    public get authorizedHdaUpgrade(): boolean | undefined {
        return this['authorized_hda_upgrade'];
    }
    public withSiteConfigs(siteConfigs: Array<SiteConfigsResponse>): ListWorkspacesResponse {
        this['site_configs'] = siteConfigs;
        return this;
    }
    public set siteConfigs(siteConfigs: Array<SiteConfigsResponse>  | undefined) {
        this['site_configs'] = siteConfigs;
    }
    public get siteConfigs(): Array<SiteConfigsResponse> | undefined {
        return this['site_configs'];
    }
    public withIsMultiVpc(isMultiVpc: boolean): ListWorkspacesResponse {
        this['is_multi_vpc'] = isMultiVpc;
        return this;
    }
    public set isMultiVpc(isMultiVpc: boolean  | undefined) {
        this['is_multi_vpc'] = isMultiVpc;
    }
    public get isMultiVpc(): boolean | undefined {
        return this['is_multi_vpc'];
    }
    public withIsConfigNatMapping(isConfigNatMapping: boolean): ListWorkspacesResponse {
        this['is_config_nat_mapping'] = isConfigNatMapping;
        return this;
    }
    public set isConfigNatMapping(isConfigNatMapping: boolean  | undefined) {
        this['is_config_nat_mapping'] = isConfigNatMapping;
    }
    public get isConfigNatMapping(): boolean | undefined {
        return this['is_config_nat_mapping'];
    }
    public withDcVncIp(dcVncIp: string): ListWorkspacesResponse {
        this['dc_vnc_ip'] = dcVncIp;
        return this;
    }
    public set dcVncIp(dcVncIp: string  | undefined) {
        this['dc_vnc_ip'] = dcVncIp;
    }
    public get dcVncIp(): string | undefined {
        return this['dc_vnc_ip'];
    }
    public withDcVncVpcepId(dcVncVpcepId: string): ListWorkspacesResponse {
        this['dc_vnc_vpcep_id'] = dcVncVpcepId;
        return this;
    }
    public set dcVncVpcepId(dcVncVpcepId: string  | undefined) {
        this['dc_vnc_vpcep_id'] = dcVncVpcepId;
    }
    public get dcVncVpcepId(): string | undefined {
        return this['dc_vnc_vpcep_id'];
    }
    public withIsAuthorizedInstallAgent(isAuthorizedInstallAgent: boolean): ListWorkspacesResponse {
        this['is_authorized_install_agent'] = isAuthorizedInstallAgent;
        return this;
    }
    public set isAuthorizedInstallAgent(isAuthorizedInstallAgent: boolean  | undefined) {
        this['is_authorized_install_agent'] = isAuthorizedInstallAgent;
    }
    public get isAuthorizedInstallAgent(): boolean | undefined {
        return this['is_authorized_install_agent'];
    }
    public withIsSupportIpv6(isSupportIpv6: boolean): ListWorkspacesResponse {
        this['is_support_ipv6'] = isSupportIpv6;
        return this;
    }
    public set isSupportIpv6(isSupportIpv6: boolean  | undefined) {
        this['is_support_ipv6'] = isSupportIpv6;
    }
    public get isSupportIpv6(): boolean | undefined {
        return this['is_support_ipv6'];
    }
    public withEnableUserCreateSnapshot(enableUserCreateSnapshot: boolean): ListWorkspacesResponse {
        this['enable_user_create_snapshot'] = enableUserCreateSnapshot;
        return this;
    }
    public set enableUserCreateSnapshot(enableUserCreateSnapshot: boolean  | undefined) {
        this['enable_user_create_snapshot'] = enableUserCreateSnapshot;
    }
    public get enableUserCreateSnapshot(): boolean | undefined {
        return this['enable_user_create_snapshot'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWorkspacesResponseStatusEnum {
    PREPARING = 'PREPARING',
    SUBSCRIBING = 'SUBSCRIBING',
    SUBSCRIBED = 'SUBSCRIBED',
    SUBSCRIPTION_FAILED = 'SUBSCRIPTION_FAILED',
    DEREGISTERING = 'DEREGISTERING',
    DEREGISTRATION_FAILED = 'DEREGISTRATION_FAILED',
    RECYCLING = 'RECYCLING',
    RECYCLED = 'RECYCLED',
    RECYCLE_FAILED = 'RECYCLE_FAILED',
    CLOSED = 'CLOSED'
}

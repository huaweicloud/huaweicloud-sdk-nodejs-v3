import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';
import { SimpleDesktopInfo } from './SimpleDesktopInfo';
import { Tag } from './Tag';


export class SimpleDesktopInfoDetail {
    private 'desktop_id'?: string;
    private 'computer_name'?: string;
    private 'os_host_name'?: string;
    public created?: string;
    private 'ip_address'?: string;
    private 'user_name'?: string;
    private 'attach_user_infos'?: Array<AttachInstancesUserInfo>;
    private 'user_group'?: string;
    public sid?: string;
    private 'ou_name'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'in_maintenance_mode'?: boolean;
    private 'share_resource_sku'?: string;
    private 'desktop_type'?: string;
    private 'subnet_id'?: string;
    private 'bill_resource_id'?: string;
    public status?: string;
    private 'task_status'?: string;
    private 'instance_status'?: string;
    private 'connect_status'?: string;
    private 'product_name'?: string;
    private 'agent_version'?: string;
    private 'tenant_id'?: string;
    private 'tenant_name'?: string;
    private 'resource_pool_id'?: string;
    private 'os_type'?: string;
    private 'hibernate_policy_num'?: number;
    private 'is_auto_hibernate'?: number;
    private 'availability_zone'?: string;
    private 'exclusive_host_id'?: string;
    private 'deh_id'?: string;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): SimpleDesktopInfoDetail {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withComputerName(computerName: string): SimpleDesktopInfoDetail {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withOsHostName(osHostName: string): SimpleDesktopInfoDetail {
        this['os_host_name'] = osHostName;
        return this;
    }
    public set osHostName(osHostName: string  | undefined) {
        this['os_host_name'] = osHostName;
    }
    public get osHostName(): string | undefined {
        return this['os_host_name'];
    }
    public withCreated(created: string): SimpleDesktopInfoDetail {
        this['created'] = created;
        return this;
    }
    public withIpAddress(ipAddress: string): SimpleDesktopInfoDetail {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withUserName(userName: string): SimpleDesktopInfoDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAttachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>): SimpleDesktopInfoDetail {
        this['attach_user_infos'] = attachUserInfos;
        return this;
    }
    public set attachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>  | undefined) {
        this['attach_user_infos'] = attachUserInfos;
    }
    public get attachUserInfos(): Array<AttachInstancesUserInfo> | undefined {
        return this['attach_user_infos'];
    }
    public withUserGroup(userGroup: string): SimpleDesktopInfoDetail {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withSid(sid: string): SimpleDesktopInfoDetail {
        this['sid'] = sid;
        return this;
    }
    public withOuName(ouName: string): SimpleDesktopInfoDetail {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SimpleDesktopInfoDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): SimpleDesktopInfoDetail {
        this['tags'] = tags;
        return this;
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): SimpleDesktopInfoDetail {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withShareResourceSku(shareResourceSku: string): SimpleDesktopInfoDetail {
        this['share_resource_sku'] = shareResourceSku;
        return this;
    }
    public set shareResourceSku(shareResourceSku: string  | undefined) {
        this['share_resource_sku'] = shareResourceSku;
    }
    public get shareResourceSku(): string | undefined {
        return this['share_resource_sku'];
    }
    public withDesktopType(desktopType: string): SimpleDesktopInfoDetail {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withSubnetId(subnetId: string): SimpleDesktopInfoDetail {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBillResourceId(billResourceId: string): SimpleDesktopInfoDetail {
        this['bill_resource_id'] = billResourceId;
        return this;
    }
    public set billResourceId(billResourceId: string  | undefined) {
        this['bill_resource_id'] = billResourceId;
    }
    public get billResourceId(): string | undefined {
        return this['bill_resource_id'];
    }
    public withStatus(status: string): SimpleDesktopInfoDetail {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): SimpleDesktopInfoDetail {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withInstanceStatus(instanceStatus: string): SimpleDesktopInfoDetail {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withConnectStatus(connectStatus: string): SimpleDesktopInfoDetail {
        this['connect_status'] = connectStatus;
        return this;
    }
    public set connectStatus(connectStatus: string  | undefined) {
        this['connect_status'] = connectStatus;
    }
    public get connectStatus(): string | undefined {
        return this['connect_status'];
    }
    public withProductName(productName: string): SimpleDesktopInfoDetail {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withAgentVersion(agentVersion: string): SimpleDesktopInfoDetail {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withTenantId(tenantId: string): SimpleDesktopInfoDetail {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withTenantName(tenantName: string): SimpleDesktopInfoDetail {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withResourcePoolId(resourcePoolId: string): SimpleDesktopInfoDetail {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withOsType(osType: string): SimpleDesktopInfoDetail {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withHibernatePolicyNum(hibernatePolicyNum: number): SimpleDesktopInfoDetail {
        this['hibernate_policy_num'] = hibernatePolicyNum;
        return this;
    }
    public set hibernatePolicyNum(hibernatePolicyNum: number  | undefined) {
        this['hibernate_policy_num'] = hibernatePolicyNum;
    }
    public get hibernatePolicyNum(): number | undefined {
        return this['hibernate_policy_num'];
    }
    public withIsAutoHibernate(isAutoHibernate: number): SimpleDesktopInfoDetail {
        this['is_auto_hibernate'] = isAutoHibernate;
        return this;
    }
    public set isAutoHibernate(isAutoHibernate: number  | undefined) {
        this['is_auto_hibernate'] = isAutoHibernate;
    }
    public get isAutoHibernate(): number | undefined {
        return this['is_auto_hibernate'];
    }
    public withAvailabilityZone(availabilityZone: string): SimpleDesktopInfoDetail {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withExclusiveHostId(exclusiveHostId: string): SimpleDesktopInfoDetail {
        this['exclusive_host_id'] = exclusiveHostId;
        return this;
    }
    public set exclusiveHostId(exclusiveHostId: string  | undefined) {
        this['exclusive_host_id'] = exclusiveHostId;
    }
    public get exclusiveHostId(): string | undefined {
        return this['exclusive_host_id'];
    }
    public withDehId(dehId: string): SimpleDesktopInfoDetail {
        this['deh_id'] = dehId;
        return this;
    }
    public set dehId(dehId: string  | undefined) {
        this['deh_id'] = dehId;
    }
    public get dehId(): string | undefined {
        return this['deh_id'];
    }
}
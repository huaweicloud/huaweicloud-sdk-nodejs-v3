import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';
import { Tag } from './Tag';


export class SimpleDesktopInfo {
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
    public constructor() { 
    }
    public withDesktopId(desktopId: string): SimpleDesktopInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withComputerName(computerName: string): SimpleDesktopInfo {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withOsHostName(osHostName: string): SimpleDesktopInfo {
        this['os_host_name'] = osHostName;
        return this;
    }
    public set osHostName(osHostName: string  | undefined) {
        this['os_host_name'] = osHostName;
    }
    public get osHostName(): string | undefined {
        return this['os_host_name'];
    }
    public withCreated(created: string): SimpleDesktopInfo {
        this['created'] = created;
        return this;
    }
    public withIpAddress(ipAddress: string): SimpleDesktopInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withUserName(userName: string): SimpleDesktopInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAttachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>): SimpleDesktopInfo {
        this['attach_user_infos'] = attachUserInfos;
        return this;
    }
    public set attachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>  | undefined) {
        this['attach_user_infos'] = attachUserInfos;
    }
    public get attachUserInfos(): Array<AttachInstancesUserInfo> | undefined {
        return this['attach_user_infos'];
    }
    public withUserGroup(userGroup: string): SimpleDesktopInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withSid(sid: string): SimpleDesktopInfo {
        this['sid'] = sid;
        return this;
    }
    public withOuName(ouName: string): SimpleDesktopInfo {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SimpleDesktopInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): SimpleDesktopInfo {
        this['tags'] = tags;
        return this;
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): SimpleDesktopInfo {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withShareResourceSku(shareResourceSku: string): SimpleDesktopInfo {
        this['share_resource_sku'] = shareResourceSku;
        return this;
    }
    public set shareResourceSku(shareResourceSku: string  | undefined) {
        this['share_resource_sku'] = shareResourceSku;
    }
    public get shareResourceSku(): string | undefined {
        return this['share_resource_sku'];
    }
    public withDesktopType(desktopType: string): SimpleDesktopInfo {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withSubnetId(subnetId: string): SimpleDesktopInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBillResourceId(billResourceId: string): SimpleDesktopInfo {
        this['bill_resource_id'] = billResourceId;
        return this;
    }
    public set billResourceId(billResourceId: string  | undefined) {
        this['bill_resource_id'] = billResourceId;
    }
    public get billResourceId(): string | undefined {
        return this['bill_resource_id'];
    }
    public withStatus(status: string): SimpleDesktopInfo {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): SimpleDesktopInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
}
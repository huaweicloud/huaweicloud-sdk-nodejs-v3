import { AddressInfo } from './AddressInfo';
import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';
import { DesktopDetailInfo } from './DesktopDetailInfo';
import { FlavorInfo } from './FlavorInfo';
import { HourPackageInfo } from './HourPackageInfo';
import { ProductInfo } from './ProductInfo';
import { SecurityGroupInfo } from './SecurityGroupInfo';
import { Tag } from './Tag';
import { VolumeDetail } from './VolumeDetail';


export class PoolDesktopsDetailInfo {
    private 'desktop_id'?: string;
    private 'computer_name'?: string;
    private 'os_host_name'?: string;
    public addresses?: { [key: string]: Array<AddressInfo>; };
    private 'ip_addresses'?: Array<string>;
    public ipv4?: string;
    public ipv6?: string;
    private 'user_list'?: Array<string>;
    private 'user_group_list'?: Array<string>;
    private 'desktop_type'?: string;
    public metadata?: { [key: string]: string; };
    public flavor?: FlavorInfo;
    public status?: string;
    private 'task_status'?: string;
    private 'in_maintenance_mode'?: boolean;
    public created?: string;
    private 'security_groups'?: Array<SecurityGroupInfo>;
    private 'login_status'?: string;
    private 'user_name'?: string;
    private 'attach_user_infos'?: Array<AttachInstancesUserInfo>;
    private 'product_id'?: string;
    private 'share_resource_sku'?: string;
    private 'root_volume'?: VolumeDetail;
    private 'data_volumes'?: Array<VolumeDetail>;
    private 'user_group'?: string;
    private 'availability_zone'?: string;
    private 'site_type'?: string;
    private 'site_name'?: string;
    public product?: ProductInfo;
    private 'ou_name'?: string;
    private 'os_version'?: string;
    public sid?: string;
    private 'order_id'?: string;
    public tags?: Array<Tag>;
    private 'is_support_internet'?: boolean;
    private 'internet_mode'?: PoolDesktopsDetailInfoInternetModeEnum | string;
    private 'internet_mode_list'?: Array<string>;
    private 'is_attaching_eip'?: boolean;
    private 'attach_state'?: PoolDesktopsDetailInfoAttachStateEnum | string;
    private 'enterprise_project_id'?: string;
    private 'subnet_id'?: string;
    private 'bill_resource_id'?: string;
    public process?: number;
    private 'root_resource_id'?: string;
    private 'hour_package_info'?: HourPackageInfo;
    private 'is_freeze'?: boolean;
    private 'inconsistent_types'?: Array<string>;
    public constructor() { 
    }
    public withDesktopId(desktopId: string): PoolDesktopsDetailInfo {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withComputerName(computerName: string): PoolDesktopsDetailInfo {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withOsHostName(osHostName: string): PoolDesktopsDetailInfo {
        this['os_host_name'] = osHostName;
        return this;
    }
    public set osHostName(osHostName: string  | undefined) {
        this['os_host_name'] = osHostName;
    }
    public get osHostName(): string | undefined {
        return this['os_host_name'];
    }
    public withAddresses(addresses: { [key: string]: Array<AddressInfo>; }): PoolDesktopsDetailInfo {
        this['addresses'] = addresses;
        return this;
    }
    public withIpAddresses(ipAddresses: Array<string>): PoolDesktopsDetailInfo {
        this['ip_addresses'] = ipAddresses;
        return this;
    }
    public set ipAddresses(ipAddresses: Array<string>  | undefined) {
        this['ip_addresses'] = ipAddresses;
    }
    public get ipAddresses(): Array<string> | undefined {
        return this['ip_addresses'];
    }
    public withIpv4(ipv4: string): PoolDesktopsDetailInfo {
        this['ipv4'] = ipv4;
        return this;
    }
    public withIpv6(ipv6: string): PoolDesktopsDetailInfo {
        this['ipv6'] = ipv6;
        return this;
    }
    public withUserList(userList: Array<string>): PoolDesktopsDetailInfo {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<string>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<string> | undefined {
        return this['user_list'];
    }
    public withUserGroupList(userGroupList: Array<string>): PoolDesktopsDetailInfo {
        this['user_group_list'] = userGroupList;
        return this;
    }
    public set userGroupList(userGroupList: Array<string>  | undefined) {
        this['user_group_list'] = userGroupList;
    }
    public get userGroupList(): Array<string> | undefined {
        return this['user_group_list'];
    }
    public withDesktopType(desktopType: string): PoolDesktopsDetailInfo {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withMetadata(metadata: { [key: string]: string; }): PoolDesktopsDetailInfo {
        this['metadata'] = metadata;
        return this;
    }
    public withFlavor(flavor: FlavorInfo): PoolDesktopsDetailInfo {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: string): PoolDesktopsDetailInfo {
        this['status'] = status;
        return this;
    }
    public withTaskStatus(taskStatus: string): PoolDesktopsDetailInfo {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): PoolDesktopsDetailInfo {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withCreated(created: string): PoolDesktopsDetailInfo {
        this['created'] = created;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroupInfo>): PoolDesktopsDetailInfo {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroupInfo>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroupInfo> | undefined {
        return this['security_groups'];
    }
    public withLoginStatus(loginStatus: string): PoolDesktopsDetailInfo {
        this['login_status'] = loginStatus;
        return this;
    }
    public set loginStatus(loginStatus: string  | undefined) {
        this['login_status'] = loginStatus;
    }
    public get loginStatus(): string | undefined {
        return this['login_status'];
    }
    public withUserName(userName: string): PoolDesktopsDetailInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAttachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>): PoolDesktopsDetailInfo {
        this['attach_user_infos'] = attachUserInfos;
        return this;
    }
    public set attachUserInfos(attachUserInfos: Array<AttachInstancesUserInfo>  | undefined) {
        this['attach_user_infos'] = attachUserInfos;
    }
    public get attachUserInfos(): Array<AttachInstancesUserInfo> | undefined {
        return this['attach_user_infos'];
    }
    public withProductId(productId: string): PoolDesktopsDetailInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withShareResourceSku(shareResourceSku: string): PoolDesktopsDetailInfo {
        this['share_resource_sku'] = shareResourceSku;
        return this;
    }
    public set shareResourceSku(shareResourceSku: string  | undefined) {
        this['share_resource_sku'] = shareResourceSku;
    }
    public get shareResourceSku(): string | undefined {
        return this['share_resource_sku'];
    }
    public withRootVolume(rootVolume: VolumeDetail): PoolDesktopsDetailInfo {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: VolumeDetail  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): VolumeDetail | undefined {
        return this['root_volume'];
    }
    public withDataVolumes(dataVolumes: Array<VolumeDetail>): PoolDesktopsDetailInfo {
        this['data_volumes'] = dataVolumes;
        return this;
    }
    public set dataVolumes(dataVolumes: Array<VolumeDetail>  | undefined) {
        this['data_volumes'] = dataVolumes;
    }
    public get dataVolumes(): Array<VolumeDetail> | undefined {
        return this['data_volumes'];
    }
    public withUserGroup(userGroup: string): PoolDesktopsDetailInfo {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
    }
    public withAvailabilityZone(availabilityZone: string): PoolDesktopsDetailInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSiteType(siteType: string): PoolDesktopsDetailInfo {
        this['site_type'] = siteType;
        return this;
    }
    public set siteType(siteType: string  | undefined) {
        this['site_type'] = siteType;
    }
    public get siteType(): string | undefined {
        return this['site_type'];
    }
    public withSiteName(siteName: string): PoolDesktopsDetailInfo {
        this['site_name'] = siteName;
        return this;
    }
    public set siteName(siteName: string  | undefined) {
        this['site_name'] = siteName;
    }
    public get siteName(): string | undefined {
        return this['site_name'];
    }
    public withProduct(product: ProductInfo): PoolDesktopsDetailInfo {
        this['product'] = product;
        return this;
    }
    public withOuName(ouName: string): PoolDesktopsDetailInfo {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withOsVersion(osVersion: string): PoolDesktopsDetailInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withSid(sid: string): PoolDesktopsDetailInfo {
        this['sid'] = sid;
        return this;
    }
    public withOrderId(orderId: string): PoolDesktopsDetailInfo {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTags(tags: Array<Tag>): PoolDesktopsDetailInfo {
        this['tags'] = tags;
        return this;
    }
    public withIsSupportInternet(isSupportInternet: boolean): PoolDesktopsDetailInfo {
        this['is_support_internet'] = isSupportInternet;
        return this;
    }
    public set isSupportInternet(isSupportInternet: boolean  | undefined) {
        this['is_support_internet'] = isSupportInternet;
    }
    public get isSupportInternet(): boolean | undefined {
        return this['is_support_internet'];
    }
    public withInternetMode(internetMode: PoolDesktopsDetailInfoInternetModeEnum | string): PoolDesktopsDetailInfo {
        this['internet_mode'] = internetMode;
        return this;
    }
    public set internetMode(internetMode: PoolDesktopsDetailInfoInternetModeEnum | string  | undefined) {
        this['internet_mode'] = internetMode;
    }
    public get internetMode(): PoolDesktopsDetailInfoInternetModeEnum | string | undefined {
        return this['internet_mode'];
    }
    public withInternetModeList(internetModeList: Array<string>): PoolDesktopsDetailInfo {
        this['internet_mode_list'] = internetModeList;
        return this;
    }
    public set internetModeList(internetModeList: Array<string>  | undefined) {
        this['internet_mode_list'] = internetModeList;
    }
    public get internetModeList(): Array<string> | undefined {
        return this['internet_mode_list'];
    }
    public withIsAttachingEip(isAttachingEip: boolean): PoolDesktopsDetailInfo {
        this['is_attaching_eip'] = isAttachingEip;
        return this;
    }
    public set isAttachingEip(isAttachingEip: boolean  | undefined) {
        this['is_attaching_eip'] = isAttachingEip;
    }
    public get isAttachingEip(): boolean | undefined {
        return this['is_attaching_eip'];
    }
    public withAttachState(attachState: PoolDesktopsDetailInfoAttachStateEnum | string): PoolDesktopsDetailInfo {
        this['attach_state'] = attachState;
        return this;
    }
    public set attachState(attachState: PoolDesktopsDetailInfoAttachStateEnum | string  | undefined) {
        this['attach_state'] = attachState;
    }
    public get attachState(): PoolDesktopsDetailInfoAttachStateEnum | string | undefined {
        return this['attach_state'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PoolDesktopsDetailInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSubnetId(subnetId: string): PoolDesktopsDetailInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withBillResourceId(billResourceId: string): PoolDesktopsDetailInfo {
        this['bill_resource_id'] = billResourceId;
        return this;
    }
    public set billResourceId(billResourceId: string  | undefined) {
        this['bill_resource_id'] = billResourceId;
    }
    public get billResourceId(): string | undefined {
        return this['bill_resource_id'];
    }
    public withProcess(process: number): PoolDesktopsDetailInfo {
        this['process'] = process;
        return this;
    }
    public withRootResourceId(rootResourceId: string): PoolDesktopsDetailInfo {
        this['root_resource_id'] = rootResourceId;
        return this;
    }
    public set rootResourceId(rootResourceId: string  | undefined) {
        this['root_resource_id'] = rootResourceId;
    }
    public get rootResourceId(): string | undefined {
        return this['root_resource_id'];
    }
    public withHourPackageInfo(hourPackageInfo: HourPackageInfo): PoolDesktopsDetailInfo {
        this['hour_package_info'] = hourPackageInfo;
        return this;
    }
    public set hourPackageInfo(hourPackageInfo: HourPackageInfo  | undefined) {
        this['hour_package_info'] = hourPackageInfo;
    }
    public get hourPackageInfo(): HourPackageInfo | undefined {
        return this['hour_package_info'];
    }
    public withIsFreeze(isFreeze: boolean): PoolDesktopsDetailInfo {
        this['is_freeze'] = isFreeze;
        return this;
    }
    public set isFreeze(isFreeze: boolean  | undefined) {
        this['is_freeze'] = isFreeze;
    }
    public get isFreeze(): boolean | undefined {
        return this['is_freeze'];
    }
    public withInconsistentTypes(inconsistentTypes: Array<string>): PoolDesktopsDetailInfo {
        this['inconsistent_types'] = inconsistentTypes;
        return this;
    }
    public set inconsistentTypes(inconsistentTypes: Array<string>  | undefined) {
        this['inconsistent_types'] = inconsistentTypes;
    }
    public get inconsistentTypes(): Array<string> | undefined {
        return this['inconsistent_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoolDesktopsDetailInfoInternetModeEnum {
    NAT = 'NAT',
    EIP = 'EIP',
    BOTH = 'BOTH'
}
/**
    * @export
    * @enum {string}
    */
export enum PoolDesktopsDetailInfoAttachStateEnum {
    ATTACHED = 'ATTACHED',
    UNATTACH = 'UNATTACH',
    DEATTACHED = 'DEATTACHED',
    ATTACHING = 'ATTACHING',
    DEATTACHING = 'DEATTACHING',
    ATTACHFAIL = 'ATTACHFAIL',
    DEATTACHFAIL = 'DEATTACHFAIL',
    WAITING = 'WAITING',
    ATTACH_FAIL_CAN_ATTACH_AGAIN = 'ATTACH_FAIL_CAN_ATTACH_AGAIN',
    DEATTACH_FAIL_CAN_DEATTACH_AGAIN = 'DEATTACH_FAIL_CAN_DEATTACH_AGAIN'
}

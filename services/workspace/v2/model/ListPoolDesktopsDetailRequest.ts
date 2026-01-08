

export class ListPoolDesktopsDetailRequest {
    private 'pool_id'?: string;
    private 'inconsistent_type'?: ListPoolDesktopsDetailRequestInconsistentTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public status?: string;
    private 'user_name'?: string;
    private 'user_names'?: Array<string>;
    private 'sort_field'?: ListPoolDesktopsDetailRequestSortFieldEnum | string;
    private 'sort_type'?: ListPoolDesktopsDetailRequestSortTypeEnum | string;
    private 'computer_name'?: string;
    private 'computer_names'?: Array<string>;
    private 'desktop_ip'?: string;
    private 'desktop_id'?: Array<string>;
    private 'desktop_type'?: string;
    public tag?: string;
    private 'user_attached'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'image_id'?: string;
    private 'charge_mode'?: string;
    private 'in_maintenance_mode'?: boolean;
    private 'is_share_desktop'?: boolean;
    private 'subnet_id'?: string;
    private 'is_support_internet'?: boolean;
    private 'availability_zone'?: string;
    public constructor(poolId?: string) { 
        this['pool_id'] = poolId;
    }
    public withPoolId(poolId: string): ListPoolDesktopsDetailRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withInconsistentType(inconsistentType: ListPoolDesktopsDetailRequestInconsistentTypeEnum | string): ListPoolDesktopsDetailRequest {
        this['inconsistent_type'] = inconsistentType;
        return this;
    }
    public set inconsistentType(inconsistentType: ListPoolDesktopsDetailRequestInconsistentTypeEnum | string  | undefined) {
        this['inconsistent_type'] = inconsistentType;
    }
    public get inconsistentType(): ListPoolDesktopsDetailRequestInconsistentTypeEnum | string | undefined {
        return this['inconsistent_type'];
    }
    public withOffset(offset: number): ListPoolDesktopsDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPoolDesktopsDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListPoolDesktopsDetailRequest {
        this['status'] = status;
        return this;
    }
    public withUserName(userName: string): ListPoolDesktopsDetailRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNames(userNames: Array<string>): ListPoolDesktopsDetailRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withSortField(sortField: ListPoolDesktopsDetailRequestSortFieldEnum | string): ListPoolDesktopsDetailRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListPoolDesktopsDetailRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListPoolDesktopsDetailRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListPoolDesktopsDetailRequestSortTypeEnum | string): ListPoolDesktopsDetailRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListPoolDesktopsDetailRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListPoolDesktopsDetailRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withComputerName(computerName: string): ListPoolDesktopsDetailRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withComputerNames(computerNames: Array<string>): ListPoolDesktopsDetailRequest {
        this['computer_names'] = computerNames;
        return this;
    }
    public set computerNames(computerNames: Array<string>  | undefined) {
        this['computer_names'] = computerNames;
    }
    public get computerNames(): Array<string> | undefined {
        return this['computer_names'];
    }
    public withDesktopIp(desktopIp: string): ListPoolDesktopsDetailRequest {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withDesktopId(desktopId: Array<string>): ListPoolDesktopsDetailRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: Array<string>  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): Array<string> | undefined {
        return this['desktop_id'];
    }
    public withDesktopType(desktopType: string): ListPoolDesktopsDetailRequest {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withTag(tag: string): ListPoolDesktopsDetailRequest {
        this['tag'] = tag;
        return this;
    }
    public withUserAttached(userAttached: boolean): ListPoolDesktopsDetailRequest {
        this['user_attached'] = userAttached;
        return this;
    }
    public set userAttached(userAttached: boolean  | undefined) {
        this['user_attached'] = userAttached;
    }
    public get userAttached(): boolean | undefined {
        return this['user_attached'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPoolDesktopsDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageId(imageId: string): ListPoolDesktopsDetailRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withChargeMode(chargeMode: string): ListPoolDesktopsDetailRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): ListPoolDesktopsDetailRequest {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withIsShareDesktop(isShareDesktop: boolean): ListPoolDesktopsDetailRequest {
        this['is_share_desktop'] = isShareDesktop;
        return this;
    }
    public set isShareDesktop(isShareDesktop: boolean  | undefined) {
        this['is_share_desktop'] = isShareDesktop;
    }
    public get isShareDesktop(): boolean | undefined {
        return this['is_share_desktop'];
    }
    public withSubnetId(subnetId: string): ListPoolDesktopsDetailRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIsSupportInternet(isSupportInternet: boolean): ListPoolDesktopsDetailRequest {
        this['is_support_internet'] = isSupportInternet;
        return this;
    }
    public set isSupportInternet(isSupportInternet: boolean  | undefined) {
        this['is_support_internet'] = isSupportInternet;
    }
    public get isSupportInternet(): boolean | undefined {
        return this['is_support_internet'];
    }
    public withAvailabilityZone(availabilityZone: string): ListPoolDesktopsDetailRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListPoolDesktopsDetailRequestInconsistentTypeEnum {
    PRODUCT_ID = 'PRODUCT_ID',
    IMAGE_ID = 'IMAGE_ID',
    DISK_NUM = 'DISK_NUM',
    DISK_SIZE = 'DISK_SIZE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPoolDesktopsDetailRequestSortFieldEnum {
    CREATED = 'created',
    COMPUTER_NAME = 'computer_name'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPoolDesktopsDetailRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}

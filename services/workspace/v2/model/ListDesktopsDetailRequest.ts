

export class ListDesktopsDetailRequest {
    public status?: string;
    private 'user_name'?: string;
    private 'user_names'?: Array<string>;
    private 'sort_field'?: ListDesktopsDetailRequestSortFieldEnum | string;
    private 'sort_type'?: ListDesktopsDetailRequestSortTypeEnum | string;
    private 'computer_name'?: string;
    private 'desktop_ip'?: string;
    public sids?: string;
    public offset?: number;
    public limit?: number;
    private 'desktop_id'?: Array<string>;
    private 'desktop_type'?: string;
    private 'login_status'?: string;
    public tag?: string;
    private 'fuzzy_query'?: boolean;
    private 'pool_id'?: string;
    private 'user_attached'?: boolean;
    private 'enterprise_project_id'?: string;
    private 'image_id'?: string;
    private 'charge_mode'?: string;
    private 'in_maintenance_mode'?: boolean;
    private 'is_share_desktop'?: boolean;
    private 'subnet_id'?: string;
    private 'is_support_internet'?: boolean;
    private 'availability_zone'?: string;
    public constructor() { 
    }
    public withStatus(status: string): ListDesktopsDetailRequest {
        this['status'] = status;
        return this;
    }
    public withUserName(userName: string): ListDesktopsDetailRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNames(userNames: Array<string>): ListDesktopsDetailRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withSortField(sortField: ListDesktopsDetailRequestSortFieldEnum | string): ListDesktopsDetailRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ListDesktopsDetailRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ListDesktopsDetailRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ListDesktopsDetailRequestSortTypeEnum | string): ListDesktopsDetailRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ListDesktopsDetailRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ListDesktopsDetailRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withComputerName(computerName: string): ListDesktopsDetailRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withDesktopIp(desktopIp: string): ListDesktopsDetailRequest {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withSids(sids: string): ListDesktopsDetailRequest {
        this['sids'] = sids;
        return this;
    }
    public withOffset(offset: number): ListDesktopsDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDesktopsDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withDesktopId(desktopId: Array<string>): ListDesktopsDetailRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: Array<string>  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): Array<string> | undefined {
        return this['desktop_id'];
    }
    public withDesktopType(desktopType: string): ListDesktopsDetailRequest {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withLoginStatus(loginStatus: string): ListDesktopsDetailRequest {
        this['login_status'] = loginStatus;
        return this;
    }
    public set loginStatus(loginStatus: string  | undefined) {
        this['login_status'] = loginStatus;
    }
    public get loginStatus(): string | undefined {
        return this['login_status'];
    }
    public withTag(tag: string): ListDesktopsDetailRequest {
        this['tag'] = tag;
        return this;
    }
    public withFuzzyQuery(fuzzyQuery: boolean): ListDesktopsDetailRequest {
        this['fuzzy_query'] = fuzzyQuery;
        return this;
    }
    public set fuzzyQuery(fuzzyQuery: boolean  | undefined) {
        this['fuzzy_query'] = fuzzyQuery;
    }
    public get fuzzyQuery(): boolean | undefined {
        return this['fuzzy_query'];
    }
    public withPoolId(poolId: string): ListDesktopsDetailRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withUserAttached(userAttached: boolean): ListDesktopsDetailRequest {
        this['user_attached'] = userAttached;
        return this;
    }
    public set userAttached(userAttached: boolean  | undefined) {
        this['user_attached'] = userAttached;
    }
    public get userAttached(): boolean | undefined {
        return this['user_attached'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDesktopsDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withImageId(imageId: string): ListDesktopsDetailRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withChargeMode(chargeMode: string): ListDesktopsDetailRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): ListDesktopsDetailRequest {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withIsShareDesktop(isShareDesktop: boolean): ListDesktopsDetailRequest {
        this['is_share_desktop'] = isShareDesktop;
        return this;
    }
    public set isShareDesktop(isShareDesktop: boolean  | undefined) {
        this['is_share_desktop'] = isShareDesktop;
    }
    public get isShareDesktop(): boolean | undefined {
        return this['is_share_desktop'];
    }
    public withSubnetId(subnetId: string): ListDesktopsDetailRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIsSupportInternet(isSupportInternet: boolean): ListDesktopsDetailRequest {
        this['is_support_internet'] = isSupportInternet;
        return this;
    }
    public set isSupportInternet(isSupportInternet: boolean  | undefined) {
        this['is_support_internet'] = isSupportInternet;
    }
    public get isSupportInternet(): boolean | undefined {
        return this['is_support_internet'];
    }
    public withAvailabilityZone(availabilityZone: string): ListDesktopsDetailRequest {
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
export enum ListDesktopsDetailRequestSortFieldEnum {
    CREATED = 'created',
    COMPUTER_NAME = 'computer_name'
}
/**
    * @export
    * @enum {string}
    */
export enum ListDesktopsDetailRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}

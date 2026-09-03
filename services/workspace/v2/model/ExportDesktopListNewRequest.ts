

export class ExportDesktopListNewRequest {
    private 'computer_name'?: string;
    private 'computer_names'?: Array<string>;
    private 'desktop_ip'?: string;
    private 'desktop_id'?: string;
    public tag?: string;
    private 'without_any_tag'?: boolean;
    public language?: ExportDesktopListNewRequestLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    private 'desktop_type'?: string;
    public status?: string;
    private 'user_names'?: Array<string>;
    private 'sort_field'?: ExportDesktopListNewRequestSortFieldEnum | string;
    private 'sort_type'?: ExportDesktopListNewRequestSortTypeEnum | string;
    private 'user_attached'?: boolean;
    private 'image_id'?: string;
    private 'charge_mode'?: string;
    private 'in_maintenance_mode'?: boolean;
    private 'subnet_id'?: string;
    private 'connection_status_version'?: string;
    private 'pool_id'?: string;
    private 'include_pool'?: boolean;
    private 'pool_name'?: string;
    private 'pool_type'?: ExportDesktopListNewRequestPoolTypeEnum | string;
    private 'pool_in_maintenance_mode'?: boolean;
    private 'pool_enterprise_project_id'?: string;
    public constructor(language?: string) { 
        this['language'] = language;
    }
    public withComputerName(computerName: string): ExportDesktopListNewRequest {
        this['computer_name'] = computerName;
        return this;
    }
    public set computerName(computerName: string  | undefined) {
        this['computer_name'] = computerName;
    }
    public get computerName(): string | undefined {
        return this['computer_name'];
    }
    public withComputerNames(computerNames: Array<string>): ExportDesktopListNewRequest {
        this['computer_names'] = computerNames;
        return this;
    }
    public set computerNames(computerNames: Array<string>  | undefined) {
        this['computer_names'] = computerNames;
    }
    public get computerNames(): Array<string> | undefined {
        return this['computer_names'];
    }
    public withDesktopIp(desktopIp: string): ExportDesktopListNewRequest {
        this['desktop_ip'] = desktopIp;
        return this;
    }
    public set desktopIp(desktopIp: string  | undefined) {
        this['desktop_ip'] = desktopIp;
    }
    public get desktopIp(): string | undefined {
        return this['desktop_ip'];
    }
    public withDesktopId(desktopId: string): ExportDesktopListNewRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withTag(tag: string): ExportDesktopListNewRequest {
        this['tag'] = tag;
        return this;
    }
    public withWithoutAnyTag(withoutAnyTag: boolean): ExportDesktopListNewRequest {
        this['without_any_tag'] = withoutAnyTag;
        return this;
    }
    public set withoutAnyTag(withoutAnyTag: boolean  | undefined) {
        this['without_any_tag'] = withoutAnyTag;
    }
    public get withoutAnyTag(): boolean | undefined {
        return this['without_any_tag'];
    }
    public withLanguage(language: ExportDesktopListNewRequestLanguageEnum | string): ExportDesktopListNewRequest {
        this['language'] = language;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ExportDesktopListNewRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDesktopType(desktopType: string): ExportDesktopListNewRequest {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): string | undefined {
        return this['desktop_type'];
    }
    public withStatus(status: string): ExportDesktopListNewRequest {
        this['status'] = status;
        return this;
    }
    public withUserNames(userNames: Array<string>): ExportDesktopListNewRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withSortField(sortField: ExportDesktopListNewRequestSortFieldEnum | string): ExportDesktopListNewRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: ExportDesktopListNewRequestSortFieldEnum | string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): ExportDesktopListNewRequestSortFieldEnum | string | undefined {
        return this['sort_field'];
    }
    public withSortType(sortType: ExportDesktopListNewRequestSortTypeEnum | string): ExportDesktopListNewRequest {
        this['sort_type'] = sortType;
        return this;
    }
    public set sortType(sortType: ExportDesktopListNewRequestSortTypeEnum | string  | undefined) {
        this['sort_type'] = sortType;
    }
    public get sortType(): ExportDesktopListNewRequestSortTypeEnum | string | undefined {
        return this['sort_type'];
    }
    public withUserAttached(userAttached: boolean): ExportDesktopListNewRequest {
        this['user_attached'] = userAttached;
        return this;
    }
    public set userAttached(userAttached: boolean  | undefined) {
        this['user_attached'] = userAttached;
    }
    public get userAttached(): boolean | undefined {
        return this['user_attached'];
    }
    public withImageId(imageId: string): ExportDesktopListNewRequest {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withChargeMode(chargeMode: string): ExportDesktopListNewRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withInMaintenanceMode(inMaintenanceMode: boolean): ExportDesktopListNewRequest {
        this['in_maintenance_mode'] = inMaintenanceMode;
        return this;
    }
    public set inMaintenanceMode(inMaintenanceMode: boolean  | undefined) {
        this['in_maintenance_mode'] = inMaintenanceMode;
    }
    public get inMaintenanceMode(): boolean | undefined {
        return this['in_maintenance_mode'];
    }
    public withSubnetId(subnetId: string): ExportDesktopListNewRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withConnectionStatusVersion(connectionStatusVersion: string): ExportDesktopListNewRequest {
        this['connection_status_version'] = connectionStatusVersion;
        return this;
    }
    public set connectionStatusVersion(connectionStatusVersion: string  | undefined) {
        this['connection_status_version'] = connectionStatusVersion;
    }
    public get connectionStatusVersion(): string | undefined {
        return this['connection_status_version'];
    }
    public withPoolId(poolId: string): ExportDesktopListNewRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withIncludePool(includePool: boolean): ExportDesktopListNewRequest {
        this['include_pool'] = includePool;
        return this;
    }
    public set includePool(includePool: boolean  | undefined) {
        this['include_pool'] = includePool;
    }
    public get includePool(): boolean | undefined {
        return this['include_pool'];
    }
    public withPoolName(poolName: string): ExportDesktopListNewRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withPoolType(poolType: ExportDesktopListNewRequestPoolTypeEnum | string): ExportDesktopListNewRequest {
        this['pool_type'] = poolType;
        return this;
    }
    public set poolType(poolType: ExportDesktopListNewRequestPoolTypeEnum | string  | undefined) {
        this['pool_type'] = poolType;
    }
    public get poolType(): ExportDesktopListNewRequestPoolTypeEnum | string | undefined {
        return this['pool_type'];
    }
    public withPoolInMaintenanceMode(poolInMaintenanceMode: boolean): ExportDesktopListNewRequest {
        this['pool_in_maintenance_mode'] = poolInMaintenanceMode;
        return this;
    }
    public set poolInMaintenanceMode(poolInMaintenanceMode: boolean  | undefined) {
        this['pool_in_maintenance_mode'] = poolInMaintenanceMode;
    }
    public get poolInMaintenanceMode(): boolean | undefined {
        return this['pool_in_maintenance_mode'];
    }
    public withPoolEnterpriseProjectId(poolEnterpriseProjectId: string): ExportDesktopListNewRequest {
        this['pool_enterprise_project_id'] = poolEnterpriseProjectId;
        return this;
    }
    public set poolEnterpriseProjectId(poolEnterpriseProjectId: string  | undefined) {
        this['pool_enterprise_project_id'] = poolEnterpriseProjectId;
    }
    public get poolEnterpriseProjectId(): string | undefined {
        return this['pool_enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportDesktopListNewRequestLanguageEnum {
    ZH_CN = 'zh_CN',
    EN_US = 'en_US'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportDesktopListNewRequestSortFieldEnum {
    CREATED = 'created',
    COMPUTER_NAME = 'computer_name'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportDesktopListNewRequestSortTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}
/**
    * @export
    * @enum {string}
    */
export enum ExportDesktopListNewRequestPoolTypeEnum {
    DYNAMIC = 'DYNAMIC',
    STATIC = 'STATIC'
}

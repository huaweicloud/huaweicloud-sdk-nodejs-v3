import { AppSourceType } from './AppSourceType';
import { AppStatusEnum } from './AppStatusEnum';
import { AssignType } from './AssignType';
import { FileStoreLink } from './FileStoreLink';
import { InstallType } from './InstallType';
import { OsTypeEnum } from './OsTypeEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUploadedAppResponse extends SdkResponse {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public version?: string;
    public description?: string;
    private 'authorization_type'?: AssignType;
    private 'app_file_store'?: FileStoreLink;
    private 'app_icon_url'?: string;
    private 'install_type'?: InstallType;
    private 'install_command'?: string;
    private 'uninstall_command'?: string;
    private 'support_os'?: OsTypeEnum;
    public status?: AppStatusEnum;
    private 'application_source'?: AppSourceType;
    private 'create_time'?: Date;
    private 'catalog_id'?: string;
    public catalog?: string;
    private 'install_info'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateUploadedAppResponse {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): UpdateUploadedAppResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): UpdateUploadedAppResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): UpdateUploadedAppResponse {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): UpdateUploadedAppResponse {
        this['description'] = description;
        return this;
    }
    public withAuthorizationType(authorizationType: AssignType): UpdateUploadedAppResponse {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AssignType  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AssignType | undefined {
        return this['authorization_type'];
    }
    public withAppFileStore(appFileStore: FileStoreLink): UpdateUploadedAppResponse {
        this['app_file_store'] = appFileStore;
        return this;
    }
    public set appFileStore(appFileStore: FileStoreLink  | undefined) {
        this['app_file_store'] = appFileStore;
    }
    public get appFileStore(): FileStoreLink | undefined {
        return this['app_file_store'];
    }
    public withAppIconUrl(appIconUrl: string): UpdateUploadedAppResponse {
        this['app_icon_url'] = appIconUrl;
        return this;
    }
    public set appIconUrl(appIconUrl: string  | undefined) {
        this['app_icon_url'] = appIconUrl;
    }
    public get appIconUrl(): string | undefined {
        return this['app_icon_url'];
    }
    public withInstallType(installType: InstallType): UpdateUploadedAppResponse {
        this['install_type'] = installType;
        return this;
    }
    public set installType(installType: InstallType  | undefined) {
        this['install_type'] = installType;
    }
    public get installType(): InstallType | undefined {
        return this['install_type'];
    }
    public withInstallCommand(installCommand: string): UpdateUploadedAppResponse {
        this['install_command'] = installCommand;
        return this;
    }
    public set installCommand(installCommand: string  | undefined) {
        this['install_command'] = installCommand;
    }
    public get installCommand(): string | undefined {
        return this['install_command'];
    }
    public withUninstallCommand(uninstallCommand: string): UpdateUploadedAppResponse {
        this['uninstall_command'] = uninstallCommand;
        return this;
    }
    public set uninstallCommand(uninstallCommand: string  | undefined) {
        this['uninstall_command'] = uninstallCommand;
    }
    public get uninstallCommand(): string | undefined {
        return this['uninstall_command'];
    }
    public withSupportOs(supportOs: OsTypeEnum): UpdateUploadedAppResponse {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: OsTypeEnum  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): OsTypeEnum | undefined {
        return this['support_os'];
    }
    public withStatus(status: AppStatusEnum): UpdateUploadedAppResponse {
        this['status'] = status;
        return this;
    }
    public withApplicationSource(applicationSource: AppSourceType): UpdateUploadedAppResponse {
        this['application_source'] = applicationSource;
        return this;
    }
    public set applicationSource(applicationSource: AppSourceType  | undefined) {
        this['application_source'] = applicationSource;
    }
    public get applicationSource(): AppSourceType | undefined {
        return this['application_source'];
    }
    public withCreateTime(createTime: Date): UpdateUploadedAppResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCatalogId(catalogId: string): UpdateUploadedAppResponse {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withCatalog(catalog: string): UpdateUploadedAppResponse {
        this['catalog'] = catalog;
        return this;
    }
    public withInstallInfo(installInfo: string): UpdateUploadedAppResponse {
        this['install_info'] = installInfo;
        return this;
    }
    public set installInfo(installInfo: string  | undefined) {
        this['install_info'] = installInfo;
    }
    public get installInfo(): string | undefined {
        return this['install_info'];
    }
}
import { AppStatusEnum } from './AppStatusEnum';
import { AssignType } from './AssignType';
import { FileStoreLink } from './FileStoreLink';
import { InstallType } from './InstallType';
import { OsTypeEnum } from './OsTypeEnum';


export class UpdateAppReq {
    public name?: string;
    public version?: string;
    public description?: string;
    private 'app_file_store'?: FileStoreLink;
    private 'app_icon_url'?: string;
    private 'install_type'?: InstallType;
    private 'authorization_type'?: AssignType;
    private 'install_command'?: string;
    private 'uninstall_command'?: string;
    private 'support_os'?: OsTypeEnum;
    private 'catalog_id'?: string;
    public status?: AppStatusEnum;
    private 'install_info'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAppReq {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): UpdateAppReq {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): UpdateAppReq {
        this['description'] = description;
        return this;
    }
    public withAppFileStore(appFileStore: FileStoreLink): UpdateAppReq {
        this['app_file_store'] = appFileStore;
        return this;
    }
    public set appFileStore(appFileStore: FileStoreLink  | undefined) {
        this['app_file_store'] = appFileStore;
    }
    public get appFileStore(): FileStoreLink | undefined {
        return this['app_file_store'];
    }
    public withAppIconUrl(appIconUrl: string): UpdateAppReq {
        this['app_icon_url'] = appIconUrl;
        return this;
    }
    public set appIconUrl(appIconUrl: string  | undefined) {
        this['app_icon_url'] = appIconUrl;
    }
    public get appIconUrl(): string | undefined {
        return this['app_icon_url'];
    }
    public withInstallType(installType: InstallType): UpdateAppReq {
        this['install_type'] = installType;
        return this;
    }
    public set installType(installType: InstallType  | undefined) {
        this['install_type'] = installType;
    }
    public get installType(): InstallType | undefined {
        return this['install_type'];
    }
    public withAuthorizationType(authorizationType: AssignType): UpdateAppReq {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AssignType  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AssignType | undefined {
        return this['authorization_type'];
    }
    public withInstallCommand(installCommand: string): UpdateAppReq {
        this['install_command'] = installCommand;
        return this;
    }
    public set installCommand(installCommand: string  | undefined) {
        this['install_command'] = installCommand;
    }
    public get installCommand(): string | undefined {
        return this['install_command'];
    }
    public withUninstallCommand(uninstallCommand: string): UpdateAppReq {
        this['uninstall_command'] = uninstallCommand;
        return this;
    }
    public set uninstallCommand(uninstallCommand: string  | undefined) {
        this['uninstall_command'] = uninstallCommand;
    }
    public get uninstallCommand(): string | undefined {
        return this['uninstall_command'];
    }
    public withSupportOs(supportOs: OsTypeEnum): UpdateAppReq {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: OsTypeEnum  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): OsTypeEnum | undefined {
        return this['support_os'];
    }
    public withCatalogId(catalogId: string): UpdateAppReq {
        this['catalog_id'] = catalogId;
        return this;
    }
    public set catalogId(catalogId: string  | undefined) {
        this['catalog_id'] = catalogId;
    }
    public get catalogId(): string | undefined {
        return this['catalog_id'];
    }
    public withStatus(status: AppStatusEnum): UpdateAppReq {
        this['status'] = status;
        return this;
    }
    public withInstallInfo(installInfo: string): UpdateAppReq {
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
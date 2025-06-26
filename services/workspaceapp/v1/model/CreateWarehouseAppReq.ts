import { AppCategoryEnum } from './AppCategoryEnum';
import { OsTypeEnum } from './OsTypeEnum';


export class CreateWarehouseAppReq {
    private 'app_name'?: string;
    private 'app_category'?: AppCategoryEnum;
    private 'os_type'?: OsTypeEnum;
    private 'version_id'?: string;
    private 'app_description'?: string;
    private 'version_name'?: string;
    private 'appfile_store_path'?: string;
    private 'app_icon'?: string;
    private 'app_file_size'?: number;
    public constructor(appName?: string, appCategory?: AppCategoryEnum, osType?: OsTypeEnum, versionId?: string, versionName?: string, appfileStorePath?: string) { 
        this['app_name'] = appName;
        this['app_category'] = appCategory;
        this['os_type'] = osType;
        this['version_id'] = versionId;
        this['version_name'] = versionName;
        this['appfile_store_path'] = appfileStorePath;
    }
    public withAppName(appName: string): CreateWarehouseAppReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppCategory(appCategory: AppCategoryEnum): CreateWarehouseAppReq {
        this['app_category'] = appCategory;
        return this;
    }
    public set appCategory(appCategory: AppCategoryEnum  | undefined) {
        this['app_category'] = appCategory;
    }
    public get appCategory(): AppCategoryEnum | undefined {
        return this['app_category'];
    }
    public withOsType(osType: OsTypeEnum): CreateWarehouseAppReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withVersionId(versionId: string): CreateWarehouseAppReq {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withAppDescription(appDescription: string): CreateWarehouseAppReq {
        this['app_description'] = appDescription;
        return this;
    }
    public set appDescription(appDescription: string  | undefined) {
        this['app_description'] = appDescription;
    }
    public get appDescription(): string | undefined {
        return this['app_description'];
    }
    public withVersionName(versionName: string): CreateWarehouseAppReq {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAppfileStorePath(appfileStorePath: string): CreateWarehouseAppReq {
        this['appfile_store_path'] = appfileStorePath;
        return this;
    }
    public set appfileStorePath(appfileStorePath: string  | undefined) {
        this['appfile_store_path'] = appfileStorePath;
    }
    public get appfileStorePath(): string | undefined {
        return this['appfile_store_path'];
    }
    public withAppIcon(appIcon: string): CreateWarehouseAppReq {
        this['app_icon'] = appIcon;
        return this;
    }
    public set appIcon(appIcon: string  | undefined) {
        this['app_icon'] = appIcon;
    }
    public get appIcon(): string | undefined {
        return this['app_icon'];
    }
    public withAppFileSize(appFileSize: number): CreateWarehouseAppReq {
        this['app_file_size'] = appFileSize;
        return this;
    }
    public set appFileSize(appFileSize: number  | undefined) {
        this['app_file_size'] = appFileSize;
    }
    public get appFileSize(): number | undefined {
        return this['app_file_size'];
    }
}
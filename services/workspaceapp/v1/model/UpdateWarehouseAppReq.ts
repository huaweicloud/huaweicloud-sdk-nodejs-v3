import { AppCategoryEnum } from './AppCategoryEnum';
import { AppExtendedInfo } from './AppExtendedInfo';
import { OsTypeEnum } from './OsTypeEnum';


export class UpdateWarehouseAppReq {
    private 'app_name'?: string;
    private 'app_category'?: AppCategoryEnum;
    private 'os_type'?: OsTypeEnum;
    private 'version_id'?: string;
    private 'app_description'?: string;
    private 'version_name'?: string;
    private 'app_icon'?: string;
    private 'app_extended_info'?: AppExtendedInfo;
    public constructor() { 
    }
    public withAppName(appName: string): UpdateWarehouseAppReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppCategory(appCategory: AppCategoryEnum): UpdateWarehouseAppReq {
        this['app_category'] = appCategory;
        return this;
    }
    public set appCategory(appCategory: AppCategoryEnum  | undefined) {
        this['app_category'] = appCategory;
    }
    public get appCategory(): AppCategoryEnum | undefined {
        return this['app_category'];
    }
    public withOsType(osType: OsTypeEnum): UpdateWarehouseAppReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withVersionId(versionId: string): UpdateWarehouseAppReq {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withAppDescription(appDescription: string): UpdateWarehouseAppReq {
        this['app_description'] = appDescription;
        return this;
    }
    public set appDescription(appDescription: string  | undefined) {
        this['app_description'] = appDescription;
    }
    public get appDescription(): string | undefined {
        return this['app_description'];
    }
    public withVersionName(versionName: string): UpdateWarehouseAppReq {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAppIcon(appIcon: string): UpdateWarehouseAppReq {
        this['app_icon'] = appIcon;
        return this;
    }
    public set appIcon(appIcon: string  | undefined) {
        this['app_icon'] = appIcon;
    }
    public get appIcon(): string | undefined {
        return this['app_icon'];
    }
    public withAppExtendedInfo(appExtendedInfo: AppExtendedInfo): UpdateWarehouseAppReq {
        this['app_extended_info'] = appExtendedInfo;
        return this;
    }
    public set appExtendedInfo(appExtendedInfo: AppExtendedInfo  | undefined) {
        this['app_extended_info'] = appExtendedInfo;
    }
    public get appExtendedInfo(): AppExtendedInfo | undefined {
        return this['app_extended_info'];
    }
}
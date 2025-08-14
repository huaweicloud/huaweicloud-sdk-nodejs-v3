import { AppCategoryEnum } from './AppCategoryEnum';
import { AppExtendedInfo } from './AppExtendedInfo';
import { OsTypeEnum } from './OsTypeEnum';
import { VerifyStatusEnum } from './VerifyStatusEnum';


export class WarehouseApp {
    public id?: string;
    private 'app_id'?: string;
    private 'tenant_id'?: string;
    private 'app_name'?: string;
    private 'app_category'?: AppCategoryEnum;
    private 'os_type'?: OsTypeEnum;
    private 'version_id'?: string;
    private 'version_name'?: string;
    private 'appfile_store_path'?: string;
    private 'app_file_size'?: string;
    private 'app_description'?: string;
    private 'appicon_store_path'?: string;
    private 'create_time'?: Date;
    private 'modify_time'?: Date;
    private 'verify_time'?: Date;
    private 'verify_status'?: VerifyStatusEnum;
    private 'verify_comment'?: string;
    private 'app_icon'?: string;
    private 'app_extended_info'?: AppExtendedInfo;
    public constructor() { 
    }
    public withId(id: string): WarehouseApp {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): WarehouseApp {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTenantId(tenantId: string): WarehouseApp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAppName(appName: string): WarehouseApp {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppCategory(appCategory: AppCategoryEnum): WarehouseApp {
        this['app_category'] = appCategory;
        return this;
    }
    public set appCategory(appCategory: AppCategoryEnum  | undefined) {
        this['app_category'] = appCategory;
    }
    public get appCategory(): AppCategoryEnum | undefined {
        return this['app_category'];
    }
    public withOsType(osType: OsTypeEnum): WarehouseApp {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withVersionId(versionId: string): WarehouseApp {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionName(versionName: string): WarehouseApp {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withAppfileStorePath(appfileStorePath: string): WarehouseApp {
        this['appfile_store_path'] = appfileStorePath;
        return this;
    }
    public set appfileStorePath(appfileStorePath: string  | undefined) {
        this['appfile_store_path'] = appfileStorePath;
    }
    public get appfileStorePath(): string | undefined {
        return this['appfile_store_path'];
    }
    public withAppFileSize(appFileSize: string): WarehouseApp {
        this['app_file_size'] = appFileSize;
        return this;
    }
    public set appFileSize(appFileSize: string  | undefined) {
        this['app_file_size'] = appFileSize;
    }
    public get appFileSize(): string | undefined {
        return this['app_file_size'];
    }
    public withAppDescription(appDescription: string): WarehouseApp {
        this['app_description'] = appDescription;
        return this;
    }
    public set appDescription(appDescription: string  | undefined) {
        this['app_description'] = appDescription;
    }
    public get appDescription(): string | undefined {
        return this['app_description'];
    }
    public withAppiconStorePath(appiconStorePath: string): WarehouseApp {
        this['appicon_store_path'] = appiconStorePath;
        return this;
    }
    public set appiconStorePath(appiconStorePath: string  | undefined) {
        this['appicon_store_path'] = appiconStorePath;
    }
    public get appiconStorePath(): string | undefined {
        return this['appicon_store_path'];
    }
    public withCreateTime(createTime: Date): WarehouseApp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: Date): WarehouseApp {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: Date  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): Date | undefined {
        return this['modify_time'];
    }
    public withVerifyTime(verifyTime: Date): WarehouseApp {
        this['verify_time'] = verifyTime;
        return this;
    }
    public set verifyTime(verifyTime: Date  | undefined) {
        this['verify_time'] = verifyTime;
    }
    public get verifyTime(): Date | undefined {
        return this['verify_time'];
    }
    public withVerifyStatus(verifyStatus: VerifyStatusEnum): WarehouseApp {
        this['verify_status'] = verifyStatus;
        return this;
    }
    public set verifyStatus(verifyStatus: VerifyStatusEnum  | undefined) {
        this['verify_status'] = verifyStatus;
    }
    public get verifyStatus(): VerifyStatusEnum | undefined {
        return this['verify_status'];
    }
    public withVerifyComment(verifyComment: string): WarehouseApp {
        this['verify_comment'] = verifyComment;
        return this;
    }
    public set verifyComment(verifyComment: string  | undefined) {
        this['verify_comment'] = verifyComment;
    }
    public get verifyComment(): string | undefined {
        return this['verify_comment'];
    }
    public withAppIcon(appIcon: string): WarehouseApp {
        this['app_icon'] = appIcon;
        return this;
    }
    public set appIcon(appIcon: string  | undefined) {
        this['app_icon'] = appIcon;
    }
    public get appIcon(): string | undefined {
        return this['app_icon'];
    }
    public withAppExtendedInfo(appExtendedInfo: AppExtendedInfo): WarehouseApp {
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
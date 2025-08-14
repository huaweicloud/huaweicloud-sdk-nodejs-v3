import { AppExtendedInfo } from './AppExtendedInfo';
import { AppStateEnum } from './AppStateEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public version?: string;
    private 'command_param'?: string;
    private 'execute_path'?: string;
    private 'work_path'?: string;
    private 'icon_path'?: string;
    private 'icon_index'?: number;
    public description?: string;
    private 'app_group_id'?: string;
    public state?: AppStateEnum;
    private 'tenant_id'?: string;
    private 'publish_at'?: Date;
    private 'source_type'?: number;
    public publisher?: string;
    private 'icon_url'?: string;
    public publishable?: boolean;
    private 'sandbox_enable'?: boolean;
    private 'is_pre_boot'?: boolean;
    private 'app_extended_info'?: AppExtendedInfo;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAppResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAppResponse {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): UpdateAppResponse {
        this['version'] = version;
        return this;
    }
    public withCommandParam(commandParam: string): UpdateAppResponse {
        this['command_param'] = commandParam;
        return this;
    }
    public set commandParam(commandParam: string  | undefined) {
        this['command_param'] = commandParam;
    }
    public get commandParam(): string | undefined {
        return this['command_param'];
    }
    public withExecutePath(executePath: string): UpdateAppResponse {
        this['execute_path'] = executePath;
        return this;
    }
    public set executePath(executePath: string  | undefined) {
        this['execute_path'] = executePath;
    }
    public get executePath(): string | undefined {
        return this['execute_path'];
    }
    public withWorkPath(workPath: string): UpdateAppResponse {
        this['work_path'] = workPath;
        return this;
    }
    public set workPath(workPath: string  | undefined) {
        this['work_path'] = workPath;
    }
    public get workPath(): string | undefined {
        return this['work_path'];
    }
    public withIconPath(iconPath: string): UpdateAppResponse {
        this['icon_path'] = iconPath;
        return this;
    }
    public set iconPath(iconPath: string  | undefined) {
        this['icon_path'] = iconPath;
    }
    public get iconPath(): string | undefined {
        return this['icon_path'];
    }
    public withIconIndex(iconIndex: number): UpdateAppResponse {
        this['icon_index'] = iconIndex;
        return this;
    }
    public set iconIndex(iconIndex: number  | undefined) {
        this['icon_index'] = iconIndex;
    }
    public get iconIndex(): number | undefined {
        return this['icon_index'];
    }
    public withDescription(description: string): UpdateAppResponse {
        this['description'] = description;
        return this;
    }
    public withAppGroupId(appGroupId: string): UpdateAppResponse {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withState(state: AppStateEnum): UpdateAppResponse {
        this['state'] = state;
        return this;
    }
    public withTenantId(tenantId: string): UpdateAppResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withPublishAt(publishAt: Date): UpdateAppResponse {
        this['publish_at'] = publishAt;
        return this;
    }
    public set publishAt(publishAt: Date  | undefined) {
        this['publish_at'] = publishAt;
    }
    public get publishAt(): Date | undefined {
        return this['publish_at'];
    }
    public withSourceType(sourceType: number): UpdateAppResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withPublisher(publisher: string): UpdateAppResponse {
        this['publisher'] = publisher;
        return this;
    }
    public withIconUrl(iconUrl: string): UpdateAppResponse {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withPublishable(publishable: boolean): UpdateAppResponse {
        this['publishable'] = publishable;
        return this;
    }
    public withSandboxEnable(sandboxEnable: boolean): UpdateAppResponse {
        this['sandbox_enable'] = sandboxEnable;
        return this;
    }
    public set sandboxEnable(sandboxEnable: boolean  | undefined) {
        this['sandbox_enable'] = sandboxEnable;
    }
    public get sandboxEnable(): boolean | undefined {
        return this['sandbox_enable'];
    }
    public withIsPreBoot(isPreBoot: boolean): UpdateAppResponse {
        this['is_pre_boot'] = isPreBoot;
        return this;
    }
    public set isPreBoot(isPreBoot: boolean  | undefined) {
        this['is_pre_boot'] = isPreBoot;
    }
    public get isPreBoot(): boolean | undefined {
        return this['is_pre_boot'];
    }
    public withAppExtendedInfo(appExtendedInfo: AppExtendedInfo): UpdateAppResponse {
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
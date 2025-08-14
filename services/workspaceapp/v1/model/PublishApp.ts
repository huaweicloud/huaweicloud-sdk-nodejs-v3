import { AppExtendedInfo } from './AppExtendedInfo';


export class PublishApp {
    public name?: string;
    public version?: string;
    private 'command_param'?: string;
    private 'icon_uri'?: string;
    private 'execute_path'?: string;
    private 'work_path'?: string;
    private 'icon_path'?: string;
    private 'icon_index'?: number;
    public description?: string;
    private 'source_type'?: number;
    public publisher?: string;
    private 'source_image_ids'?: Array<string>;
    private 'sandbox_enable'?: boolean;
    private 'app_extended_info'?: AppExtendedInfo;
    public constructor(name?: string, executePath?: string, sourceType?: number) { 
        this['name'] = name;
        this['execute_path'] = executePath;
        this['source_type'] = sourceType;
    }
    public withName(name: string): PublishApp {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): PublishApp {
        this['version'] = version;
        return this;
    }
    public withCommandParam(commandParam: string): PublishApp {
        this['command_param'] = commandParam;
        return this;
    }
    public set commandParam(commandParam: string  | undefined) {
        this['command_param'] = commandParam;
    }
    public get commandParam(): string | undefined {
        return this['command_param'];
    }
    public withIconUri(iconUri: string): PublishApp {
        this['icon_uri'] = iconUri;
        return this;
    }
    public set iconUri(iconUri: string  | undefined) {
        this['icon_uri'] = iconUri;
    }
    public get iconUri(): string | undefined {
        return this['icon_uri'];
    }
    public withExecutePath(executePath: string): PublishApp {
        this['execute_path'] = executePath;
        return this;
    }
    public set executePath(executePath: string  | undefined) {
        this['execute_path'] = executePath;
    }
    public get executePath(): string | undefined {
        return this['execute_path'];
    }
    public withWorkPath(workPath: string): PublishApp {
        this['work_path'] = workPath;
        return this;
    }
    public set workPath(workPath: string  | undefined) {
        this['work_path'] = workPath;
    }
    public get workPath(): string | undefined {
        return this['work_path'];
    }
    public withIconPath(iconPath: string): PublishApp {
        this['icon_path'] = iconPath;
        return this;
    }
    public set iconPath(iconPath: string  | undefined) {
        this['icon_path'] = iconPath;
    }
    public get iconPath(): string | undefined {
        return this['icon_path'];
    }
    public withIconIndex(iconIndex: number): PublishApp {
        this['icon_index'] = iconIndex;
        return this;
    }
    public set iconIndex(iconIndex: number  | undefined) {
        this['icon_index'] = iconIndex;
    }
    public get iconIndex(): number | undefined {
        return this['icon_index'];
    }
    public withDescription(description: string): PublishApp {
        this['description'] = description;
        return this;
    }
    public withSourceType(sourceType: number): PublishApp {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withPublisher(publisher: string): PublishApp {
        this['publisher'] = publisher;
        return this;
    }
    public withSourceImageIds(sourceImageIds: Array<string>): PublishApp {
        this['source_image_ids'] = sourceImageIds;
        return this;
    }
    public set sourceImageIds(sourceImageIds: Array<string>  | undefined) {
        this['source_image_ids'] = sourceImageIds;
    }
    public get sourceImageIds(): Array<string> | undefined {
        return this['source_image_ids'];
    }
    public withSandboxEnable(sandboxEnable: boolean): PublishApp {
        this['sandbox_enable'] = sandboxEnable;
        return this;
    }
    public set sandboxEnable(sandboxEnable: boolean  | undefined) {
        this['sandbox_enable'] = sandboxEnable;
    }
    public get sandboxEnable(): boolean | undefined {
        return this['sandbox_enable'];
    }
    public withAppExtendedInfo(appExtendedInfo: AppExtendedInfo): PublishApp {
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
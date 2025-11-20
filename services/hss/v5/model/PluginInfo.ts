

export class PluginInfo {
    public code?: string;
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    private 'installed_attachment_num'?: number;
    private 'uninstall_attachment_num'?: number;
    private 'max_cpu_limit'?: number;
    private 'max_memory_limit'?: number;
    private 'max_size'?: string;
    private 'display_mode'?: number;
    public constructor() { 
    }
    public withCode(code: string): PluginInfo {
        this['code'] = code;
        return this;
    }
    public withName(name: string): PluginInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PluginInfo {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): PluginInfo {
        this['tags'] = tags;
        return this;
    }
    public withInstalledAttachmentNum(installedAttachmentNum: number): PluginInfo {
        this['installed_attachment_num'] = installedAttachmentNum;
        return this;
    }
    public set installedAttachmentNum(installedAttachmentNum: number  | undefined) {
        this['installed_attachment_num'] = installedAttachmentNum;
    }
    public get installedAttachmentNum(): number | undefined {
        return this['installed_attachment_num'];
    }
    public withUninstallAttachmentNum(uninstallAttachmentNum: number): PluginInfo {
        this['uninstall_attachment_num'] = uninstallAttachmentNum;
        return this;
    }
    public set uninstallAttachmentNum(uninstallAttachmentNum: number  | undefined) {
        this['uninstall_attachment_num'] = uninstallAttachmentNum;
    }
    public get uninstallAttachmentNum(): number | undefined {
        return this['uninstall_attachment_num'];
    }
    public withMaxCpuLimit(maxCpuLimit: number): PluginInfo {
        this['max_cpu_limit'] = maxCpuLimit;
        return this;
    }
    public set maxCpuLimit(maxCpuLimit: number  | undefined) {
        this['max_cpu_limit'] = maxCpuLimit;
    }
    public get maxCpuLimit(): number | undefined {
        return this['max_cpu_limit'];
    }
    public withMaxMemoryLimit(maxMemoryLimit: number): PluginInfo {
        this['max_memory_limit'] = maxMemoryLimit;
        return this;
    }
    public set maxMemoryLimit(maxMemoryLimit: number  | undefined) {
        this['max_memory_limit'] = maxMemoryLimit;
    }
    public get maxMemoryLimit(): number | undefined {
        return this['max_memory_limit'];
    }
    public withMaxSize(maxSize: string): PluginInfo {
        this['max_size'] = maxSize;
        return this;
    }
    public set maxSize(maxSize: string  | undefined) {
        this['max_size'] = maxSize;
    }
    public get maxSize(): string | undefined {
        return this['max_size'];
    }
    public withDisplayMode(displayMode: number): PluginInfo {
        this['display_mode'] = displayMode;
        return this;
    }
    public set displayMode(displayMode: number  | undefined) {
        this['display_mode'] = displayMode;
    }
    public get displayMode(): number | undefined {
        return this['display_mode'];
    }
}
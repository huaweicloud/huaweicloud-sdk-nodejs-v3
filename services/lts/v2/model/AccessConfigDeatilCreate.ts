import { AccessConfigFormatCreate } from './AccessConfigFormatCreate';
import { AccessConfigWindowsLogInfoCreate } from './AccessConfigWindowsLogInfoCreate';


export class AccessConfigDeatilCreate {
    public paths?: Array<string>;
    private 'black_paths'?: Array<string>;
    public format?: AccessConfigFormatCreate;
    private 'windows_log_info'?: AccessConfigWindowsLogInfoCreate;
    public stdout?: boolean;
    public stderr?: boolean;
    public pathType?: AccessConfigDeatilCreatePathTypeEnum | string;
    public namespaceRegex?: string;
    public podNameRegex?: string;
    public containerNameRegex?: string;
    public includeLabels?: { [key: string]: string; };
    public excludeLabels?: { [key: string]: string; };
    public includeEnvs?: { [key: string]: string; };
    public excludeEnvs?: { [key: string]: string; };
    public logLabels?: { [key: string]: string; };
    public logEnvs?: { [key: string]: string; };
    public includeK8sLabels?: { [key: string]: string; };
    public excludeK8sLabels?: { [key: string]: string; };
    public logK8s?: { [key: string]: string; };
    private 'repeat_collect'?: boolean;
    private 'system_fields'?: Array<string>;
    private 'custom_key_value'?: { [key: string]: string; };
    public includeLabelsLogical?: string;
    public excludeLabelsLogical?: string;
    public includeK8sLabelsLogical?: string;
    public excludeK8sLabelsLogical?: string;
    public includeEnvsLogical?: string;
    public excludeEnvsLogical?: string;
    public constructor(format?: AccessConfigFormatCreate) { 
        this['format'] = format;
    }
    public withPaths(paths: Array<string>): AccessConfigDeatilCreate {
        this['paths'] = paths;
        return this;
    }
    public withBlackPaths(blackPaths: Array<string>): AccessConfigDeatilCreate {
        this['black_paths'] = blackPaths;
        return this;
    }
    public set blackPaths(blackPaths: Array<string>  | undefined) {
        this['black_paths'] = blackPaths;
    }
    public get blackPaths(): Array<string> | undefined {
        return this['black_paths'];
    }
    public withFormat(format: AccessConfigFormatCreate): AccessConfigDeatilCreate {
        this['format'] = format;
        return this;
    }
    public withWindowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfoCreate): AccessConfigDeatilCreate {
        this['windows_log_info'] = windowsLogInfo;
        return this;
    }
    public set windowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfoCreate  | undefined) {
        this['windows_log_info'] = windowsLogInfo;
    }
    public get windowsLogInfo(): AccessConfigWindowsLogInfoCreate | undefined {
        return this['windows_log_info'];
    }
    public withStdout(stdout: boolean): AccessConfigDeatilCreate {
        this['stdout'] = stdout;
        return this;
    }
    public withStderr(stderr: boolean): AccessConfigDeatilCreate {
        this['stderr'] = stderr;
        return this;
    }
    public withPathType(pathType: AccessConfigDeatilCreatePathTypeEnum | string): AccessConfigDeatilCreate {
        this['pathType'] = pathType;
        return this;
    }
    public withNamespaceRegex(namespaceRegex: string): AccessConfigDeatilCreate {
        this['namespaceRegex'] = namespaceRegex;
        return this;
    }
    public withPodNameRegex(podNameRegex: string): AccessConfigDeatilCreate {
        this['podNameRegex'] = podNameRegex;
        return this;
    }
    public withContainerNameRegex(containerNameRegex: string): AccessConfigDeatilCreate {
        this['containerNameRegex'] = containerNameRegex;
        return this;
    }
    public withIncludeLabels(includeLabels: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['includeLabels'] = includeLabels;
        return this;
    }
    public withExcludeLabels(excludeLabels: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['excludeLabels'] = excludeLabels;
        return this;
    }
    public withIncludeEnvs(includeEnvs: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['includeEnvs'] = includeEnvs;
        return this;
    }
    public withExcludeEnvs(excludeEnvs: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['excludeEnvs'] = excludeEnvs;
        return this;
    }
    public withLogLabels(logLabels: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['logLabels'] = logLabels;
        return this;
    }
    public withLogEnvs(logEnvs: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['logEnvs'] = logEnvs;
        return this;
    }
    public withIncludeK8sLabels(includeK8sLabels: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['includeK8sLabels'] = includeK8sLabels;
        return this;
    }
    public withExcludeK8sLabels(excludeK8sLabels: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['excludeK8sLabels'] = excludeK8sLabels;
        return this;
    }
    public withLogK8s(logK8s: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['logK8s'] = logK8s;
        return this;
    }
    public withRepeatCollect(repeatCollect: boolean): AccessConfigDeatilCreate {
        this['repeat_collect'] = repeatCollect;
        return this;
    }
    public set repeatCollect(repeatCollect: boolean  | undefined) {
        this['repeat_collect'] = repeatCollect;
    }
    public get repeatCollect(): boolean | undefined {
        return this['repeat_collect'];
    }
    public withSystemFields(systemFields: Array<string>): AccessConfigDeatilCreate {
        this['system_fields'] = systemFields;
        return this;
    }
    public set systemFields(systemFields: Array<string>  | undefined) {
        this['system_fields'] = systemFields;
    }
    public get systemFields(): Array<string> | undefined {
        return this['system_fields'];
    }
    public withCustomKeyValue(customKeyValue: { [key: string]: string; }): AccessConfigDeatilCreate {
        this['custom_key_value'] = customKeyValue;
        return this;
    }
    public set customKeyValue(customKeyValue: { [key: string]: string; }  | undefined) {
        this['custom_key_value'] = customKeyValue;
    }
    public get customKeyValue(): { [key: string]: string; } | undefined {
        return this['custom_key_value'];
    }
    public withIncludeLabelsLogical(includeLabelsLogical: string): AccessConfigDeatilCreate {
        this['includeLabelsLogical'] = includeLabelsLogical;
        return this;
    }
    public withExcludeLabelsLogical(excludeLabelsLogical: string): AccessConfigDeatilCreate {
        this['excludeLabelsLogical'] = excludeLabelsLogical;
        return this;
    }
    public withIncludeK8sLabelsLogical(includeK8sLabelsLogical: string): AccessConfigDeatilCreate {
        this['includeK8sLabelsLogical'] = includeK8sLabelsLogical;
        return this;
    }
    public withExcludeK8sLabelsLogical(excludeK8sLabelsLogical: string): AccessConfigDeatilCreate {
        this['excludeK8sLabelsLogical'] = excludeK8sLabelsLogical;
        return this;
    }
    public withIncludeEnvsLogical(includeEnvsLogical: string): AccessConfigDeatilCreate {
        this['includeEnvsLogical'] = includeEnvsLogical;
        return this;
    }
    public withExcludeEnvsLogical(excludeEnvsLogical: string): AccessConfigDeatilCreate {
        this['excludeEnvsLogical'] = excludeEnvsLogical;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigDeatilCreatePathTypeEnum {
    HOST_FILE = 'HOST_FILE',
    CONTAINER_STDOUT = 'CONTAINER_STDOUT',
    CONTAINER_FILE = 'CONTAINER_FILE'
}

import { AccessConfigFormatUpdate } from './AccessConfigFormatUpdate';
import { AccessConfigWindowsLogInfoUpdate } from './AccessConfigWindowsLogInfoUpdate';


export class AccessConfigDeatilUpdate {
    public paths?: Array<string>;
    private 'black_paths'?: Array<string>;
    public format?: AccessConfigFormatUpdate;
    private 'windows_log_info'?: AccessConfigWindowsLogInfoUpdate;
    public stdout?: boolean;
    public stderr?: boolean;
    public pathType?: AccessConfigDeatilUpdatePathTypeEnum | string;
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
    public constructor() { 
    }
    public withPaths(paths: Array<string>): AccessConfigDeatilUpdate {
        this['paths'] = paths;
        return this;
    }
    public withBlackPaths(blackPaths: Array<string>): AccessConfigDeatilUpdate {
        this['black_paths'] = blackPaths;
        return this;
    }
    public set blackPaths(blackPaths: Array<string>  | undefined) {
        this['black_paths'] = blackPaths;
    }
    public get blackPaths(): Array<string> | undefined {
        return this['black_paths'];
    }
    public withFormat(format: AccessConfigFormatUpdate): AccessConfigDeatilUpdate {
        this['format'] = format;
        return this;
    }
    public withWindowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfoUpdate): AccessConfigDeatilUpdate {
        this['windows_log_info'] = windowsLogInfo;
        return this;
    }
    public set windowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfoUpdate  | undefined) {
        this['windows_log_info'] = windowsLogInfo;
    }
    public get windowsLogInfo(): AccessConfigWindowsLogInfoUpdate | undefined {
        return this['windows_log_info'];
    }
    public withStdout(stdout: boolean): AccessConfigDeatilUpdate {
        this['stdout'] = stdout;
        return this;
    }
    public withStderr(stderr: boolean): AccessConfigDeatilUpdate {
        this['stderr'] = stderr;
        return this;
    }
    public withPathType(pathType: AccessConfigDeatilUpdatePathTypeEnum | string): AccessConfigDeatilUpdate {
        this['pathType'] = pathType;
        return this;
    }
    public withNamespaceRegex(namespaceRegex: string): AccessConfigDeatilUpdate {
        this['namespaceRegex'] = namespaceRegex;
        return this;
    }
    public withPodNameRegex(podNameRegex: string): AccessConfigDeatilUpdate {
        this['podNameRegex'] = podNameRegex;
        return this;
    }
    public withContainerNameRegex(containerNameRegex: string): AccessConfigDeatilUpdate {
        this['containerNameRegex'] = containerNameRegex;
        return this;
    }
    public withIncludeLabels(includeLabels: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['includeLabels'] = includeLabels;
        return this;
    }
    public withExcludeLabels(excludeLabels: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['excludeLabels'] = excludeLabels;
        return this;
    }
    public withIncludeEnvs(includeEnvs: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['includeEnvs'] = includeEnvs;
        return this;
    }
    public withExcludeEnvs(excludeEnvs: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['excludeEnvs'] = excludeEnvs;
        return this;
    }
    public withLogLabels(logLabels: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['logLabels'] = logLabels;
        return this;
    }
    public withLogEnvs(logEnvs: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['logEnvs'] = logEnvs;
        return this;
    }
    public withIncludeK8sLabels(includeK8sLabels: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['includeK8sLabels'] = includeK8sLabels;
        return this;
    }
    public withExcludeK8sLabels(excludeK8sLabels: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['excludeK8sLabels'] = excludeK8sLabels;
        return this;
    }
    public withLogK8s(logK8s: { [key: string]: string; }): AccessConfigDeatilUpdate {
        this['logK8s'] = logK8s;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigDeatilUpdatePathTypeEnum {
    HOST_FILE = 'HOST_FILE',
    CONTAINER_STDOUT = 'CONTAINER_STDOUT',
    CONTAINER_FILE = 'CONTAINER_FILE'
}

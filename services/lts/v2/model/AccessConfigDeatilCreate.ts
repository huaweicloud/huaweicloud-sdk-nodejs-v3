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
    public constructor() { 
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

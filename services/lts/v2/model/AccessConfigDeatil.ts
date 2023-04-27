import { AccessConfigFormat } from './AccessConfigFormat';
import { AccessConfigWindowsLogInfo } from './AccessConfigWindowsLogInfo';


export class AccessConfigDeatil {
    public paths?: Array<string>;
    private 'black_paths'?: Array<string> | undefined;
    public format?: AccessConfigFormat;
    private 'windows_log_info'?: AccessConfigWindowsLogInfo | undefined;
    public constructor() { 
    }
    public withPaths(paths: Array<string>): AccessConfigDeatil {
        this['paths'] = paths;
        return this;
    }
    public withBlackPaths(blackPaths: Array<string>): AccessConfigDeatil {
        this['black_paths'] = blackPaths;
        return this;
    }
    public set blackPaths(blackPaths: Array<string> | undefined) {
        this['black_paths'] = blackPaths;
    }
    public get blackPaths() {
        return this['black_paths'];
    }
    public withFormat(format: AccessConfigFormat): AccessConfigDeatil {
        this['format'] = format;
        return this;
    }
    public withWindowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfo): AccessConfigDeatil {
        this['windows_log_info'] = windowsLogInfo;
        return this;
    }
    public set windowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfo | undefined) {
        this['windows_log_info'] = windowsLogInfo;
    }
    public get windowsLogInfo() {
        return this['windows_log_info'];
    }
}
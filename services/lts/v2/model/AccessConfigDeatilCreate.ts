import { AccessConfigFormatCreate } from './AccessConfigFormatCreate';
import { AccessConfigWindowsLogInfoCreate } from './AccessConfigWindowsLogInfoCreate';


export class AccessConfigDeatilCreate {
    public paths: Array<string>;
    private 'black_paths'?: Array<string> | undefined;
    public format: AccessConfigFormatCreate;
    private 'windows_log_info'?: AccessConfigWindowsLogInfoCreate | undefined;
    public constructor(paths?: any, format?: any) { 
        this['paths'] = paths;
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
    public set blackPaths(blackPaths: Array<string> | undefined) {
        this['black_paths'] = blackPaths;
    }
    public get blackPaths() {
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
    public set windowsLogInfo(windowsLogInfo: AccessConfigWindowsLogInfoCreate | undefined) {
        this['windows_log_info'] = windowsLogInfo;
    }
    public get windowsLogInfo() {
        return this['windows_log_info'];
    }
}
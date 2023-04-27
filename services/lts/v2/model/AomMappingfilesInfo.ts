import { AomMappingLogStreamInfo } from './AomMappingLogStreamInfo';


export class AomMappingfilesInfo {
    private 'file_name': string | undefined;
    private 'log_stream_info': AomMappingLogStreamInfo | undefined;
    public constructor(fileName?: any, logStreamInfo?: any) { 
        this['file_name'] = fileName;
        this['log_stream_info'] = logStreamInfo;
    }
    public withFileName(fileName: string): AomMappingfilesInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withLogStreamInfo(logStreamInfo: AomMappingLogStreamInfo): AomMappingfilesInfo {
        this['log_stream_info'] = logStreamInfo;
        return this;
    }
    public set logStreamInfo(logStreamInfo: AomMappingLogStreamInfo | undefined) {
        this['log_stream_info'] = logStreamInfo;
    }
    public get logStreamInfo() {
        return this['log_stream_info'];
    }
}
import { AomMappingLogStreamInfo } from './AomMappingLogStreamInfo';


export class AomMappingfilesInfo {
    private 'file_name'?: string;
    private 'log_stream_info'?: AomMappingLogStreamInfo;
    public constructor(fileName?: string, logStreamInfo?: AomMappingLogStreamInfo) { 
        this['file_name'] = fileName;
        this['log_stream_info'] = logStreamInfo;
    }
    public withFileName(fileName: string): AomMappingfilesInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withLogStreamInfo(logStreamInfo: AomMappingLogStreamInfo): AomMappingfilesInfo {
        this['log_stream_info'] = logStreamInfo;
        return this;
    }
    public set logStreamInfo(logStreamInfo: AomMappingLogStreamInfo  | undefined) {
        this['log_stream_info'] = logStreamInfo;
    }
    public get logStreamInfo(): AomMappingLogStreamInfo | undefined {
        return this['log_stream_info'];
    }
}
import { RecordObsFileAddr } from './RecordObsFileAddr';
import { VodInfoV2 } from './VodInfoV2';


export class RecordContentInfoV2 {
    private 'publish_domain'?: string;
    private 'file_name'?: string;
    public app?: string;
    public stream?: string;
    private 'record_format'?: RecordContentInfoV2RecordFormatEnum | string;
    private 'record_type'?: RecordContentInfoV2RecordTypeEnum | string;
    private 'obs_addr'?: RecordObsFileAddr;
    private 'vod_info'?: VodInfoV2;
    private 'download_url'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public duration?: number;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): RecordContentInfoV2 {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withFileName(fileName: string): RecordContentInfoV2 {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withApp(app: string): RecordContentInfoV2 {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): RecordContentInfoV2 {
        this['stream'] = stream;
        return this;
    }
    public withRecordFormat(recordFormat: RecordContentInfoV2RecordFormatEnum | string): RecordContentInfoV2 {
        this['record_format'] = recordFormat;
        return this;
    }
    public set recordFormat(recordFormat: RecordContentInfoV2RecordFormatEnum | string  | undefined) {
        this['record_format'] = recordFormat;
    }
    public get recordFormat(): RecordContentInfoV2RecordFormatEnum | string | undefined {
        return this['record_format'];
    }
    public withRecordType(recordType: RecordContentInfoV2RecordTypeEnum | string): RecordContentInfoV2 {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: RecordContentInfoV2RecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): RecordContentInfoV2RecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): RecordContentInfoV2 {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr  | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr(): RecordObsFileAddr | undefined {
        return this['obs_addr'];
    }
    public withVodInfo(vodInfo: VodInfoV2): RecordContentInfoV2 {
        this['vod_info'] = vodInfo;
        return this;
    }
    public set vodInfo(vodInfo: VodInfoV2  | undefined) {
        this['vod_info'] = vodInfo;
    }
    public get vodInfo(): VodInfoV2 | undefined {
        return this['vod_info'];
    }
    public withDownloadUrl(downloadUrl: string): RecordContentInfoV2 {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withStartTime(startTime: string): RecordContentInfoV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RecordContentInfoV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): RecordContentInfoV2 {
        this['duration'] = duration;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordContentInfoV2RecordFormatEnum {
    FLV = 'FLV',
    HLS = 'HLS',
    MP4 = 'MP4'
}
/**
    * @export
    * @enum {string}
    */
export enum RecordContentInfoV2RecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD'
}

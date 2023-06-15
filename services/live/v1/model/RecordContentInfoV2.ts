import { RecordObsFileAddr } from './RecordObsFileAddr';
import { VodInfoV2 } from './VodInfoV2';


export class RecordContentInfoV2 {
    private 'publish_domain'?: string | undefined;
    private 'file_name'?: string | undefined;
    public app?: string;
    public stream?: string;
    private 'record_format'?: RecordContentInfoV2RecordFormatEnum | undefined;
    private 'record_type'?: RecordContentInfoV2RecordTypeEnum | undefined;
    private 'obs_addr'?: RecordObsFileAddr | undefined;
    private 'vod_info'?: VodInfoV2 | undefined;
    private 'download_url'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public duration?: number;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): RecordContentInfoV2 {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withFileName(fileName: string): RecordContentInfoV2 {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
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
    public withRecordFormat(recordFormat: RecordContentInfoV2RecordFormatEnum): RecordContentInfoV2 {
        this['record_format'] = recordFormat;
        return this;
    }
    public set recordFormat(recordFormat: RecordContentInfoV2RecordFormatEnum | undefined) {
        this['record_format'] = recordFormat;
    }
    public get recordFormat() {
        return this['record_format'];
    }
    public withRecordType(recordType: RecordContentInfoV2RecordTypeEnum): RecordContentInfoV2 {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: RecordContentInfoV2RecordTypeEnum | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType() {
        return this['record_type'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): RecordContentInfoV2 {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr() {
        return this['obs_addr'];
    }
    public withVodInfo(vodInfo: VodInfoV2): RecordContentInfoV2 {
        this['vod_info'] = vodInfo;
        return this;
    }
    public set vodInfo(vodInfo: VodInfoV2 | undefined) {
        this['vod_info'] = vodInfo;
    }
    public get vodInfo() {
        return this['vod_info'];
    }
    public withDownloadUrl(downloadUrl: string): RecordContentInfoV2 {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl() {
        return this['download_url'];
    }
    public withStartTime(startTime: string): RecordContentInfoV2 {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RecordContentInfoV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
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
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}

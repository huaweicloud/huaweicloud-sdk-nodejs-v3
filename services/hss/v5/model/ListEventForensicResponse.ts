import { EventForensicInfo } from './EventForensicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventForensicResponse extends SdkResponse {
    private 'event_type'?: number;
    private 'event_class_id'?: string;
    private 'support_download_file'?: boolean;
    private 'malware_file_hash'?: string;
    private 'event_forensic_info'?: EventForensicInfo;
    public constructor() { 
        super();
    }
    public withEventType(eventType: number): ListEventForensicResponse {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventClassId(eventClassId: string): ListEventForensicResponse {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withSupportDownloadFile(supportDownloadFile: boolean): ListEventForensicResponse {
        this['support_download_file'] = supportDownloadFile;
        return this;
    }
    public set supportDownloadFile(supportDownloadFile: boolean  | undefined) {
        this['support_download_file'] = supportDownloadFile;
    }
    public get supportDownloadFile(): boolean | undefined {
        return this['support_download_file'];
    }
    public withMalwareFileHash(malwareFileHash: string): ListEventForensicResponse {
        this['malware_file_hash'] = malwareFileHash;
        return this;
    }
    public set malwareFileHash(malwareFileHash: string  | undefined) {
        this['malware_file_hash'] = malwareFileHash;
    }
    public get malwareFileHash(): string | undefined {
        return this['malware_file_hash'];
    }
    public withEventForensicInfo(eventForensicInfo: EventForensicInfo): ListEventForensicResponse {
        this['event_forensic_info'] = eventForensicInfo;
        return this;
    }
    public set eventForensicInfo(eventForensicInfo: EventForensicInfo  | undefined) {
        this['event_forensic_info'] = eventForensicInfo;
    }
    public get eventForensicInfo(): EventForensicInfo | undefined {
        return this['event_forensic_info'];
    }
}
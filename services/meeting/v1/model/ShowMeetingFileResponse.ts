import { MeetingFileBase } from './MeetingFileBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMeetingFileResponse extends SdkResponse {
    public fileCode?: string;
    public topic?: string;
    public fileId?: string;
    public fileName?: string;
    public fileSize?: number;
    public thumbnailFileId?: string;
    public thumbnailFileName?: string;
    public thumbnailFileSize?: number;
    public pdfFileId?: string;
    public pdfFileName?: string;
    public pdfFileSize?: number;
    public fileUrl?: string;
    public thumbnailUrl?: string;
    public pdfUrl?: string;
    public creationTimestamp?: number;
    public constructor() { 
        super();
    }
    public withFileCode(fileCode: string): ShowMeetingFileResponse {
        this['fileCode'] = fileCode;
        return this;
    }
    public withTopic(topic: string): ShowMeetingFileResponse {
        this['topic'] = topic;
        return this;
    }
    public withFileId(fileId: string): ShowMeetingFileResponse {
        this['fileId'] = fileId;
        return this;
    }
    public withFileName(fileName: string): ShowMeetingFileResponse {
        this['fileName'] = fileName;
        return this;
    }
    public withFileSize(fileSize: number): ShowMeetingFileResponse {
        this['fileSize'] = fileSize;
        return this;
    }
    public withThumbnailFileId(thumbnailFileId: string): ShowMeetingFileResponse {
        this['thumbnailFileId'] = thumbnailFileId;
        return this;
    }
    public withThumbnailFileName(thumbnailFileName: string): ShowMeetingFileResponse {
        this['thumbnailFileName'] = thumbnailFileName;
        return this;
    }
    public withThumbnailFileSize(thumbnailFileSize: number): ShowMeetingFileResponse {
        this['thumbnailFileSize'] = thumbnailFileSize;
        return this;
    }
    public withPdfFileId(pdfFileId: string): ShowMeetingFileResponse {
        this['pdfFileId'] = pdfFileId;
        return this;
    }
    public withPdfFileName(pdfFileName: string): ShowMeetingFileResponse {
        this['pdfFileName'] = pdfFileName;
        return this;
    }
    public withPdfFileSize(pdfFileSize: number): ShowMeetingFileResponse {
        this['pdfFileSize'] = pdfFileSize;
        return this;
    }
    public withFileUrl(fileUrl: string): ShowMeetingFileResponse {
        this['fileUrl'] = fileUrl;
        return this;
    }
    public withThumbnailUrl(thumbnailUrl: string): ShowMeetingFileResponse {
        this['thumbnailUrl'] = thumbnailUrl;
        return this;
    }
    public withPdfUrl(pdfUrl: string): ShowMeetingFileResponse {
        this['pdfUrl'] = pdfUrl;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): ShowMeetingFileResponse {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}
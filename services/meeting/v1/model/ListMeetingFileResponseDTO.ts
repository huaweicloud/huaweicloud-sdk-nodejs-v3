import { MeetingFileBase } from './MeetingFileBase';


export class ListMeetingFileResponseDTO {
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
    public userId?: string;
    public creationTimestamp?: number;
    public constructor() { 
    }
    public withFileCode(fileCode: string): ListMeetingFileResponseDTO {
        this['fileCode'] = fileCode;
        return this;
    }
    public withTopic(topic: string): ListMeetingFileResponseDTO {
        this['topic'] = topic;
        return this;
    }
    public withFileId(fileId: string): ListMeetingFileResponseDTO {
        this['fileId'] = fileId;
        return this;
    }
    public withFileName(fileName: string): ListMeetingFileResponseDTO {
        this['fileName'] = fileName;
        return this;
    }
    public withFileSize(fileSize: number): ListMeetingFileResponseDTO {
        this['fileSize'] = fileSize;
        return this;
    }
    public withThumbnailFileId(thumbnailFileId: string): ListMeetingFileResponseDTO {
        this['thumbnailFileId'] = thumbnailFileId;
        return this;
    }
    public withThumbnailFileName(thumbnailFileName: string): ListMeetingFileResponseDTO {
        this['thumbnailFileName'] = thumbnailFileName;
        return this;
    }
    public withThumbnailFileSize(thumbnailFileSize: number): ListMeetingFileResponseDTO {
        this['thumbnailFileSize'] = thumbnailFileSize;
        return this;
    }
    public withPdfFileId(pdfFileId: string): ListMeetingFileResponseDTO {
        this['pdfFileId'] = pdfFileId;
        return this;
    }
    public withPdfFileName(pdfFileName: string): ListMeetingFileResponseDTO {
        this['pdfFileName'] = pdfFileName;
        return this;
    }
    public withPdfFileSize(pdfFileSize: number): ListMeetingFileResponseDTO {
        this['pdfFileSize'] = pdfFileSize;
        return this;
    }
    public withUserId(userId: string): ListMeetingFileResponseDTO {
        this['userId'] = userId;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: number): ListMeetingFileResponseDTO {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
}
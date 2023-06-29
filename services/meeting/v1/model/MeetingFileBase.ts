

export class MeetingFileBase {
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
    public constructor() { 
    }
    public withFileCode(fileCode: string): MeetingFileBase {
        this['fileCode'] = fileCode;
        return this;
    }
    public withTopic(topic: string): MeetingFileBase {
        this['topic'] = topic;
        return this;
    }
    public withFileId(fileId: string): MeetingFileBase {
        this['fileId'] = fileId;
        return this;
    }
    public withFileName(fileName: string): MeetingFileBase {
        this['fileName'] = fileName;
        return this;
    }
    public withFileSize(fileSize: number): MeetingFileBase {
        this['fileSize'] = fileSize;
        return this;
    }
    public withThumbnailFileId(thumbnailFileId: string): MeetingFileBase {
        this['thumbnailFileId'] = thumbnailFileId;
        return this;
    }
    public withThumbnailFileName(thumbnailFileName: string): MeetingFileBase {
        this['thumbnailFileName'] = thumbnailFileName;
        return this;
    }
    public withThumbnailFileSize(thumbnailFileSize: number): MeetingFileBase {
        this['thumbnailFileSize'] = thumbnailFileSize;
        return this;
    }
    public withPdfFileId(pdfFileId: string): MeetingFileBase {
        this['pdfFileId'] = pdfFileId;
        return this;
    }
    public withPdfFileName(pdfFileName: string): MeetingFileBase {
        this['pdfFileName'] = pdfFileName;
        return this;
    }
    public withPdfFileSize(pdfFileSize: number): MeetingFileBase {
        this['pdfFileSize'] = pdfFileSize;
        return this;
    }
}
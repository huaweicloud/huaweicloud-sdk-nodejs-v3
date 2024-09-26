

export class SegmentFileDO {
    public recordType?: string;
    public beginTime?: number;
    public endTime?: number;
    public duration?: number;
    public fileSize?: number;
    public sha256?: string;
    public playUrl?: string;
    public downloadUrl?: string;
    public constructor() { 
    }
    public withRecordType(recordType: string): SegmentFileDO {
        this['recordType'] = recordType;
        return this;
    }
    public withBeginTime(beginTime: number): SegmentFileDO {
        this['beginTime'] = beginTime;
        return this;
    }
    public withEndTime(endTime: number): SegmentFileDO {
        this['endTime'] = endTime;
        return this;
    }
    public withDuration(duration: number): SegmentFileDO {
        this['duration'] = duration;
        return this;
    }
    public withFileSize(fileSize: number): SegmentFileDO {
        this['fileSize'] = fileSize;
        return this;
    }
    public withSha256(sha256: string): SegmentFileDO {
        this['sha256'] = sha256;
        return this;
    }
    public withPlayUrl(playUrl: string): SegmentFileDO {
        this['playUrl'] = playUrl;
        return this;
    }
    public withDownloadUrl(downloadUrl: string): SegmentFileDO {
        this['downloadUrl'] = downloadUrl;
        return this;
    }
}


export class MultipartUploadInfo {
    private 'part_number'?: string;
    public etag?: string;
    public constructor() { 
    }
    public withPartNumber(partNumber: string): MultipartUploadInfo {
        this['part_number'] = partNumber;
        return this;
    }
    public set partNumber(partNumber: string  | undefined) {
        this['part_number'] = partNumber;
    }
    public get partNumber(): string | undefined {
        return this['part_number'];
    }
    public withEtag(etag: string): MultipartUploadInfo {
        this['etag'] = etag;
        return this;
    }
}
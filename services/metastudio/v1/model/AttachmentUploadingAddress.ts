

export class AttachmentUploadingAddress {
    private 'number'?: number;
    private 'uploading_url'?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: number): AttachmentUploadingAddress {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withUploadingUrl(uploadingUrl: string): AttachmentUploadingAddress {
        this['uploading_url'] = uploadingUrl;
        return this;
    }
    public set uploadingUrl(uploadingUrl: string  | undefined) {
        this['uploading_url'] = uploadingUrl;
    }
    public get uploadingUrl(): string | undefined {
        return this['uploading_url'];
    }
}
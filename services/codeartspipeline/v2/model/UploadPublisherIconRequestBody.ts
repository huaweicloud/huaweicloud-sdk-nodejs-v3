

export class UploadPublisherIconRequestBody {
    private 'upload_file'?: any;
    public constructor(uploadFile?: any) { 
        this['upload_file'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): UploadPublisherIconRequestBody {
        this['upload_file'] = uploadFile;
        return this;
    }
    public set uploadFile(uploadFile: any  | undefined) {
        this['upload_file'] = uploadFile;
    }
    public get uploadFile(): any | undefined {
        return this['upload_file'];
    }
}


export class UploadBasicPluginRequestBody {
    private 'upload_file'?: any;
    public constructor(uploadFile?: any) { 
        this['upload_file'] = uploadFile;
    }
    public withUploadFile(uploadFile: any): UploadBasicPluginRequestBody {
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
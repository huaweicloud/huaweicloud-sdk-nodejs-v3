

export class UploadPluginIconRequestBody {
    private 'upload_file'?: any;
    public constructor() { 
    }
    public withUploadFile(uploadFile: any): UploadPluginIconRequestBody {
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
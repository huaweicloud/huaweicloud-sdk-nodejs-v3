

export class ShowFileDetailByFullNameRequest {
    private 'file_name'?: string;
    public constructor(fileName?: string) { 
        this['file_name'] = fileName;
    }
    public withFileName(fileName: string): ShowFileDetailByFullNameRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}
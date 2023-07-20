

export class Compress {
    public status?: string;
    public type?: string;
    private 'file_type'?: string;
    public constructor(status?: string, type?: string) { 
        this['status'] = status;
        this['type'] = type;
    }
    public withStatus(status: string): Compress {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Compress {
        this['type'] = type;
        return this;
    }
    public withFileType(fileType: string): Compress {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
}
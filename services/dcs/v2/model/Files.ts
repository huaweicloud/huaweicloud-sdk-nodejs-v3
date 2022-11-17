

export class Files {
    private 'file_name': string | undefined;
    public size?: string;
    private 'update_at'?: string | undefined;
    public constructor(fileName?: any) { 
        this['file_name'] = fileName;
    }
    public withFileName(fileName: string): Files {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withSize(size: string): Files {
        this['size'] = size;
        return this;
    }
    public withUpdateAt(updateAt: string): Files {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt() {
        return this['update_at'];
    }
}
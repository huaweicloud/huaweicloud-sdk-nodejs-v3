

export class ObsObject {
    private 'file_name'?: string | undefined;
    public size?: number;
    private 'last_modified'?: string | undefined;
    public constructor() { 
    }
    public withFileName(fileName: string): ObsObject {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withSize(size: number): ObsObject {
        this['size'] = size;
        return this;
    }
    public withLastModified(lastModified: string): ObsObject {
        this['last_modified'] = lastModified;
        return this;
    }
    public set lastModified(lastModified: string | undefined) {
        this['last_modified'] = lastModified;
    }
    public get lastModified() {
        return this['last_modified'];
    }
}
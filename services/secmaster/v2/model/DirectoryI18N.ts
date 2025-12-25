

export class DirectoryI18N {
    public directory?: string;
    private 'directory_en'?: string;
    private 'directory_fr'?: string;
    public constructor() { 
    }
    public withDirectory(directory: string): DirectoryI18N {
        this['directory'] = directory;
        return this;
    }
    public withDirectoryEn(directoryEn: string): DirectoryI18N {
        this['directory_en'] = directoryEn;
        return this;
    }
    public set directoryEn(directoryEn: string  | undefined) {
        this['directory_en'] = directoryEn;
    }
    public get directoryEn(): string | undefined {
        return this['directory_en'];
    }
    public withDirectoryFr(directoryFr: string): DirectoryI18N {
        this['directory_fr'] = directoryFr;
        return this;
    }
    public set directoryFr(directoryFr: string  | undefined) {
        this['directory_fr'] = directoryFr;
    }
    public get directoryFr(): string | undefined {
        return this['directory_fr'];
    }
}
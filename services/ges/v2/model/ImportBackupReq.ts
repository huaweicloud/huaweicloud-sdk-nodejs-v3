

export class ImportBackupReq {
    private 'import_path'?: string;
    public constructor(importPath?: string) { 
        this['import_path'] = importPath;
    }
    public withImportPath(importPath: string): ImportBackupReq {
        this['import_path'] = importPath;
        return this;
    }
    public set importPath(importPath: string  | undefined) {
        this['import_path'] = importPath;
    }
    public get importPath(): string | undefined {
        return this['import_path'];
    }
}
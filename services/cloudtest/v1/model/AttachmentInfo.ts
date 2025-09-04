

export class AttachmentInfo {
    private 'doc_id'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'file_type'?: string;
    private 'store_file_name'?: string;
    private 'related_type'?: string;
    private 'file_size'?: number;
    public constructor() { 
    }
    public withDocId(docId: string): AttachmentInfo {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: string  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): string | undefined {
        return this['doc_id'];
    }
    public withFileName(fileName: string): AttachmentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): AttachmentInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): AttachmentInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withStoreFileName(storeFileName: string): AttachmentInfo {
        this['store_file_name'] = storeFileName;
        return this;
    }
    public set storeFileName(storeFileName: string  | undefined) {
        this['store_file_name'] = storeFileName;
    }
    public get storeFileName(): string | undefined {
        return this['store_file_name'];
    }
    public withRelatedType(relatedType: string): AttachmentInfo {
        this['related_type'] = relatedType;
        return this;
    }
    public set relatedType(relatedType: string  | undefined) {
        this['related_type'] = relatedType;
    }
    public get relatedType(): string | undefined {
        return this['related_type'];
    }
    public withFileSize(fileSize: number): AttachmentInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
}
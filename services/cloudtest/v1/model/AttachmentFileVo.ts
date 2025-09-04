

export class AttachmentFileVo {
    public uri?: string;
    public path?: string;
    private 'project_id'?: string;
    private 'file_path'?: string;
    private 'file_type'?: string;
    private 'doc_name'?: string;
    private 'store_name'?: string;
    private 'doc_id'?: number;
    private 'doc_size'?: string;
    private 'related_type'?: string;
    public constructor() { 
    }
    public withUri(uri: string): AttachmentFileVo {
        this['uri'] = uri;
        return this;
    }
    public withPath(path: string): AttachmentFileVo {
        this['path'] = path;
        return this;
    }
    public withProjectId(projectId: string): AttachmentFileVo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFilePath(filePath: string): AttachmentFileVo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): AttachmentFileVo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withDocName(docName: string): AttachmentFileVo {
        this['doc_name'] = docName;
        return this;
    }
    public set docName(docName: string  | undefined) {
        this['doc_name'] = docName;
    }
    public get docName(): string | undefined {
        return this['doc_name'];
    }
    public withStoreName(storeName: string): AttachmentFileVo {
        this['store_name'] = storeName;
        return this;
    }
    public set storeName(storeName: string  | undefined) {
        this['store_name'] = storeName;
    }
    public get storeName(): string | undefined {
        return this['store_name'];
    }
    public withDocId(docId: number): AttachmentFileVo {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: number  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): number | undefined {
        return this['doc_id'];
    }
    public withDocSize(docSize: string): AttachmentFileVo {
        this['doc_size'] = docSize;
        return this;
    }
    public set docSize(docSize: string  | undefined) {
        this['doc_size'] = docSize;
    }
    public get docSize(): string | undefined {
        return this['doc_size'];
    }
    public withRelatedType(relatedType: string): AttachmentFileVo {
        this['related_type'] = relatedType;
        return this;
    }
    public set relatedType(relatedType: string  | undefined) {
        this['related_type'] = relatedType;
    }
    public get relatedType(): string | undefined {
        return this['related_type'];
    }
}
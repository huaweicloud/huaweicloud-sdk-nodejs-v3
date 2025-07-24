

export class TestCaseAttachmentInfo {
    public override?: boolean;
    private 'doc_id'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'file_type'?: string;
    private 'file_size'?: string;
    private 'override_id'?: string;
    private 'related_type'?: string;
    private 'store_file_name'?: string;
    private 'system_type'?: string;
    private 'storage_system'?: string;
    public constructor() { 
    }
    public withOverride(override: boolean): TestCaseAttachmentInfo {
        this['override'] = override;
        return this;
    }
    public withDocId(docId: string): TestCaseAttachmentInfo {
        this['doc_id'] = docId;
        return this;
    }
    public set docId(docId: string  | undefined) {
        this['doc_id'] = docId;
    }
    public get docId(): string | undefined {
        return this['doc_id'];
    }
    public withFileName(fileName: string): TestCaseAttachmentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): TestCaseAttachmentInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): TestCaseAttachmentInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withFileSize(fileSize: string): TestCaseAttachmentInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: string  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): string | undefined {
        return this['file_size'];
    }
    public withOverrideId(overrideId: string): TestCaseAttachmentInfo {
        this['override_id'] = overrideId;
        return this;
    }
    public set overrideId(overrideId: string  | undefined) {
        this['override_id'] = overrideId;
    }
    public get overrideId(): string | undefined {
        return this['override_id'];
    }
    public withRelatedType(relatedType: string): TestCaseAttachmentInfo {
        this['related_type'] = relatedType;
        return this;
    }
    public set relatedType(relatedType: string  | undefined) {
        this['related_type'] = relatedType;
    }
    public get relatedType(): string | undefined {
        return this['related_type'];
    }
    public withStoreFileName(storeFileName: string): TestCaseAttachmentInfo {
        this['store_file_name'] = storeFileName;
        return this;
    }
    public set storeFileName(storeFileName: string  | undefined) {
        this['store_file_name'] = storeFileName;
    }
    public get storeFileName(): string | undefined {
        return this['store_file_name'];
    }
    public withSystemType(systemType: string): TestCaseAttachmentInfo {
        this['system_type'] = systemType;
        return this;
    }
    public set systemType(systemType: string  | undefined) {
        this['system_type'] = systemType;
    }
    public get systemType(): string | undefined {
        return this['system_type'];
    }
    public withStorageSystem(storageSystem: string): TestCaseAttachmentInfo {
        this['storage_system'] = storageSystem;
        return this;
    }
    public set storageSystem(storageSystem: string  | undefined) {
        this['storage_system'] = storageSystem;
    }
    public get storageSystem(): string | undefined {
        return this['storage_system'];
    }
}
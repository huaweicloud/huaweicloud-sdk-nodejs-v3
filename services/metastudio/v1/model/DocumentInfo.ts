import { DocumentTaskInfo } from './DocumentTaskInfo';


export class DocumentInfo {
    private 'document_id'?: string;
    private 'knowledge_library_id'?: string;
    private 'file_name'?: string;
    private 'file_size'?: number;
    private 'file_type'?: string;
    private 'split_type'?: number;
    private 'chunk_size'?: number;
    private 'chunk_type'?: string;
    public separators?: Array<string>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'document_task_info'?: DocumentTaskInfo;
    public constructor() { 
    }
    public withDocumentId(documentId: string): DocumentInfo {
        this['document_id'] = documentId;
        return this;
    }
    public set documentId(documentId: string  | undefined) {
        this['document_id'] = documentId;
    }
    public get documentId(): string | undefined {
        return this['document_id'];
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): DocumentInfo {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withFileName(fileName: string): DocumentInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileSize(fileSize: number): DocumentInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: string): DocumentInfo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withSplitType(splitType: number): DocumentInfo {
        this['split_type'] = splitType;
        return this;
    }
    public set splitType(splitType: number  | undefined) {
        this['split_type'] = splitType;
    }
    public get splitType(): number | undefined {
        return this['split_type'];
    }
    public withChunkSize(chunkSize: number): DocumentInfo {
        this['chunk_size'] = chunkSize;
        return this;
    }
    public set chunkSize(chunkSize: number  | undefined) {
        this['chunk_size'] = chunkSize;
    }
    public get chunkSize(): number | undefined {
        return this['chunk_size'];
    }
    public withChunkType(chunkType: string): DocumentInfo {
        this['chunk_type'] = chunkType;
        return this;
    }
    public set chunkType(chunkType: string  | undefined) {
        this['chunk_type'] = chunkType;
    }
    public get chunkType(): string | undefined {
        return this['chunk_type'];
    }
    public withSeparators(separators: Array<string>): DocumentInfo {
        this['separators'] = separators;
        return this;
    }
    public withCreateTime(createTime: string): DocumentInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DocumentInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDocumentTaskInfo(documentTaskInfo: DocumentTaskInfo): DocumentInfo {
        this['document_task_info'] = documentTaskInfo;
        return this;
    }
    public set documentTaskInfo(documentTaskInfo: DocumentTaskInfo  | undefined) {
        this['document_task_info'] = documentTaskInfo;
    }
    public get documentTaskInfo(): DocumentTaskInfo | undefined {
        return this['document_task_info'];
    }
}
import { ConflictSectionDto } from './ConflictSectionDto';


export class MRConflictFileDto {
    private 'old_path'?: string;
    private 'new_path'?: string;
    private 'blob_icon'?: string;
    private 'blob_path'?: string;
    private 'conflict_type'?: string;
    public content?: string;
    private 'content_path'?: string;
    public sections?: Array<ConflictSectionDto>;
    public type?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withOldPath(oldPath: string): MRConflictFileDto {
        this['old_path'] = oldPath;
        return this;
    }
    public set oldPath(oldPath: string  | undefined) {
        this['old_path'] = oldPath;
    }
    public get oldPath(): string | undefined {
        return this['old_path'];
    }
    public withNewPath(newPath: string): MRConflictFileDto {
        this['new_path'] = newPath;
        return this;
    }
    public set newPath(newPath: string  | undefined) {
        this['new_path'] = newPath;
    }
    public get newPath(): string | undefined {
        return this['new_path'];
    }
    public withBlobIcon(blobIcon: string): MRConflictFileDto {
        this['blob_icon'] = blobIcon;
        return this;
    }
    public set blobIcon(blobIcon: string  | undefined) {
        this['blob_icon'] = blobIcon;
    }
    public get blobIcon(): string | undefined {
        return this['blob_icon'];
    }
    public withBlobPath(blobPath: string): MRConflictFileDto {
        this['blob_path'] = blobPath;
        return this;
    }
    public set blobPath(blobPath: string  | undefined) {
        this['blob_path'] = blobPath;
    }
    public get blobPath(): string | undefined {
        return this['blob_path'];
    }
    public withConflictType(conflictType: string): MRConflictFileDto {
        this['conflict_type'] = conflictType;
        return this;
    }
    public set conflictType(conflictType: string  | undefined) {
        this['conflict_type'] = conflictType;
    }
    public get conflictType(): string | undefined {
        return this['conflict_type'];
    }
    public withContent(content: string): MRConflictFileDto {
        this['content'] = content;
        return this;
    }
    public withContentPath(contentPath: string): MRConflictFileDto {
        this['content_path'] = contentPath;
        return this;
    }
    public set contentPath(contentPath: string  | undefined) {
        this['content_path'] = contentPath;
    }
    public get contentPath(): string | undefined {
        return this['content_path'];
    }
    public withSections(sections: Array<ConflictSectionDto>): MRConflictFileDto {
        this['sections'] = sections;
        return this;
    }
    public withType(type: string): MRConflictFileDto {
        this['type'] = type;
        return this;
    }
    public withErrorMessage(errorMessage: string): MRConflictFileDto {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}
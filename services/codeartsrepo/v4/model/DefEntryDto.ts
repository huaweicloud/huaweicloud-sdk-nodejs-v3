

export class DefEntryDto {
    private 'tag_name'?: string;
    private 'file_path'?: string;
    public blob?: string;
    private 'line_image'?: string;
    private 'line_number'?: number;
    public range?: string;
    private 'syntax_type'?: string;
    public revision?: string;
    public extend?: string;
    public constructor() { 
    }
    public withTagName(tagName: string): DefEntryDto {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withFilePath(filePath: string): DefEntryDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withBlob(blob: string): DefEntryDto {
        this['blob'] = blob;
        return this;
    }
    public withLineImage(lineImage: string): DefEntryDto {
        this['line_image'] = lineImage;
        return this;
    }
    public set lineImage(lineImage: string  | undefined) {
        this['line_image'] = lineImage;
    }
    public get lineImage(): string | undefined {
        return this['line_image'];
    }
    public withLineNumber(lineNumber: number): DefEntryDto {
        this['line_number'] = lineNumber;
        return this;
    }
    public set lineNumber(lineNumber: number  | undefined) {
        this['line_number'] = lineNumber;
    }
    public get lineNumber(): number | undefined {
        return this['line_number'];
    }
    public withRange(range: string): DefEntryDto {
        this['range'] = range;
        return this;
    }
    public withSyntaxType(syntaxType: string): DefEntryDto {
        this['syntax_type'] = syntaxType;
        return this;
    }
    public set syntaxType(syntaxType: string  | undefined) {
        this['syntax_type'] = syntaxType;
    }
    public get syntaxType(): string | undefined {
        return this['syntax_type'];
    }
    public withRevision(revision: string): DefEntryDto {
        this['revision'] = revision;
        return this;
    }
    public withExtend(extend: string): DefEntryDto {
        this['extend'] = extend;
        return this;
    }
}
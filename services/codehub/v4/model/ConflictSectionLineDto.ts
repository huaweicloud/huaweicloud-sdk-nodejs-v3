import { ConflictSectionLineMetaDataDto } from './ConflictSectionLineMetaDataDto';


export class ConflictSectionLineDto {
    private 'line_code'?: string;
    public type?: string;
    private 'old_line'?: number;
    private 'new_line'?: number;
    public text?: string;
    private 'meta_data'?: ConflictSectionLineMetaDataDto;
    private 'rich_text'?: string;
    private 'can_receive_suggestion'?: boolean;
    public constructor() { 
    }
    public withLineCode(lineCode: string): ConflictSectionLineDto {
        this['line_code'] = lineCode;
        return this;
    }
    public set lineCode(lineCode: string  | undefined) {
        this['line_code'] = lineCode;
    }
    public get lineCode(): string | undefined {
        return this['line_code'];
    }
    public withType(type: string): ConflictSectionLineDto {
        this['type'] = type;
        return this;
    }
    public withOldLine(oldLine: number): ConflictSectionLineDto {
        this['old_line'] = oldLine;
        return this;
    }
    public set oldLine(oldLine: number  | undefined) {
        this['old_line'] = oldLine;
    }
    public get oldLine(): number | undefined {
        return this['old_line'];
    }
    public withNewLine(newLine: number): ConflictSectionLineDto {
        this['new_line'] = newLine;
        return this;
    }
    public set newLine(newLine: number  | undefined) {
        this['new_line'] = newLine;
    }
    public get newLine(): number | undefined {
        return this['new_line'];
    }
    public withText(text: string): ConflictSectionLineDto {
        this['text'] = text;
        return this;
    }
    public withMetaData(metaData: ConflictSectionLineMetaDataDto): ConflictSectionLineDto {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: ConflictSectionLineMetaDataDto  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): ConflictSectionLineMetaDataDto | undefined {
        return this['meta_data'];
    }
    public withRichText(richText: string): ConflictSectionLineDto {
        this['rich_text'] = richText;
        return this;
    }
    public set richText(richText: string  | undefined) {
        this['rich_text'] = richText;
    }
    public get richText(): string | undefined {
        return this['rich_text'];
    }
    public withCanReceiveSuggestion(canReceiveSuggestion: boolean): ConflictSectionLineDto {
        this['can_receive_suggestion'] = canReceiveSuggestion;
        return this;
    }
    public set canReceiveSuggestion(canReceiveSuggestion: boolean  | undefined) {
        this['can_receive_suggestion'] = canReceiveSuggestion;
    }
    public get canReceiveSuggestion(): boolean | undefined {
        return this['can_receive_suggestion'];
    }
}
import { ChangesTreeObjectDiffDto } from './ChangesTreeObjectDiffDto';


export class ChangesTreeObjectDto {
    public title?: string;
    public level?: number;
    private 'file_path'?: string;
    private 'file_type'?: string;
    public diff?: ChangesTreeObjectDiffDto;
    public items?: Array<ChangesTreeObjectDto>;
    public constructor() { 
    }
    public withTitle(title: string): ChangesTreeObjectDto {
        this['title'] = title;
        return this;
    }
    public withLevel(level: number): ChangesTreeObjectDto {
        this['level'] = level;
        return this;
    }
    public withFilePath(filePath: string): ChangesTreeObjectDto {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): ChangesTreeObjectDto {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withDiff(diff: ChangesTreeObjectDiffDto): ChangesTreeObjectDto {
        this['diff'] = diff;
        return this;
    }
    public withItems(items: Array<ChangesTreeObjectDto>): ChangesTreeObjectDto {
        this['items'] = items;
        return this;
    }
}
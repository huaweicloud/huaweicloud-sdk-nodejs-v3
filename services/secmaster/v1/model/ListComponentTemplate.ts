import { FileType } from './FileType';


export class ListComponentTemplate {
    private 'component_id'?: string;
    private 'component_name'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'file_type'?: FileType;
    public param?: string;
    public version?: string;
    public constructor() { 
    }
    public withComponentId(componentId: string): ListComponentTemplate {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentName(componentName: string): ListComponentTemplate {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withFileName(fileName: string): ListComponentTemplate {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ListComponentTemplate {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: FileType): ListComponentTemplate {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: FileType  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): FileType | undefined {
        return this['file_type'];
    }
    public withParam(param: string): ListComponentTemplate {
        this['param'] = param;
        return this;
    }
    public withVersion(version: string): ListComponentTemplate {
        this['version'] = version;
        return this;
    }
}
import { FileType } from './FileType';


export class FileConfiguration {
    private 'file_name'?: string;
    private 'file_type'?: FileType;
    private 'node_id'?: string;
    public param?: { [key: string]: string; };
    public type?: FileConfigurationTypeEnum | string;
    public constructor(fileType?: FileType, param?: { [key: string]: string; }) { 
        this['file_type'] = fileType;
        this['param'] = param;
    }
    public withFileName(fileName: string): FileConfiguration {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: FileType): FileConfiguration {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: FileType  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): FileType | undefined {
        return this['file_type'];
    }
    public withNodeId(nodeId: string): FileConfiguration {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withParam(param: { [key: string]: string; }): FileConfiguration {
        this['param'] = param;
        return this;
    }
    public withType(type: FileConfigurationTypeEnum | string): FileConfiguration {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FileConfigurationTypeEnum {
    HISTORY = 'HISTORY',
    CURRENT_SAVE = 'CURRENT_SAVE',
    CURRENT_APPLY = 'CURRENT_APPLY'
}

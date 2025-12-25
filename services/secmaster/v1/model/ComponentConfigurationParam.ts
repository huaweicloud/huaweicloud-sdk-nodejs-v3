import { FileType } from './FileType';


export class ComponentConfigurationParam {
    private 'component_id'?: string;
    private 'configuration_id'?: string;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'file_type'?: FileType;
    private 'node_id'?: string;
    public param?: string;
    public type?: ComponentConfigurationParamTypeEnum | string;
    public version?: number;
    public constructor() { 
    }
    public withComponentId(componentId: string): ComponentConfigurationParam {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withConfigurationId(configurationId: string): ComponentConfigurationParam {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withFileName(fileName: string): ComponentConfigurationParam {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ComponentConfigurationParam {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: FileType): ComponentConfigurationParam {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: FileType  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): FileType | undefined {
        return this['file_type'];
    }
    public withNodeId(nodeId: string): ComponentConfigurationParam {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withParam(param: string): ComponentConfigurationParam {
        this['param'] = param;
        return this;
    }
    public withType(type: ComponentConfigurationParamTypeEnum | string): ComponentConfigurationParam {
        this['type'] = type;
        return this;
    }
    public withVersion(version: number): ComponentConfigurationParam {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ComponentConfigurationParamTypeEnum {
    HISTORY = 'HISTORY',
    CURRENT_SAVE = 'CURRENT_SAVE',
    CURRENT_APPLY = 'CURRENT_APPLY'
}

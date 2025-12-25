

export class ComponentConfigurationParamVo {
    private 'configuration_id'?: string;
    private 'file_name'?: string;
    private 'file_type'?: string;
    private 'node_id'?: string;
    public param?: string;
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withConfigurationId(configurationId: string): ComponentConfigurationParamVo {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withFileName(fileName: string): ComponentConfigurationParamVo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileType(fileType: string): ComponentConfigurationParamVo {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withNodeId(nodeId: string): ComponentConfigurationParamVo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withParam(param: string): ComponentConfigurationParamVo {
        this['param'] = param;
        return this;
    }
    public withType(type: string): ComponentConfigurationParamVo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ComponentConfigurationParamVo {
        this['version'] = version;
        return this;
    }
}
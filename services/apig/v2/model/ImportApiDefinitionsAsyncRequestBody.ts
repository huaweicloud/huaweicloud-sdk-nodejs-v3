

export class ImportApiDefinitionsAsyncRequestBody {
    private 'is_create_group'?: boolean;
    private 'group_id'?: string;
    private 'extend_mode'?: ImportApiDefinitionsAsyncRequestBodyExtendModeEnum | string;
    private 'simple_mode'?: boolean;
    private 'mock_mode'?: boolean;
    private 'api_mode'?: ImportApiDefinitionsAsyncRequestBodyApiModeEnum | string;
    private 'file_name'?: any;
    public constructor(fileName?: any) { 
        this['file_name'] = fileName;
    }
    public withIsCreateGroup(isCreateGroup: boolean): ImportApiDefinitionsAsyncRequestBody {
        this['is_create_group'] = isCreateGroup;
        return this;
    }
    public set isCreateGroup(isCreateGroup: boolean  | undefined) {
        this['is_create_group'] = isCreateGroup;
    }
    public get isCreateGroup(): boolean | undefined {
        return this['is_create_group'];
    }
    public withGroupId(groupId: string): ImportApiDefinitionsAsyncRequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withExtendMode(extendMode: ImportApiDefinitionsAsyncRequestBodyExtendModeEnum | string): ImportApiDefinitionsAsyncRequestBody {
        this['extend_mode'] = extendMode;
        return this;
    }
    public set extendMode(extendMode: ImportApiDefinitionsAsyncRequestBodyExtendModeEnum | string  | undefined) {
        this['extend_mode'] = extendMode;
    }
    public get extendMode(): ImportApiDefinitionsAsyncRequestBodyExtendModeEnum | string | undefined {
        return this['extend_mode'];
    }
    public withSimpleMode(simpleMode: boolean): ImportApiDefinitionsAsyncRequestBody {
        this['simple_mode'] = simpleMode;
        return this;
    }
    public set simpleMode(simpleMode: boolean  | undefined) {
        this['simple_mode'] = simpleMode;
    }
    public get simpleMode(): boolean | undefined {
        return this['simple_mode'];
    }
    public withMockMode(mockMode: boolean): ImportApiDefinitionsAsyncRequestBody {
        this['mock_mode'] = mockMode;
        return this;
    }
    public set mockMode(mockMode: boolean  | undefined) {
        this['mock_mode'] = mockMode;
    }
    public get mockMode(): boolean | undefined {
        return this['mock_mode'];
    }
    public withApiMode(apiMode: ImportApiDefinitionsAsyncRequestBodyApiModeEnum | string): ImportApiDefinitionsAsyncRequestBody {
        this['api_mode'] = apiMode;
        return this;
    }
    public set apiMode(apiMode: ImportApiDefinitionsAsyncRequestBodyApiModeEnum | string  | undefined) {
        this['api_mode'] = apiMode;
    }
    public get apiMode(): ImportApiDefinitionsAsyncRequestBodyApiModeEnum | string | undefined {
        return this['api_mode'];
    }
    public withFileName(fileName: any): ImportApiDefinitionsAsyncRequestBody {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: any  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): any | undefined {
        return this['file_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportApiDefinitionsAsyncRequestBodyExtendModeEnum {
    MERGE = 'merge',
    OVERRIDE = 'override'
}
/**
    * @export
    * @enum {string}
    */
export enum ImportApiDefinitionsAsyncRequestBodyApiModeEnum {
    MERGE = 'merge',
    OVERRIDE = 'override'
}

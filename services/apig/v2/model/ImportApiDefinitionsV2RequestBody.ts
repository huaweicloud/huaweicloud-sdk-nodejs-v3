

export class ImportApiDefinitionsV2RequestBody {
    private 'is_create_group'?: boolean;
    private 'group_id'?: string;
    private 'extend_mode'?: ImportApiDefinitionsV2RequestBodyExtendModeEnum | string;
    private 'simple_mode'?: boolean;
    private 'mock_mode'?: boolean;
    private 'api_mode'?: ImportApiDefinitionsV2RequestBodyApiModeEnum | string;
    private 'file_name'?: any;
    public constructor(fileName?: any) { 
        this['file_name'] = fileName;
    }
    public withIsCreateGroup(isCreateGroup: boolean): ImportApiDefinitionsV2RequestBody {
        this['is_create_group'] = isCreateGroup;
        return this;
    }
    public set isCreateGroup(isCreateGroup: boolean  | undefined) {
        this['is_create_group'] = isCreateGroup;
    }
    public get isCreateGroup(): boolean | undefined {
        return this['is_create_group'];
    }
    public withGroupId(groupId: string): ImportApiDefinitionsV2RequestBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withExtendMode(extendMode: ImportApiDefinitionsV2RequestBodyExtendModeEnum | string): ImportApiDefinitionsV2RequestBody {
        this['extend_mode'] = extendMode;
        return this;
    }
    public set extendMode(extendMode: ImportApiDefinitionsV2RequestBodyExtendModeEnum | string  | undefined) {
        this['extend_mode'] = extendMode;
    }
    public get extendMode(): ImportApiDefinitionsV2RequestBodyExtendModeEnum | string | undefined {
        return this['extend_mode'];
    }
    public withSimpleMode(simpleMode: boolean): ImportApiDefinitionsV2RequestBody {
        this['simple_mode'] = simpleMode;
        return this;
    }
    public set simpleMode(simpleMode: boolean  | undefined) {
        this['simple_mode'] = simpleMode;
    }
    public get simpleMode(): boolean | undefined {
        return this['simple_mode'];
    }
    public withMockMode(mockMode: boolean): ImportApiDefinitionsV2RequestBody {
        this['mock_mode'] = mockMode;
        return this;
    }
    public set mockMode(mockMode: boolean  | undefined) {
        this['mock_mode'] = mockMode;
    }
    public get mockMode(): boolean | undefined {
        return this['mock_mode'];
    }
    public withApiMode(apiMode: ImportApiDefinitionsV2RequestBodyApiModeEnum | string): ImportApiDefinitionsV2RequestBody {
        this['api_mode'] = apiMode;
        return this;
    }
    public set apiMode(apiMode: ImportApiDefinitionsV2RequestBodyApiModeEnum | string  | undefined) {
        this['api_mode'] = apiMode;
    }
    public get apiMode(): ImportApiDefinitionsV2RequestBodyApiModeEnum | string | undefined {
        return this['api_mode'];
    }
    public withFileName(fileName: any): ImportApiDefinitionsV2RequestBody {
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
export enum ImportApiDefinitionsV2RequestBodyExtendModeEnum {
    MERGE = 'merge',
    OVERRIDE = 'override'
}
/**
    * @export
    * @enum {string}
    */
export enum ImportApiDefinitionsV2RequestBodyApiModeEnum {
    MERGE = 'merge',
    OVERRIDE = 'override'
}

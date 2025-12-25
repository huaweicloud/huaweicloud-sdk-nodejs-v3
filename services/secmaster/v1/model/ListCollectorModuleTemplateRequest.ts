

export class ListCollectorModuleTemplateRequest {
    private 'workspace_id'?: string;
    private 'parser_type'?: ListCollectorModuleTemplateRequestParserTypeEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorModuleTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withParserType(parserType: ListCollectorModuleTemplateRequestParserTypeEnum | string): ListCollectorModuleTemplateRequest {
        this['parser_type'] = parserType;
        return this;
    }
    public set parserType(parserType: ListCollectorModuleTemplateRequestParserTypeEnum | string  | undefined) {
        this['parser_type'] = parserType;
    }
    public get parserType(): ListCollectorModuleTemplateRequestParserTypeEnum | string | undefined {
        return this['parser_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorModuleTemplateRequestParserTypeEnum {
    FILTER = 'FILTER',
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT'
}

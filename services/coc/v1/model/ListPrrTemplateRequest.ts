

export class ListPrrTemplateRequest {
    public name?: string;
    private 'application_type'?: ListPrrTemplateRequestApplicationTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withName(name: string): ListPrrTemplateRequest {
        this['name'] = name;
        return this;
    }
    public withApplicationType(applicationType: ListPrrTemplateRequestApplicationTypeEnum | string): ListPrrTemplateRequest {
        this['application_type'] = applicationType;
        return this;
    }
    public set applicationType(applicationType: ListPrrTemplateRequestApplicationTypeEnum | string  | undefined) {
        this['application_type'] = applicationType;
    }
    public get applicationType(): ListPrrTemplateRequestApplicationTypeEnum | string | undefined {
        return this['application_type'];
    }
    public withOffset(offset: number): ListPrrTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPrrTemplateRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPrrTemplateRequestApplicationTypeEnum {
    CORE = 'core',
    NON_CORE = 'non-core'
}

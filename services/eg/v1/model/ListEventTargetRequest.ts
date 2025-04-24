

export class ListEventTargetRequest {
    public offset?: number;
    public limit?: number;
    public sort?: string;
    private 'fuzzy_label'?: string;
    private 'support_types'?: Array<ListEventTargetRequestSupportTypesEnum> | Array<string>;
    public constructor() { 
    }
    public withOffset(offset: number): ListEventTargetRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventTargetRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListEventTargetRequest {
        this['sort'] = sort;
        return this;
    }
    public withFuzzyLabel(fuzzyLabel: string): ListEventTargetRequest {
        this['fuzzy_label'] = fuzzyLabel;
        return this;
    }
    public set fuzzyLabel(fuzzyLabel: string  | undefined) {
        this['fuzzy_label'] = fuzzyLabel;
    }
    public get fuzzyLabel(): string | undefined {
        return this['fuzzy_label'];
    }
    public withSupportTypes(supportTypes: Array<ListEventTargetRequestSupportTypesEnum> | Array<string>): ListEventTargetRequest {
        this['support_types'] = supportTypes;
        return this;
    }
    public set supportTypes(supportTypes: Array<ListEventTargetRequestSupportTypesEnum> | Array<string>  | undefined) {
        this['support_types'] = supportTypes;
    }
    public get supportTypes(): Array<ListEventTargetRequestSupportTypesEnum> | Array<string> | undefined {
        return this['support_types'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListEventTargetRequestSupportTypesEnum {
    SUBSCRIPTION = 'SUBSCRIPTION',
    FLOW = 'FLOW'
}

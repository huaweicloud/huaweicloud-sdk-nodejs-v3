

export class UpdateFunctionTagsRequestBody {
    public action?: string;
    public tags?: Array<{ [key: string]: string; }>;
    private 'sys_tags'?: Array<{ [key: string]: string; }> | undefined;
    public constructor() { 
    }
    public withAction(action: string): UpdateFunctionTagsRequestBody {
        this['action'] = action;
        return this;
    }
    public withTags(tags: Array<{ [key: string]: string; }>): UpdateFunctionTagsRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withSysTags(sysTags: Array<{ [key: string]: string; }>): UpdateFunctionTagsRequestBody {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<{ [key: string]: string; }> | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags() {
        return this['sys_tags'];
    }
}
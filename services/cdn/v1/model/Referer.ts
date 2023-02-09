

export class Referer {
    private 'referer_type': number | undefined;
    private 'referer_list'?: string | undefined;
    private 'include_empty'?: boolean | undefined;
    public constructor(refererType?: any) { 
        this['referer_type'] = refererType;
    }
    public withRefererType(refererType: number): Referer {
        this['referer_type'] = refererType;
        return this;
    }
    public set refererType(refererType: number | undefined) {
        this['referer_type'] = refererType;
    }
    public get refererType() {
        return this['referer_type'];
    }
    public withRefererList(refererList: string): Referer {
        this['referer_list'] = refererList;
        return this;
    }
    public set refererList(refererList: string | undefined) {
        this['referer_list'] = refererList;
    }
    public get refererList() {
        return this['referer_list'];
    }
    public withIncludeEmpty(includeEmpty: boolean): Referer {
        this['include_empty'] = includeEmpty;
        return this;
    }
    public set includeEmpty(includeEmpty: boolean | undefined) {
        this['include_empty'] = includeEmpty;
    }
    public get includeEmpty() {
        return this['include_empty'];
    }
}
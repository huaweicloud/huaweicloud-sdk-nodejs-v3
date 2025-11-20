

export class ServiceSharedConfig {
    public enable?: boolean;
    private 'optional_project_ids'?: Array<string>;
    private 'no_need_review'?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): ServiceSharedConfig {
        this['enable'] = enable;
        return this;
    }
    public withOptionalProjectIds(optionalProjectIds: Array<string>): ServiceSharedConfig {
        this['optional_project_ids'] = optionalProjectIds;
        return this;
    }
    public set optionalProjectIds(optionalProjectIds: Array<string>  | undefined) {
        this['optional_project_ids'] = optionalProjectIds;
    }
    public get optionalProjectIds(): Array<string> | undefined {
        return this['optional_project_ids'];
    }
    public withNoNeedReview(noNeedReview: boolean): ServiceSharedConfig {
        this['no_need_review'] = noNeedReview;
        return this;
    }
    public set noNeedReview(noNeedReview: boolean  | undefined) {
        this['no_need_review'] = noNeedReview;
    }
    public get noNeedReview(): boolean | undefined {
        return this['no_need_review'];
    }
}
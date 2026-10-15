

export class ReplayCompareResultResp {
    private 'sql_template'?: string;
    private 'sql_template_md5'?: string;
    private 'sql_params'?: string;
    private 'target_content'?: string;
    private 'mirror_content'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withSqlTemplate(sqlTemplate: string): ReplayCompareResultResp {
        this['sql_template'] = sqlTemplate;
        return this;
    }
    public set sqlTemplate(sqlTemplate: string  | undefined) {
        this['sql_template'] = sqlTemplate;
    }
    public get sqlTemplate(): string | undefined {
        return this['sql_template'];
    }
    public withSqlTemplateMd5(sqlTemplateMd5: string): ReplayCompareResultResp {
        this['sql_template_md5'] = sqlTemplateMd5;
        return this;
    }
    public set sqlTemplateMd5(sqlTemplateMd5: string  | undefined) {
        this['sql_template_md5'] = sqlTemplateMd5;
    }
    public get sqlTemplateMd5(): string | undefined {
        return this['sql_template_md5'];
    }
    public withSqlParams(sqlParams: string): ReplayCompareResultResp {
        this['sql_params'] = sqlParams;
        return this;
    }
    public set sqlParams(sqlParams: string  | undefined) {
        this['sql_params'] = sqlParams;
    }
    public get sqlParams(): string | undefined {
        return this['sql_params'];
    }
    public withTargetContent(targetContent: string): ReplayCompareResultResp {
        this['target_content'] = targetContent;
        return this;
    }
    public set targetContent(targetContent: string  | undefined) {
        this['target_content'] = targetContent;
    }
    public get targetContent(): string | undefined {
        return this['target_content'];
    }
    public withMirrorContent(mirrorContent: string): ReplayCompareResultResp {
        this['mirror_content'] = mirrorContent;
        return this;
    }
    public set mirrorContent(mirrorContent: string  | undefined) {
        this['mirror_content'] = mirrorContent;
    }
    public get mirrorContent(): string | undefined {
        return this['mirror_content'];
    }
    public withCreateTime(createTime: string): ReplayCompareResultResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}
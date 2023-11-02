

export class RuleTemplateDetailVO {
    public id?: number;
    public name?: string;
    private 'category_id'?: number;
    public dimension?: string;
    public type?: string;
    private 'system_template'?: boolean;
    private 'sql_info'?: string;
    private 'abnormal_table_template'?: string;
    private 'result_description'?: string;
    private 'create_time'?: number;
    public creator?: string;
    public constructor() { 
    }
    public withId(id: number): RuleTemplateDetailVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): RuleTemplateDetailVO {
        this['name'] = name;
        return this;
    }
    public withCategoryId(categoryId: number): RuleTemplateDetailVO {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withDimension(dimension: string): RuleTemplateDetailVO {
        this['dimension'] = dimension;
        return this;
    }
    public withType(type: string): RuleTemplateDetailVO {
        this['type'] = type;
        return this;
    }
    public withSystemTemplate(systemTemplate: boolean): RuleTemplateDetailVO {
        this['system_template'] = systemTemplate;
        return this;
    }
    public set systemTemplate(systemTemplate: boolean  | undefined) {
        this['system_template'] = systemTemplate;
    }
    public get systemTemplate(): boolean | undefined {
        return this['system_template'];
    }
    public withSqlInfo(sqlInfo: string): RuleTemplateDetailVO {
        this['sql_info'] = sqlInfo;
        return this;
    }
    public set sqlInfo(sqlInfo: string  | undefined) {
        this['sql_info'] = sqlInfo;
    }
    public get sqlInfo(): string | undefined {
        return this['sql_info'];
    }
    public withAbnormalTableTemplate(abnormalTableTemplate: string): RuleTemplateDetailVO {
        this['abnormal_table_template'] = abnormalTableTemplate;
        return this;
    }
    public set abnormalTableTemplate(abnormalTableTemplate: string  | undefined) {
        this['abnormal_table_template'] = abnormalTableTemplate;
    }
    public get abnormalTableTemplate(): string | undefined {
        return this['abnormal_table_template'];
    }
    public withResultDescription(resultDescription: string): RuleTemplateDetailVO {
        this['result_description'] = resultDescription;
        return this;
    }
    public set resultDescription(resultDescription: string  | undefined) {
        this['result_description'] = resultDescription;
    }
    public get resultDescription(): string | undefined {
        return this['result_description'];
    }
    public withCreateTime(createTime: number): RuleTemplateDetailVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): RuleTemplateDetailVO {
        this['creator'] = creator;
        return this;
    }
}
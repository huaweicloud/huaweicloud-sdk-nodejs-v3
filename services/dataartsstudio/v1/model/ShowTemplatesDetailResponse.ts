
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplatesDetailResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    private 'category_id'?: number;
    public dimension?: string;
    public type?: string;
    private 'system_template'?: boolean;
    private 'sql_info'?: string;
    private 'result_description'?: string;
    private 'create_time'?: number;
    public creator?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowTemplatesDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowTemplatesDetailResponse {
        this['name'] = name;
        return this;
    }
    public withCategoryId(categoryId: number): ShowTemplatesDetailResponse {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: number  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): number | undefined {
        return this['category_id'];
    }
    public withDimension(dimension: string): ShowTemplatesDetailResponse {
        this['dimension'] = dimension;
        return this;
    }
    public withType(type: string): ShowTemplatesDetailResponse {
        this['type'] = type;
        return this;
    }
    public withSystemTemplate(systemTemplate: boolean): ShowTemplatesDetailResponse {
        this['system_template'] = systemTemplate;
        return this;
    }
    public set systemTemplate(systemTemplate: boolean  | undefined) {
        this['system_template'] = systemTemplate;
    }
    public get systemTemplate(): boolean | undefined {
        return this['system_template'];
    }
    public withSqlInfo(sqlInfo: string): ShowTemplatesDetailResponse {
        this['sql_info'] = sqlInfo;
        return this;
    }
    public set sqlInfo(sqlInfo: string  | undefined) {
        this['sql_info'] = sqlInfo;
    }
    public get sqlInfo(): string | undefined {
        return this['sql_info'];
    }
    public withResultDescription(resultDescription: string): ShowTemplatesDetailResponse {
        this['result_description'] = resultDescription;
        return this;
    }
    public set resultDescription(resultDescription: string  | undefined) {
        this['result_description'] = resultDescription;
    }
    public get resultDescription(): string | undefined {
        return this['result_description'];
    }
    public withCreateTime(createTime: number): ShowTemplatesDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): ShowTemplatesDetailResponse {
        this['creator'] = creator;
        return this;
    }
}
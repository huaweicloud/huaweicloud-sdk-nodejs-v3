import { TagInfo } from './TagInfo';


export class QueryFireWallInstanceDto {
    private 'enterprise_project_id'?: string;
    private 'key_word'?: string;
    public tags?: Array<TagInfo>;
    public limit?: number;
    public offset?: number;
    public constructor(limit?: number, offset?: number) { 
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): QueryFireWallInstanceDto {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withKeyWord(keyWord: string): QueryFireWallInstanceDto {
        this['key_word'] = keyWord;
        return this;
    }
    public set keyWord(keyWord: string  | undefined) {
        this['key_word'] = keyWord;
    }
    public get keyWord(): string | undefined {
        return this['key_word'];
    }
    public withTags(tags: Array<TagInfo>): QueryFireWallInstanceDto {
        this['tags'] = tags;
        return this;
    }
    public withLimit(limit: number): QueryFireWallInstanceDto {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): QueryFireWallInstanceDto {
        this['offset'] = offset;
        return this;
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomRegexResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'regex_expression'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateCustomRegexResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateCustomRegexResponse {
        this['name'] = name;
        return this;
    }
    public withRegexExpression(regexExpression: string): CreateCustomRegexResponse {
        this['regex_expression'] = regexExpression;
        return this;
    }
    public set regexExpression(regexExpression: string  | undefined) {
        this['regex_expression'] = regexExpression;
    }
    public get regexExpression(): string | undefined {
        return this['regex_expression'];
    }
    public withCreateTime(createTime: number): CreateCustomRegexResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): CreateCustomRegexResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}
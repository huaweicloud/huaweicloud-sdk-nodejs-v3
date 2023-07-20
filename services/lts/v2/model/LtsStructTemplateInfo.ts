import { Rule } from './Rule';
import { StructFieldInfo } from './StructFieldInfo';
import { TagField } from './TagField';


export class LtsStructTemplateInfo {
    private 'demo_fields'?: Array<StructFieldInfo>;
    private 'tag_fields'?: Array<TagField>;
    public content?: string;
    private 'log_group_id'?: string;
    private 'parse_type'?: LtsStructTemplateInfoParseTypeEnum | string;
    private 'log_stream_id'?: string;
    private 'project_id'?: string;
    private 'regex_rules'?: string;
    public layers?: number;
    public tokenizer?: string;
    private 'log_format'?: string;
    public rule?: Rule;
    public constructor(demoFields?: Array<StructFieldInfo>, tagFields?: Array<TagField>, content?: string, logGroupId?: string, parseType?: string, logStreamId?: string, projectId?: string) { 
        this['demo_fields'] = demoFields;
        this['tag_fields'] = tagFields;
        this['content'] = content;
        this['log_group_id'] = logGroupId;
        this['parse_type'] = parseType;
        this['log_stream_id'] = logStreamId;
        this['project_id'] = projectId;
    }
    public withDemoFields(demoFields: Array<StructFieldInfo>): LtsStructTemplateInfo {
        this['demo_fields'] = demoFields;
        return this;
    }
    public set demoFields(demoFields: Array<StructFieldInfo>  | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields(): Array<StructFieldInfo> | undefined {
        return this['demo_fields'];
    }
    public withTagFields(tagFields: Array<TagField>): LtsStructTemplateInfo {
        this['tag_fields'] = tagFields;
        return this;
    }
    public set tagFields(tagFields: Array<TagField>  | undefined) {
        this['tag_fields'] = tagFields;
    }
    public get tagFields(): Array<TagField> | undefined {
        return this['tag_fields'];
    }
    public withContent(content: string): LtsStructTemplateInfo {
        this['content'] = content;
        return this;
    }
    public withLogGroupId(logGroupId: string): LtsStructTemplateInfo {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withParseType(parseType: LtsStructTemplateInfoParseTypeEnum | string): LtsStructTemplateInfo {
        this['parse_type'] = parseType;
        return this;
    }
    public set parseType(parseType: LtsStructTemplateInfoParseTypeEnum | string  | undefined) {
        this['parse_type'] = parseType;
    }
    public get parseType(): LtsStructTemplateInfoParseTypeEnum | string | undefined {
        return this['parse_type'];
    }
    public withLogStreamId(logStreamId: string): LtsStructTemplateInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withProjectId(projectId: string): LtsStructTemplateInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegexRules(regexRules: string): LtsStructTemplateInfo {
        this['regex_rules'] = regexRules;
        return this;
    }
    public set regexRules(regexRules: string  | undefined) {
        this['regex_rules'] = regexRules;
    }
    public get regexRules(): string | undefined {
        return this['regex_rules'];
    }
    public withLayers(layers: number): LtsStructTemplateInfo {
        this['layers'] = layers;
        return this;
    }
    public withTokenizer(tokenizer: string): LtsStructTemplateInfo {
        this['tokenizer'] = tokenizer;
        return this;
    }
    public withLogFormat(logFormat: string): LtsStructTemplateInfo {
        this['log_format'] = logFormat;
        return this;
    }
    public set logFormat(logFormat: string  | undefined) {
        this['log_format'] = logFormat;
    }
    public get logFormat(): string | undefined {
        return this['log_format'];
    }
    public withRule(rule: Rule): LtsStructTemplateInfo {
        this['rule'] = rule;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LtsStructTemplateInfoParseTypeEnum {
    BUILT_IN = 'built_in',
    JSON = 'json',
    CUSTOM_REGEX = 'custom_regex',
    SPLIT = 'split',
    NGINX = 'nginx'
}

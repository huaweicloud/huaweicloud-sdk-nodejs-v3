import { Rule } from './Rule';
import { StructFieldInfo } from './StructFieldInfo';
import { TagField } from './TagField';


export class LtsStructTemplateInfo {
    private 'demo_fields': Array<StructFieldInfo> | undefined;
    private 'tag_fields': Array<TagField> | undefined;
    public content: string;
    private 'log_group_id': string | undefined;
    private 'parse_type': LtsStructTemplateInfoParseTypeEnum | undefined;
    private 'log_stream_id': string | undefined;
    private 'project_id': string | undefined;
    private 'regex_rules'?: string | undefined;
    public layers?: number;
    public tokenizer?: string;
    private 'log_format'?: string | undefined;
    public rule?: Rule;
    public constructor(demoFields?: any, tagFields?: any, content?: any, logGroupId?: any, parseType?: any, logStreamId?: any, projectId?: any) { 
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
    public set demoFields(demoFields: Array<StructFieldInfo> | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields() {
        return this['demo_fields'];
    }
    public withTagFields(tagFields: Array<TagField>): LtsStructTemplateInfo {
        this['tag_fields'] = tagFields;
        return this;
    }
    public set tagFields(tagFields: Array<TagField> | undefined) {
        this['tag_fields'] = tagFields;
    }
    public get tagFields() {
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
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withParseType(parseType: LtsStructTemplateInfoParseTypeEnum): LtsStructTemplateInfo {
        this['parse_type'] = parseType;
        return this;
    }
    public set parseType(parseType: LtsStructTemplateInfoParseTypeEnum | undefined) {
        this['parse_type'] = parseType;
    }
    public get parseType() {
        return this['parse_type'];
    }
    public withLogStreamId(logStreamId: string): LtsStructTemplateInfo {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withProjectId(projectId: string): LtsStructTemplateInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withRegexRules(regexRules: string): LtsStructTemplateInfo {
        this['regex_rules'] = regexRules;
        return this;
    }
    public set regexRules(regexRules: string | undefined) {
        this['regex_rules'] = regexRules;
    }
    public get regexRules() {
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
    public set logFormat(logFormat: string | undefined) {
        this['log_format'] = logFormat;
    }
    public get logFormat() {
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

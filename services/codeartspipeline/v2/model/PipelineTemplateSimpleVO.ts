import { PipelineTemplateSimpleVOStages } from './PipelineTemplateSimpleVOStages';


export class PipelineTemplateSimpleVO {
    public id?: string;
    public name?: string;
    public icon?: string;
    private 'manifest_version'?: string;
    public language?: string;
    public description?: string;
    private 'is_system'?: boolean;
    public region?: string;
    private 'domain_id'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'updater_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'is_collect'?: boolean;
    private 'is_show_source'?: string;
    public stages?: Array<PipelineTemplateSimpleVOStages>;
    public constructor() { 
    }
    public withId(id: string): PipelineTemplateSimpleVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PipelineTemplateSimpleVO {
        this['name'] = name;
        return this;
    }
    public withIcon(icon: string): PipelineTemplateSimpleVO {
        this['icon'] = icon;
        return this;
    }
    public withManifestVersion(manifestVersion: string): PipelineTemplateSimpleVO {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withLanguage(language: string): PipelineTemplateSimpleVO {
        this['language'] = language;
        return this;
    }
    public withDescription(description: string): PipelineTemplateSimpleVO {
        this['description'] = description;
        return this;
    }
    public withIsSystem(isSystem: boolean): PipelineTemplateSimpleVO {
        this['is_system'] = isSystem;
        return this;
    }
    public set isSystem(isSystem: boolean  | undefined) {
        this['is_system'] = isSystem;
    }
    public get isSystem(): boolean | undefined {
        return this['is_system'];
    }
    public withRegion(region: string): PipelineTemplateSimpleVO {
        this['region'] = region;
        return this;
    }
    public withDomainId(domainId: string): PipelineTemplateSimpleVO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCreatorId(creatorId: string): PipelineTemplateSimpleVO {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): PipelineTemplateSimpleVO {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdaterId(updaterId: string): PipelineTemplateSimpleVO {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withCreateTime(createTime: number): PipelineTemplateSimpleVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): PipelineTemplateSimpleVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withIsCollect(isCollect: boolean): PipelineTemplateSimpleVO {
        this['is_collect'] = isCollect;
        return this;
    }
    public set isCollect(isCollect: boolean  | undefined) {
        this['is_collect'] = isCollect;
    }
    public get isCollect(): boolean | undefined {
        return this['is_collect'];
    }
    public withIsShowSource(isShowSource: string): PipelineTemplateSimpleVO {
        this['is_show_source'] = isShowSource;
        return this;
    }
    public set isShowSource(isShowSource: string  | undefined) {
        this['is_show_source'] = isShowSource;
    }
    public get isShowSource(): string | undefined {
        return this['is_show_source'];
    }
    public withStages(stages: Array<PipelineTemplateSimpleVOStages>): PipelineTemplateSimpleVO {
        this['stages'] = stages;
        return this;
    }
}
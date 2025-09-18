import { CustomVariable } from './CustomVariable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineTemplateDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public icon?: string;
    private 'manifest_version'?: string;
    public language?: string;
    public description?: string;
    private 'is_system'?: boolean;
    public region?: string;
    private 'domain_id'?: string;
    public variables?: Array<CustomVariable>;
    private 'creator_id'?: string;
    private 'updater_id'?: string;
    private 'is_collect'?: string;
    private 'is_show_source'?: boolean;
    public definition?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowPipelineTemplateDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowPipelineTemplateDetailResponse {
        this['name'] = name;
        return this;
    }
    public withIcon(icon: string): ShowPipelineTemplateDetailResponse {
        this['icon'] = icon;
        return this;
    }
    public withManifestVersion(manifestVersion: string): ShowPipelineTemplateDetailResponse {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withLanguage(language: string): ShowPipelineTemplateDetailResponse {
        this['language'] = language;
        return this;
    }
    public withDescription(description: string): ShowPipelineTemplateDetailResponse {
        this['description'] = description;
        return this;
    }
    public withIsSystem(isSystem: boolean): ShowPipelineTemplateDetailResponse {
        this['is_system'] = isSystem;
        return this;
    }
    public set isSystem(isSystem: boolean  | undefined) {
        this['is_system'] = isSystem;
    }
    public get isSystem(): boolean | undefined {
        return this['is_system'];
    }
    public withRegion(region: string): ShowPipelineTemplateDetailResponse {
        this['region'] = region;
        return this;
    }
    public withDomainId(domainId: string): ShowPipelineTemplateDetailResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withVariables(variables: Array<CustomVariable>): ShowPipelineTemplateDetailResponse {
        this['variables'] = variables;
        return this;
    }
    public withCreatorId(creatorId: string): ShowPipelineTemplateDetailResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withUpdaterId(updaterId: string): ShowPipelineTemplateDetailResponse {
        this['updater_id'] = updaterId;
        return this;
    }
    public set updaterId(updaterId: string  | undefined) {
        this['updater_id'] = updaterId;
    }
    public get updaterId(): string | undefined {
        return this['updater_id'];
    }
    public withIsCollect(isCollect: string): ShowPipelineTemplateDetailResponse {
        this['is_collect'] = isCollect;
        return this;
    }
    public set isCollect(isCollect: string  | undefined) {
        this['is_collect'] = isCollect;
    }
    public get isCollect(): string | undefined {
        return this['is_collect'];
    }
    public withIsShowSource(isShowSource: boolean): ShowPipelineTemplateDetailResponse {
        this['is_show_source'] = isShowSource;
        return this;
    }
    public set isShowSource(isShowSource: boolean  | undefined) {
        this['is_show_source'] = isShowSource;
    }
    public get isShowSource(): boolean | undefined {
        return this['is_show_source'];
    }
    public withDefinition(definition: string): ShowPipelineTemplateDetailResponse {
        this['definition'] = definition;
        return this;
    }
}
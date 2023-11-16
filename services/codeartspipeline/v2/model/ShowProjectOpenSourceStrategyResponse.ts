import { OpenSourceRuleContent } from './OpenSourceRuleContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectOpenSourceStrategyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public level?: string;
    private 'parent_id'?: string;
    public version?: string;
    private 'is_valid'?: boolean;
    private 'is_public'?: boolean;
    public creator?: string;
    private 'create_time'?: string;
    public updater?: string;
    private 'update_time'?: string;
    public content?: OpenSourceRuleContent;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowProjectOpenSourceStrategyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowProjectOpenSourceStrategyResponse {
        this['name'] = name;
        return this;
    }
    public withLevel(level: string): ShowProjectOpenSourceStrategyResponse {
        this['level'] = level;
        return this;
    }
    public withParentId(parentId: string): ShowProjectOpenSourceStrategyResponse {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withVersion(version: string): ShowProjectOpenSourceStrategyResponse {
        this['version'] = version;
        return this;
    }
    public withIsValid(isValid: boolean): ShowProjectOpenSourceStrategyResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withIsPublic(isPublic: boolean): ShowProjectOpenSourceStrategyResponse {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withCreator(creator: string): ShowProjectOpenSourceStrategyResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: string): ShowProjectOpenSourceStrategyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdater(updater: string): ShowProjectOpenSourceStrategyResponse {
        this['updater'] = updater;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowProjectOpenSourceStrategyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withContent(content: OpenSourceRuleContent): ShowProjectOpenSourceStrategyResponse {
        this['content'] = content;
        return this;
    }
}
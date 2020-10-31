import { TagInfo } from './TagInfo';
import { TopicCategory } from './TopicCategory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTemplateV3Response extends SdkResponse {
    public id?: string;
    public title?: string;
    public description?: string;
    private 'creator_id'?: string | undefined;
    public creator?: string;
    public nickname?: string;
    public score?: number;
    public status?: number;
    private 'view_count'?: number | undefined;
    private 'usage_count'?: number | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    private 'published_at'?: string | undefined;
    private 'favorite_state'?: number | undefined;
    public maintainers?: Array<string>;
    private 'platform_source'?: number | undefined;
    public properties?: object;
    public dependencies?: Array<object>;
    private 'dependency_type'?: string | undefined;
    public store?: number;
    private 'store_info'?: string | undefined;
    private 'file_size'?: number | undefined;
    public deployment?: object;
    private 'is_static'?: number | undefined;
    private 'update_id'?: string | undefined;
    public topic?: Array<TopicCategory>;
    public tags?: Array<TagInfo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowTemplateV3Response {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): ShowTemplateV3Response {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ShowTemplateV3Response {
        this['description'] = description;
        return this;
    }
    public withCreatorId(creatorId: string): ShowTemplateV3Response {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId() {
        return this['creator_id'];
    }
    public withCreator(creator: string): ShowTemplateV3Response {
        this['creator'] = creator;
        return this;
    }
    public withNickname(nickname: string): ShowTemplateV3Response {
        this['nickname'] = nickname;
        return this;
    }
    public withScore(score: number): ShowTemplateV3Response {
        this['score'] = score;
        return this;
    }
    public withStatus(status: number): ShowTemplateV3Response {
        this['status'] = status;
        return this;
    }
    public withViewCount(viewCount: number): ShowTemplateV3Response {
        this['view_count'] = viewCount;
        return this;
    }
    public set viewCount(viewCount: number | undefined) {
        this['view_count'] = viewCount;
    }
    public get viewCount() {
        return this['view_count'];
    }
    public withUsageCount(usageCount: number): ShowTemplateV3Response {
        this['usage_count'] = usageCount;
        return this;
    }
    public set usageCount(usageCount: number | undefined) {
        this['usage_count'] = usageCount;
    }
    public get usageCount() {
        return this['usage_count'];
    }
    public withCreatedAt(createdAt: string): ShowTemplateV3Response {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowTemplateV3Response {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withPublishedAt(publishedAt: string): ShowTemplateV3Response {
        this['published_at'] = publishedAt;
        return this;
    }
    public set publishedAt(publishedAt: string | undefined) {
        this['published_at'] = publishedAt;
    }
    public get publishedAt() {
        return this['published_at'];
    }
    public withFavoriteState(favoriteState: number): ShowTemplateV3Response {
        this['favorite_state'] = favoriteState;
        return this;
    }
    public set favoriteState(favoriteState: number | undefined) {
        this['favorite_state'] = favoriteState;
    }
    public get favoriteState() {
        return this['favorite_state'];
    }
    public withMaintainers(maintainers: Array<string>): ShowTemplateV3Response {
        this['maintainers'] = maintainers;
        return this;
    }
    public withPlatformSource(platformSource: number): ShowTemplateV3Response {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: number | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource() {
        return this['platform_source'];
    }
    public withProperties(properties: object): ShowTemplateV3Response {
        this['properties'] = properties;
        return this;
    }
    public withDependencies(dependencies: Array<object>): ShowTemplateV3Response {
        this['dependencies'] = dependencies;
        return this;
    }
    public withDependencyType(dependencyType: string): ShowTemplateV3Response {
        this['dependency_type'] = dependencyType;
        return this;
    }
    public set dependencyType(dependencyType: string | undefined) {
        this['dependency_type'] = dependencyType;
    }
    public get dependencyType() {
        return this['dependency_type'];
    }
    public withStore(store: number): ShowTemplateV3Response {
        this['store'] = store;
        return this;
    }
    public withStoreInfo(storeInfo: string): ShowTemplateV3Response {
        this['store_info'] = storeInfo;
        return this;
    }
    public set storeInfo(storeInfo: string | undefined) {
        this['store_info'] = storeInfo;
    }
    public get storeInfo() {
        return this['store_info'];
    }
    public withFileSize(fileSize: number): ShowTemplateV3Response {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize() {
        return this['file_size'];
    }
    public withDeployment(deployment: object): ShowTemplateV3Response {
        this['deployment'] = deployment;
        return this;
    }
    public withIsStatic(isStatic: number): ShowTemplateV3Response {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: number | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic() {
        return this['is_static'];
    }
    public withUpdateId(updateId: string): ShowTemplateV3Response {
        this['update_id'] = updateId;
        return this;
    }
    public set updateId(updateId: string | undefined) {
        this['update_id'] = updateId;
    }
    public get updateId() {
        return this['update_id'];
    }
    public withTopic(topic: Array<TopicCategory>): ShowTemplateV3Response {
        this['topic'] = topic;
        return this;
    }
    public withTags(tags: Array<TagInfo>): ShowTemplateV3Response {
        this['tags'] = tags;
        return this;
    }
}
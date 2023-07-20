import { Dependent } from './Dependent';
import { PipelineTemplateInfo } from './PipelineTemplateInfo';
import { Reference } from './Reference';
import { TagInfo } from './TagInfo';
import { TemplateProductExt } from './TemplateProductExt';
import { TopicCategory } from './TopicCategory';


export class TemplateInfo {
    public id?: string;
    public title?: string;
    public description?: string;
    public productshorts?: Array<string>;
    public products?: Array<TemplateProductExt>;
    public topic?: Array<TopicCategory>;
    private 'creator_id'?: string;
    public creator?: string;
    public nickname?: string;
    public score?: number;
    public label?: string;
    public store?: number;
    private 'store_info'?: string;
    public status?: number;
    private 'view_count'?: number;
    private 'usage_count'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'published_at'?: string;
    private 'favorite_state'?: number;
    public tags?: Array<TagInfo>;
    public type?: number;
    private 'is_static'?: number;
    public maintainers?: Array<string>;
    private 'pipeline_template'?: PipelineTemplateInfo;
    private 'platform_source'?: number;
    public references?: Array<Reference>;
    public properties?: object;
    public dependencies?: Array<object>;
    private 'dependency_type'?: string;
    private 'forum_id'?: number;
    private 'file_size'?: number;
    public deployment?: object;
    private 'update_id'?: string;
    private 'is_support_cloudide'?: boolean;
    private 'has_notices'?: boolean;
    public dependents?: Array<Dependent>;
    private 'dependent_services'?: string;
    public constructor() { 
    }
    public withId(id: string): TemplateInfo {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): TemplateInfo {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): TemplateInfo {
        this['description'] = description;
        return this;
    }
    public withProductshorts(productshorts: Array<string>): TemplateInfo {
        this['productshorts'] = productshorts;
        return this;
    }
    public withProducts(products: Array<TemplateProductExt>): TemplateInfo {
        this['products'] = products;
        return this;
    }
    public withTopic(topic: Array<TopicCategory>): TemplateInfo {
        this['topic'] = topic;
        return this;
    }
    public withCreatorId(creatorId: string): TemplateInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreator(creator: string): TemplateInfo {
        this['creator'] = creator;
        return this;
    }
    public withNickname(nickname: string): TemplateInfo {
        this['nickname'] = nickname;
        return this;
    }
    public withScore(score: number): TemplateInfo {
        this['score'] = score;
        return this;
    }
    public withLabel(label: string): TemplateInfo {
        this['label'] = label;
        return this;
    }
    public withStore(store: number): TemplateInfo {
        this['store'] = store;
        return this;
    }
    public withStoreInfo(storeInfo: string): TemplateInfo {
        this['store_info'] = storeInfo;
        return this;
    }
    public set storeInfo(storeInfo: string  | undefined) {
        this['store_info'] = storeInfo;
    }
    public get storeInfo(): string | undefined {
        return this['store_info'];
    }
    public withStatus(status: number): TemplateInfo {
        this['status'] = status;
        return this;
    }
    public withViewCount(viewCount: number): TemplateInfo {
        this['view_count'] = viewCount;
        return this;
    }
    public set viewCount(viewCount: number  | undefined) {
        this['view_count'] = viewCount;
    }
    public get viewCount(): number | undefined {
        return this['view_count'];
    }
    public withUsageCount(usageCount: number): TemplateInfo {
        this['usage_count'] = usageCount;
        return this;
    }
    public set usageCount(usageCount: number  | undefined) {
        this['usage_count'] = usageCount;
    }
    public get usageCount(): number | undefined {
        return this['usage_count'];
    }
    public withCreatedAt(createdAt: string): TemplateInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): TemplateInfo {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withPublishedAt(publishedAt: string): TemplateInfo {
        this['published_at'] = publishedAt;
        return this;
    }
    public set publishedAt(publishedAt: string  | undefined) {
        this['published_at'] = publishedAt;
    }
    public get publishedAt(): string | undefined {
        return this['published_at'];
    }
    public withFavoriteState(favoriteState: number): TemplateInfo {
        this['favorite_state'] = favoriteState;
        return this;
    }
    public set favoriteState(favoriteState: number  | undefined) {
        this['favorite_state'] = favoriteState;
    }
    public get favoriteState(): number | undefined {
        return this['favorite_state'];
    }
    public withTags(tags: Array<TagInfo>): TemplateInfo {
        this['tags'] = tags;
        return this;
    }
    public withType(type: number): TemplateInfo {
        this['type'] = type;
        return this;
    }
    public withIsStatic(isStatic: number): TemplateInfo {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: number  | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic(): number | undefined {
        return this['is_static'];
    }
    public withMaintainers(maintainers: Array<string>): TemplateInfo {
        this['maintainers'] = maintainers;
        return this;
    }
    public withPipelineTemplate(pipelineTemplate: PipelineTemplateInfo): TemplateInfo {
        this['pipeline_template'] = pipelineTemplate;
        return this;
    }
    public set pipelineTemplate(pipelineTemplate: PipelineTemplateInfo  | undefined) {
        this['pipeline_template'] = pipelineTemplate;
    }
    public get pipelineTemplate(): PipelineTemplateInfo | undefined {
        return this['pipeline_template'];
    }
    public withPlatformSource(platformSource: number): TemplateInfo {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: number  | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource(): number | undefined {
        return this['platform_source'];
    }
    public withReferences(references: Array<Reference>): TemplateInfo {
        this['references'] = references;
        return this;
    }
    public withProperties(properties: object): TemplateInfo {
        this['properties'] = properties;
        return this;
    }
    public withDependencies(dependencies: Array<object>): TemplateInfo {
        this['dependencies'] = dependencies;
        return this;
    }
    public withDependencyType(dependencyType: string): TemplateInfo {
        this['dependency_type'] = dependencyType;
        return this;
    }
    public set dependencyType(dependencyType: string  | undefined) {
        this['dependency_type'] = dependencyType;
    }
    public get dependencyType(): string | undefined {
        return this['dependency_type'];
    }
    public withForumId(forumId: number): TemplateInfo {
        this['forum_id'] = forumId;
        return this;
    }
    public set forumId(forumId: number  | undefined) {
        this['forum_id'] = forumId;
    }
    public get forumId(): number | undefined {
        return this['forum_id'];
    }
    public withFileSize(fileSize: number): TemplateInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withDeployment(deployment: object): TemplateInfo {
        this['deployment'] = deployment;
        return this;
    }
    public withUpdateId(updateId: string): TemplateInfo {
        this['update_id'] = updateId;
        return this;
    }
    public set updateId(updateId: string  | undefined) {
        this['update_id'] = updateId;
    }
    public get updateId(): string | undefined {
        return this['update_id'];
    }
    public withIsSupportCloudide(isSupportCloudide: boolean): TemplateInfo {
        this['is_support_cloudide'] = isSupportCloudide;
        return this;
    }
    public set isSupportCloudide(isSupportCloudide: boolean  | undefined) {
        this['is_support_cloudide'] = isSupportCloudide;
    }
    public get isSupportCloudide(): boolean | undefined {
        return this['is_support_cloudide'];
    }
    public withHasNotices(hasNotices: boolean): TemplateInfo {
        this['has_notices'] = hasNotices;
        return this;
    }
    public set hasNotices(hasNotices: boolean  | undefined) {
        this['has_notices'] = hasNotices;
    }
    public get hasNotices(): boolean | undefined {
        return this['has_notices'];
    }
    public withDependents(dependents: Array<Dependent>): TemplateInfo {
        this['dependents'] = dependents;
        return this;
    }
    public withDependentServices(dependentServices: string): TemplateInfo {
        this['dependent_services'] = dependentServices;
        return this;
    }
    public set dependentServices(dependentServices: string  | undefined) {
        this['dependent_services'] = dependentServices;
    }
    public get dependentServices(): string | undefined {
        return this['dependent_services'];
    }
}
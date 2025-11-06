import { UserBasicDto } from './UserBasicDto';


export class DiscussionTemplateDto {
    public id?: number;
    private 'template_name'?: string;
    public description?: string;
    private 'assignee_id'?: number;
    public categories?: string;
    private 'categories_en'?: string;
    private 'categories_cn'?: string;
    public modules?: Array<string>;
    private 'review_severity'?: string;
    private 'is_default'?: boolean;
    private 'creator_id'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public creator?: UserBasicDto;
    public assignee?: UserBasicDto;
    public constructor() { 
    }
    public withId(id: number): DiscussionTemplateDto {
        this['id'] = id;
        return this;
    }
    public withTemplateName(templateName: string): DiscussionTemplateDto {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): DiscussionTemplateDto {
        this['description'] = description;
        return this;
    }
    public withAssigneeId(assigneeId: number): DiscussionTemplateDto {
        this['assignee_id'] = assigneeId;
        return this;
    }
    public set assigneeId(assigneeId: number  | undefined) {
        this['assignee_id'] = assigneeId;
    }
    public get assigneeId(): number | undefined {
        return this['assignee_id'];
    }
    public withCategories(categories: string): DiscussionTemplateDto {
        this['categories'] = categories;
        return this;
    }
    public withCategoriesEn(categoriesEn: string): DiscussionTemplateDto {
        this['categories_en'] = categoriesEn;
        return this;
    }
    public set categoriesEn(categoriesEn: string  | undefined) {
        this['categories_en'] = categoriesEn;
    }
    public get categoriesEn(): string | undefined {
        return this['categories_en'];
    }
    public withCategoriesCn(categoriesCn: string): DiscussionTemplateDto {
        this['categories_cn'] = categoriesCn;
        return this;
    }
    public set categoriesCn(categoriesCn: string  | undefined) {
        this['categories_cn'] = categoriesCn;
    }
    public get categoriesCn(): string | undefined {
        return this['categories_cn'];
    }
    public withModules(modules: Array<string>): DiscussionTemplateDto {
        this['modules'] = modules;
        return this;
    }
    public withReviewSeverity(reviewSeverity: string): DiscussionTemplateDto {
        this['review_severity'] = reviewSeverity;
        return this;
    }
    public set reviewSeverity(reviewSeverity: string  | undefined) {
        this['review_severity'] = reviewSeverity;
    }
    public get reviewSeverity(): string | undefined {
        return this['review_severity'];
    }
    public withIsDefault(isDefault: boolean): DiscussionTemplateDto {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withCreatorId(creatorId: number): DiscussionTemplateDto {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withCreatedAt(createdAt: string): DiscussionTemplateDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DiscussionTemplateDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCreator(creator: UserBasicDto): DiscussionTemplateDto {
        this['creator'] = creator;
        return this;
    }
    public withAssignee(assignee: UserBasicDto): DiscussionTemplateDto {
        this['assignee'] = assignee;
        return this;
    }
}
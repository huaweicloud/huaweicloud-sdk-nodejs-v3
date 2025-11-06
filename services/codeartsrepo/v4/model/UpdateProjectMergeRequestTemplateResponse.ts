import { MergeRequestTemplateDto } from './MergeRequestTemplateDto';
import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateProjectMergeRequestTemplateResponse extends SdkResponse {
    public id?: number;
    private 'repository_id'?: number;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'template_name'?: string;
    private 'merge_request_title'?: string;
    private 'is_default'?: boolean;
    private 'is_wip'?: boolean;
    private 'auto_extract_mr_title'?: number;
    public creator?: UserBasicDto;
    private 'project_id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateProjectMergeRequestTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): UpdateProjectMergeRequestTemplateResponse {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withDescription(description: string): UpdateProjectMergeRequestTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): UpdateProjectMergeRequestTemplateResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): UpdateProjectMergeRequestTemplateResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withTemplateName(templateName: string): UpdateProjectMergeRequestTemplateResponse {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withMergeRequestTitle(mergeRequestTitle: string): UpdateProjectMergeRequestTemplateResponse {
        this['merge_request_title'] = mergeRequestTitle;
        return this;
    }
    public set mergeRequestTitle(mergeRequestTitle: string  | undefined) {
        this['merge_request_title'] = mergeRequestTitle;
    }
    public get mergeRequestTitle(): string | undefined {
        return this['merge_request_title'];
    }
    public withIsDefault(isDefault: boolean): UpdateProjectMergeRequestTemplateResponse {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withIsWip(isWip: boolean): UpdateProjectMergeRequestTemplateResponse {
        this['is_wip'] = isWip;
        return this;
    }
    public set isWip(isWip: boolean  | undefined) {
        this['is_wip'] = isWip;
    }
    public get isWip(): boolean | undefined {
        return this['is_wip'];
    }
    public withAutoExtractMrTitle(autoExtractMrTitle: number): UpdateProjectMergeRequestTemplateResponse {
        this['auto_extract_mr_title'] = autoExtractMrTitle;
        return this;
    }
    public set autoExtractMrTitle(autoExtractMrTitle: number  | undefined) {
        this['auto_extract_mr_title'] = autoExtractMrTitle;
    }
    public get autoExtractMrTitle(): number | undefined {
        return this['auto_extract_mr_title'];
    }
    public withCreator(creator: UserBasicDto): UpdateProjectMergeRequestTemplateResponse {
        this['creator'] = creator;
        return this;
    }
    public withProjectId(projectId: string): UpdateProjectMergeRequestTemplateResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}
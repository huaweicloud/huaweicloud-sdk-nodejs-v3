
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrrTemplateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'application_type'?: string;
    public description?: string;
    public creator?: string;
    private 'creator_name'?: string;
    private 'create_time'?: number;
    private 'last_update_time'?: number;
    private 'is_related_review'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ListPrrTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListPrrTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withApplicationType(applicationType: string): ListPrrTemplateResponse {
        this['application_type'] = applicationType;
        return this;
    }
    public set applicationType(applicationType: string  | undefined) {
        this['application_type'] = applicationType;
    }
    public get applicationType(): string | undefined {
        return this['application_type'];
    }
    public withDescription(description: string): ListPrrTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withCreator(creator: string): ListPrrTemplateResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreatorName(creatorName: string): ListPrrTemplateResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: number): ListPrrTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListPrrTemplateResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
    public withIsRelatedReview(isRelatedReview: boolean): ListPrrTemplateResponse {
        this['is_related_review'] = isRelatedReview;
        return this;
    }
    public set isRelatedReview(isRelatedReview: boolean  | undefined) {
        this['is_related_review'] = isRelatedReview;
    }
    public get isRelatedReview(): boolean | undefined {
        return this['is_related_review'];
    }
}
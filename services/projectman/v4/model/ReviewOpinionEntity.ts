import { UserEntity } from './UserEntity';


export class ReviewOpinionEntity {
    public category?: string;
    private 'co_id'?: string;
    private 'created_by'?: UserEntity;
    private 'created_date'?: string;
    private 'curr_owner'?: UserEntity;
    public id?: string;
    private 'modified_date'?: string;
    private 'review_comments'?: string;
    public constructor() { 
    }
    public withCategory(category: string): ReviewOpinionEntity {
        this['category'] = category;
        return this;
    }
    public withCoId(coId: string): ReviewOpinionEntity {
        this['co_id'] = coId;
        return this;
    }
    public set coId(coId: string  | undefined) {
        this['co_id'] = coId;
    }
    public get coId(): string | undefined {
        return this['co_id'];
    }
    public withCreatedBy(createdBy: UserEntity): ReviewOpinionEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserEntity  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserEntity | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): ReviewOpinionEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCurrOwner(currOwner: UserEntity): ReviewOpinionEntity {
        this['curr_owner'] = currOwner;
        return this;
    }
    public set currOwner(currOwner: UserEntity  | undefined) {
        this['curr_owner'] = currOwner;
    }
    public get currOwner(): UserEntity | undefined {
        return this['curr_owner'];
    }
    public withId(id: string): ReviewOpinionEntity {
        this['id'] = id;
        return this;
    }
    public withModifiedDate(modifiedDate: string): ReviewOpinionEntity {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withReviewComments(reviewComments: string): ReviewOpinionEntity {
        this['review_comments'] = reviewComments;
        return this;
    }
    public set reviewComments(reviewComments: string  | undefined) {
        this['review_comments'] = reviewComments;
    }
    public get reviewComments(): string | undefined {
        return this['review_comments'];
    }
}
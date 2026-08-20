import { UserEntity } from './UserEntity';


export class CcbEntity {
    private 'approval_time'?: string;
    public category?: CcbEntityCategoryEnum | string;
    public ccb2review?: string;
    private 'co_id'?: string;
    public id?: string;
    public owner?: UserEntity;
    private 'approval_comments'?: string;
    public constructor() { 
    }
    public withApprovalTime(approvalTime: string): CcbEntity {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: string  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): string | undefined {
        return this['approval_time'];
    }
    public withCategory(category: CcbEntityCategoryEnum | string): CcbEntity {
        this['category'] = category;
        return this;
    }
    public withCcb2review(ccb2review: string): CcbEntity {
        this['ccb2review'] = ccb2review;
        return this;
    }
    public withCoId(coId: string): CcbEntity {
        this['co_id'] = coId;
        return this;
    }
    public set coId(coId: string  | undefined) {
        this['co_id'] = coId;
    }
    public get coId(): string | undefined {
        return this['co_id'];
    }
    public withId(id: string): CcbEntity {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: UserEntity): CcbEntity {
        this['owner'] = owner;
        return this;
    }
    public withApprovalComments(approvalComments: string): CcbEntity {
        this['approval_comments'] = approvalComments;
        return this;
    }
    public set approvalComments(approvalComments: string  | undefined) {
        this['approval_comments'] = approvalComments;
    }
    public get approvalComments(): string | undefined {
        return this['approval_comments'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CcbEntityCategoryEnum {
    CCB = 'CCB'
}

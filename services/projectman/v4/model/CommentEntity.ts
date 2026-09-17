import { CommentExtendAttribute } from './CommentExtendAttribute';
import { UserVO } from './UserVO';


export class CommentEntity {
    public id?: string;
    public category?: string;
    public type?: string;
    public top?: boolean;
    private 'top_time'?: string;
    public description?: string;
    private 'issue_id'?: string;
    private 'top_flag'?: boolean;
    private 'created_by'?: string;
    private 'created_date'?: string;
    private 'creator_info'?: UserVO;
    private 'extend_attribute'?: string;
    private 'extend_attribute_obj'?: CommentExtendAttribute;
    private 'extend_attribute_objs'?: Array<CommentExtendAttribute>;
    public constructor() { 
    }
    public withId(id: string): CommentEntity {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): CommentEntity {
        this['category'] = category;
        return this;
    }
    public withType(type: string): CommentEntity {
        this['type'] = type;
        return this;
    }
    public withTop(top: boolean): CommentEntity {
        this['top'] = top;
        return this;
    }
    public withTopTime(topTime: string): CommentEntity {
        this['top_time'] = topTime;
        return this;
    }
    public set topTime(topTime: string  | undefined) {
        this['top_time'] = topTime;
    }
    public get topTime(): string | undefined {
        return this['top_time'];
    }
    public withDescription(description: string): CommentEntity {
        this['description'] = description;
        return this;
    }
    public withIssueId(issueId: string): CommentEntity {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withTopFlag(topFlag: boolean): CommentEntity {
        this['top_flag'] = topFlag;
        return this;
    }
    public set topFlag(topFlag: boolean  | undefined) {
        this['top_flag'] = topFlag;
    }
    public get topFlag(): boolean | undefined {
        return this['top_flag'];
    }
    public withCreatedBy(createdBy: string): CommentEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): CommentEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCreatorInfo(creatorInfo: UserVO): CommentEntity {
        this['creator_info'] = creatorInfo;
        return this;
    }
    public set creatorInfo(creatorInfo: UserVO  | undefined) {
        this['creator_info'] = creatorInfo;
    }
    public get creatorInfo(): UserVO | undefined {
        return this['creator_info'];
    }
    public withExtendAttribute(extendAttribute: string): CommentEntity {
        this['extend_attribute'] = extendAttribute;
        return this;
    }
    public set extendAttribute(extendAttribute: string  | undefined) {
        this['extend_attribute'] = extendAttribute;
    }
    public get extendAttribute(): string | undefined {
        return this['extend_attribute'];
    }
    public withExtendAttributeObj(extendAttributeObj: CommentExtendAttribute): CommentEntity {
        this['extend_attribute_obj'] = extendAttributeObj;
        return this;
    }
    public set extendAttributeObj(extendAttributeObj: CommentExtendAttribute  | undefined) {
        this['extend_attribute_obj'] = extendAttributeObj;
    }
    public get extendAttributeObj(): CommentExtendAttribute | undefined {
        return this['extend_attribute_obj'];
    }
    public withExtendAttributeObjs(extendAttributeObjs: Array<CommentExtendAttribute>): CommentEntity {
        this['extend_attribute_objs'] = extendAttributeObjs;
        return this;
    }
    public set extendAttributeObjs(extendAttributeObjs: Array<CommentExtendAttribute>  | undefined) {
        this['extend_attribute_objs'] = extendAttributeObjs;
    }
    public get extendAttributeObjs(): Array<CommentExtendAttribute> | undefined {
        return this['extend_attribute_objs'];
    }
}
import { CommentUserV4 } from './CommentUserV4';


export class IssueCommentV4 {
    public comment?: string;
    public id?: number;
    private 'created_time'?: string;
    public timestamp?: string;
    public user?: CommentUserV4;
    public constructor() { 
    }
    public withComment(comment: string): IssueCommentV4 {
        this['comment'] = comment;
        return this;
    }
    public withId(id: number): IssueCommentV4 {
        this['id'] = id;
        return this;
    }
    public withCreatedTime(createdTime: string): IssueCommentV4 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withTimestamp(timestamp: string): IssueCommentV4 {
        this['timestamp'] = timestamp;
        return this;
    }
    public withUser(user: CommentUserV4): IssueCommentV4 {
        this['user'] = user;
        return this;
    }
}
import { CommentEntity } from './CommentEntity';


export class CommentResult {
    public total?: number;
    private 'comment_list'?: Array<CommentEntity>;
    public constructor() { 
    }
    public withTotal(total: number): CommentResult {
        this['total'] = total;
        return this;
    }
    public withCommentList(commentList: Array<CommentEntity>): CommentResult {
        this['comment_list'] = commentList;
        return this;
    }
    public set commentList(commentList: Array<CommentEntity>  | undefined) {
        this['comment_list'] = commentList;
    }
    public get commentList(): Array<CommentEntity> | undefined {
        return this['comment_list'];
    }
}
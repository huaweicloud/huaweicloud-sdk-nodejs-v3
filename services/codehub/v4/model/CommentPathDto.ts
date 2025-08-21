import { LineDiscussionDto } from './LineDiscussionDto';


export class CommentPathDto {
    private 'new'?: Array<LineDiscussionDto>;
    public old?: Array<LineDiscussionDto>;
    public path?: string;
    public constructor() { 
    }
    public withNew(_new: Array<LineDiscussionDto>): CommentPathDto {
        this['new'] = _new;
        return this;
    }
    public set _new(_new: Array<LineDiscussionDto>  | undefined) {
        this['new'] = _new;
    }
    public get _new(): Array<LineDiscussionDto> | undefined {
        return this['new'];
    }
    public withOld(old: Array<LineDiscussionDto>): CommentPathDto {
        this['old'] = old;
        return this;
    }
    public withPath(path: string): CommentPathDto {
        this['path'] = path;
        return this;
    }
}
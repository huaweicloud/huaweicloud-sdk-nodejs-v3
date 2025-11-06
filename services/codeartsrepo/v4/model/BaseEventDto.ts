import { RepositoryEventAuthorDto } from './RepositoryEventAuthorDto';


export class BaseEventDto {
    private 'action_name'?: BaseEventDtoActionNameEnum | string;
    public author?: RepositoryEventAuthorDto;
    private 'author_id'?: number;
    private 'author_username'?: string;
    private 'created_at'?: string;
    private 'repository_id'?: number;
    private 'repository_name'?: string;
    public constructor() { 
    }
    public withActionName(actionName: BaseEventDtoActionNameEnum | string): BaseEventDto {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: BaseEventDtoActionNameEnum | string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): BaseEventDtoActionNameEnum | string | undefined {
        return this['action_name'];
    }
    public withAuthor(author: RepositoryEventAuthorDto): BaseEventDto {
        this['author'] = author;
        return this;
    }
    public withAuthorId(authorId: number): BaseEventDto {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withAuthorUsername(authorUsername: string): BaseEventDto {
        this['author_username'] = authorUsername;
        return this;
    }
    public set authorUsername(authorUsername: string  | undefined) {
        this['author_username'] = authorUsername;
    }
    public get authorUsername(): string | undefined {
        return this['author_username'];
    }
    public withCreatedAt(createdAt: string): BaseEventDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withRepositoryId(repositoryId: number): BaseEventDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): BaseEventDto {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseEventDtoActionNameEnum {
    PUSHED_TO = 'pushed to',
    PUSHED_NEW = 'pushed new',
    DELETED = 'deleted'
}

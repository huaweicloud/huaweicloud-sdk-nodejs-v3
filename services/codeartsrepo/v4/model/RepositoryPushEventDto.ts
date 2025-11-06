import { BaseEventDto } from './BaseEventDto';
import { PushEventPayloadDto } from './PushEventPayloadDto';
import { RepositoryEventAuthorDto } from './RepositoryEventAuthorDto';


export class RepositoryPushEventDto {
    private 'action_name'?: RepositoryPushEventDtoActionNameEnum | string;
    public author?: RepositoryEventAuthorDto;
    private 'author_id'?: number;
    private 'author_username'?: string;
    private 'created_at'?: string;
    private 'repository_id'?: number;
    private 'repository_name'?: string;
    private 'push_data'?: PushEventPayloadDto;
    public constructor() { 
    }
    public withActionName(actionName: RepositoryPushEventDtoActionNameEnum | string): RepositoryPushEventDto {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: RepositoryPushEventDtoActionNameEnum | string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): RepositoryPushEventDtoActionNameEnum | string | undefined {
        return this['action_name'];
    }
    public withAuthor(author: RepositoryEventAuthorDto): RepositoryPushEventDto {
        this['author'] = author;
        return this;
    }
    public withAuthorId(authorId: number): RepositoryPushEventDto {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withAuthorUsername(authorUsername: string): RepositoryPushEventDto {
        this['author_username'] = authorUsername;
        return this;
    }
    public set authorUsername(authorUsername: string  | undefined) {
        this['author_username'] = authorUsername;
    }
    public get authorUsername(): string | undefined {
        return this['author_username'];
    }
    public withCreatedAt(createdAt: string): RepositoryPushEventDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withRepositoryId(repositoryId: number): RepositoryPushEventDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withRepositoryName(repositoryName: string): RepositoryPushEventDto {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withPushData(pushData: PushEventPayloadDto): RepositoryPushEventDto {
        this['push_data'] = pushData;
        return this;
    }
    public set pushData(pushData: PushEventPayloadDto  | undefined) {
        this['push_data'] = pushData;
    }
    public get pushData(): PushEventPayloadDto | undefined {
        return this['push_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryPushEventDtoActionNameEnum {
    PUSHED_TO = 'pushed to',
    PUSHED_NEW = 'pushed new',
    DELETED = 'deleted'
}

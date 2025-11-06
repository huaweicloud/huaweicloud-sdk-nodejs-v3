import { PersonalEventAuthorDto } from './PersonalEventAuthorDto';
import { PushEventPayloadDto } from './PushEventPayloadDto';
import { RepositorySimpleDto } from './RepositorySimpleDto';


export class PersonalPushEventDto {
    public author?: PersonalEventAuthorDto;
    public repository?: RepositorySimpleDto;
    private 'push_data'?: PushEventPayloadDto;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withAuthor(author: PersonalEventAuthorDto): PersonalPushEventDto {
        this['author'] = author;
        return this;
    }
    public withRepository(repository: RepositorySimpleDto): PersonalPushEventDto {
        this['repository'] = repository;
        return this;
    }
    public withPushData(pushData: PushEventPayloadDto): PersonalPushEventDto {
        this['push_data'] = pushData;
        return this;
    }
    public set pushData(pushData: PushEventPayloadDto  | undefined) {
        this['push_data'] = pushData;
    }
    public get pushData(): PushEventPayloadDto | undefined {
        return this['push_data'];
    }
    public withCreatedAt(createdAt: string): PersonalPushEventDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}
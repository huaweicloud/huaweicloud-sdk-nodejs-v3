import { RepositoryBriefDto } from './RepositoryBriefDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLastPushEventInRepositoryResponse extends SdkResponse {
    public ref?: string;
    private 'created_at'?: string;
    public repository?: RepositoryBriefDto;
    public constructor() { 
        super();
    }
    public withRef(ref: string): ShowLastPushEventInRepositoryResponse {
        this['ref'] = ref;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowLastPushEventInRepositoryResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withRepository(repository: RepositoryBriefDto): ShowLastPushEventInRepositoryResponse {
        this['repository'] = repository;
        return this;
    }
}
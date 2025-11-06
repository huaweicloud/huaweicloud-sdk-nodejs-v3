import { RepositoryMemberList } from './RepositoryMemberList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepoMembersResponse extends SdkResponse {
    public error?: Error;
    public result?: RepositoryMemberList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListRepoMembersResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepositoryMemberList): ListRepoMembersResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListRepoMembersResponse {
        this['status'] = status;
        return this;
    }
}
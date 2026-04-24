import { SubscribeAiAssistantListResponseProject } from './SubscribeAiAssistantListResponseProject';
import { SubscribeUserGroupInfo } from './SubscribeUserGroupInfo';
import { SubscribeUserInfo } from './SubscribeUserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscribeAiAssistantUsersResponse extends SdkResponse {
    private 'total_count'?: number;
    public users?: Array<SubscribeUserInfo>;
    public usergroups?: Array<SubscribeUserGroupInfo>;
    public project?: SubscribeAiAssistantListResponseProject;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListSubscribeAiAssistantUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUsers(users: Array<SubscribeUserInfo>): ListSubscribeAiAssistantUsersResponse {
        this['users'] = users;
        return this;
    }
    public withUsergroups(usergroups: Array<SubscribeUserGroupInfo>): ListSubscribeAiAssistantUsersResponse {
        this['usergroups'] = usergroups;
        return this;
    }
    public withProject(project: SubscribeAiAssistantListResponseProject): ListSubscribeAiAssistantUsersResponse {
        this['project'] = project;
        return this;
    }
}
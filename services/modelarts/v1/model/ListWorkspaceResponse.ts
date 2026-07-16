import { WorkspaceResponse } from './WorkspaceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkspaceResponse extends SdkResponse {
    private 'total_count'?: number;
    public count?: number;
    public workspaces?: Array<WorkspaceResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListWorkspaceResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withCount(count: number): ListWorkspaceResponse {
        this['count'] = count;
        return this;
    }
    public withWorkspaces(workspaces: Array<WorkspaceResponse>): ListWorkspaceResponse {
        this['workspaces'] = workspaces;
        return this;
    }
}
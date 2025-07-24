import { ExternalBranchInfoVo } from './ExternalBranchInfoVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBranchesResponse extends SdkResponse {
    public total?: number;
    private 'project_id'?: string;
    public values?: Array<ExternalBranchInfoVo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListBranchesResponse {
        this['total'] = total;
        return this;
    }
    public withProjectId(projectId: string): ListBranchesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withValues(values: Array<ExternalBranchInfoVo>): ListBranchesResponse {
        this['values'] = values;
        return this;
    }
}
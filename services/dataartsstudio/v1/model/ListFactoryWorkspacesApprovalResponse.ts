import { ListFactoryWorkspacesApprovalRespJobApplySearchList } from './ListFactoryWorkspacesApprovalRespJobApplySearchList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFactoryWorkspacesApprovalResponse extends SdkResponse {
    private 'job_apply_search_list'?: Array<ListFactoryWorkspacesApprovalRespJobApplySearchList>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withJobApplySearchList(jobApplySearchList: Array<ListFactoryWorkspacesApprovalRespJobApplySearchList>): ListFactoryWorkspacesApprovalResponse {
        this['job_apply_search_list'] = jobApplySearchList;
        return this;
    }
    public set jobApplySearchList(jobApplySearchList: Array<ListFactoryWorkspacesApprovalRespJobApplySearchList>  | undefined) {
        this['job_apply_search_list'] = jobApplySearchList;
    }
    public get jobApplySearchList(): Array<ListFactoryWorkspacesApprovalRespJobApplySearchList> | undefined {
        return this['job_apply_search_list'];
    }
    public withTotal(total: number): ListFactoryWorkspacesApprovalResponse {
        this['total'] = total;
        return this;
    }
}
import { RetrievalResultInfo } from './RetrievalResultInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchKnowledgeBaseResponse extends SdkResponse {
    public total?: number;
    private 'retrieve_result_list'?: Array<RetrievalResultInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchKnowledgeBaseResponse {
        this['total'] = total;
        return this;
    }
    public withRetrieveResultList(retrieveResultList: Array<RetrievalResultInfo>): SearchKnowledgeBaseResponse {
        this['retrieve_result_list'] = retrieveResultList;
        return this;
    }
    public set retrieveResultList(retrieveResultList: Array<RetrievalResultInfo>  | undefined) {
        this['retrieve_result_list'] = retrieveResultList;
    }
    public get retrieveResultList(): Array<RetrievalResultInfo> | undefined {
        return this['retrieve_result_list'];
    }
}
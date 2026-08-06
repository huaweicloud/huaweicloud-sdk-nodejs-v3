import { ListAccessPointResponseBodyPageInfo } from './ListAccessPointResponseBodyPageInfo';
import { ListKeyPolicyResponseBodyKeyspacePolicies } from './ListKeyPolicyResponseBodyKeyspacePolicies';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeyPolicyResponse extends SdkResponse {
    private 'page_info'?: ListAccessPointResponseBodyPageInfo;
    private 'keyspace_policies'?: Array<ListKeyPolicyResponseBodyKeyspacePolicies>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: ListAccessPointResponseBodyPageInfo): ListKeyPolicyResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListAccessPointResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListAccessPointResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withKeyspacePolicies(keyspacePolicies: Array<ListKeyPolicyResponseBodyKeyspacePolicies>): ListKeyPolicyResponse {
        this['keyspace_policies'] = keyspacePolicies;
        return this;
    }
    public set keyspacePolicies(keyspacePolicies: Array<ListKeyPolicyResponseBodyKeyspacePolicies>  | undefined) {
        this['keyspace_policies'] = keyspacePolicies;
    }
    public get keyspacePolicies(): Array<ListKeyPolicyResponseBodyKeyspacePolicies> | undefined {
        return this['keyspace_policies'];
    }
}
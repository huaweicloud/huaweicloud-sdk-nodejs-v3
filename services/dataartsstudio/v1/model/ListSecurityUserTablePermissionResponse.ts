import { SecurityListUserTableListProposer } from './SecurityListUserTableListProposer';
import { SecurityListUserTableListTableList } from './SecurityListUserTableListTableList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityUserTablePermissionResponse extends SdkResponse {
    private 'table_list'?: Array<SecurityListUserTableListTableList>;
    public proposer?: SecurityListUserTableListProposer;
    public constructor() { 
        super();
    }
    public withTableList(tableList: Array<SecurityListUserTableListTableList>): ListSecurityUserTablePermissionResponse {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<SecurityListUserTableListTableList>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<SecurityListUserTableListTableList> | undefined {
        return this['table_list'];
    }
    public withProposer(proposer: SecurityListUserTableListProposer): ListSecurityUserTablePermissionResponse {
        this['proposer'] = proposer;
        return this;
    }
}
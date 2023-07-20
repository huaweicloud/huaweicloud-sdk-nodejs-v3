import { GetHostGroupListFilter } from './GetHostGroupListFilter';


export class GetHostGroupListRequestBody {
    private 'host_group_id_list'?: Array<string>;
    public filter?: GetHostGroupListFilter;
    public constructor(filter?: GetHostGroupListFilter) { 
        this['filter'] = filter;
    }
    public withHostGroupIdList(hostGroupIdList: Array<string>): GetHostGroupListRequestBody {
        this['host_group_id_list'] = hostGroupIdList;
        return this;
    }
    public set hostGroupIdList(hostGroupIdList: Array<string>  | undefined) {
        this['host_group_id_list'] = hostGroupIdList;
    }
    public get hostGroupIdList(): Array<string> | undefined {
        return this['host_group_id_list'];
    }
    public withFilter(filter: GetHostGroupListFilter): GetHostGroupListRequestBody {
        this['filter'] = filter;
        return this;
    }
}
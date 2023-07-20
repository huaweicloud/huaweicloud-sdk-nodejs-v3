import { GetHostListFilter } from './GetHostListFilter';


export class GetHostListRequestBody {
    private 'host_id_list'?: Array<string>;
    public filter?: GetHostListFilter;
    public constructor(filter?: GetHostListFilter) { 
        this['filter'] = filter;
    }
    public withHostIdList(hostIdList: Array<string>): GetHostListRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withFilter(filter: GetHostListFilter): GetHostListRequestBody {
        this['filter'] = filter;
        return this;
    }
}
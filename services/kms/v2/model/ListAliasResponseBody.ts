import { AliasEntity } from './AliasEntity';
import { PageInfo } from './PageInfo';


export class ListAliasResponseBody {
    public aliases?: Array<AliasEntity>;
    private 'page_info'?: PageInfo;
    public constructor(aliases?: Array<AliasEntity>, pageInfo?: PageInfo) { 
        this['aliases'] = aliases;
        this['page_info'] = pageInfo;
    }
    public withAliases(aliases: Array<AliasEntity>): ListAliasResponseBody {
        this['aliases'] = aliases;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAliasResponseBody {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}
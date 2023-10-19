import { PageInfo } from './PageInfo';
import { RequestId } from './RequestId';


export class ListResponseBody {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor(requestId?: string) { 
        this['request_id'] = requestId;
    }
    public withRequestId(requestId: string): ListResponseBody {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResponseBody {
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
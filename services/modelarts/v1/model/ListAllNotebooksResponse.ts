import { NotebookResp } from './NotebookResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllNotebooksResponse extends SdkResponse {
    public current?: number;
    public data?: Array<NotebookResp>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListAllNotebooksResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<NotebookResp>): ListAllNotebooksResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListAllNotebooksResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListAllNotebooksResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAllNotebooksResponse {
        this['total'] = total;
        return this;
    }
}
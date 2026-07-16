import { NotebookResp } from './NotebookResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotebooksResponse extends SdkResponse {
    public current?: number;
    public data?: Array<NotebookResp>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListNotebooksResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<NotebookResp>): ListNotebooksResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListNotebooksResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListNotebooksResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListNotebooksResponse {
        this['total'] = total;
        return this;
    }
}
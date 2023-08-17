import { TemplateView } from './TemplateView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public total?: number;
    private 'page_number'?: number;
    private 'page_size'?: number;
    public content?: Array<TemplateView>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTemplatesResponse {
        this['total'] = total;
        return this;
    }
    public withPageNumber(pageNumber: number): ListTemplatesResponse {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withPageSize(pageSize: number): ListTemplatesResponse {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withContent(content: Array<TemplateView>): ListTemplatesResponse {
        this['content'] = content;
        return this;
    }
}
import { NotebookFlavor } from './NotebookFlavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<NotebookFlavor>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public flavors?: Array<NotebookFlavor>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListFlavorsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<NotebookFlavor>): ListFlavorsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListFlavorsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListFlavorsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListFlavorsResponse {
        this['total'] = total;
        return this;
    }
    public withFlavors(flavors: Array<NotebookFlavor>): ListFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}
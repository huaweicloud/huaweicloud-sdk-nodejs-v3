import { NotebookFlavor } from './NotebookFlavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSwitchableFlavorsResponse extends SdkResponse {
    public current?: number;
    public data?: Array<NotebookFlavor>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public flavors?: Array<NotebookFlavor>;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ShowSwitchableFlavorsResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<NotebookFlavor>): ShowSwitchableFlavorsResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ShowSwitchableFlavorsResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ShowSwitchableFlavorsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ShowSwitchableFlavorsResponse {
        this['total'] = total;
        return this;
    }
    public withFlavors(flavors: Array<NotebookFlavor>): ShowSwitchableFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}
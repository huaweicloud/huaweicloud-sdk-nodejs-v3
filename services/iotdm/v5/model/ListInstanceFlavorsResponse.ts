import { InstanceFlavor } from './InstanceFlavor';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceFlavorsResponse extends SdkResponse {
    public page?: Page;
    public flavors?: Array<InstanceFlavor>;
    public constructor() { 
        super();
    }
    public withPage(page: Page): ListInstanceFlavorsResponse {
        this['page'] = page;
        return this;
    }
    public withFlavors(flavors: Array<InstanceFlavor>): ListInstanceFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}
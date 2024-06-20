import { DeviceAuthorizerSimple } from './DeviceAuthorizerSimple';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDeviceAuthorizersResponse extends SdkResponse {
    public authorizers?: Array<DeviceAuthorizerSimple>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withAuthorizers(authorizers: Array<DeviceAuthorizerSimple>): ListDeviceAuthorizersResponse {
        this['authorizers'] = authorizers;
        return this;
    }
    public withPage(page: Page): ListDeviceAuthorizersResponse {
        this['page'] = page;
        return this;
    }
}
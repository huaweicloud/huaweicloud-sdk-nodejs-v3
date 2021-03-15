import { AsyncDeviceCommand } from './AsyncDeviceCommand';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncHistoryCommandsResponse extends SdkResponse {
    public commands?: Array<AsyncDeviceCommand>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withCommands(commands: Array<AsyncDeviceCommand>): ListAsyncHistoryCommandsResponse {
        this['commands'] = commands;
        return this;
    }
    public withPage(page: Page): ListAsyncHistoryCommandsResponse {
        this['page'] = page;
        return this;
    }
}
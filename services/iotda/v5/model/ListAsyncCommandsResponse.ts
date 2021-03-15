import { AsyncDeviceCommand } from './AsyncDeviceCommand';
import { Page } from './Page';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncCommandsResponse extends SdkResponse {
    public commands?: Array<AsyncDeviceCommand>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withCommands(commands: Array<AsyncDeviceCommand>): ListAsyncCommandsResponse {
        this['commands'] = commands;
        return this;
    }
    public withPage(page: Page): ListAsyncCommandsResponse {
        this['page'] = page;
        return this;
    }
}
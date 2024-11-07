import { AsyncDeviceListCommand } from './AsyncDeviceListCommand';
import { QueueCommandPage } from './QueueCommandPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncCommandsResponse extends SdkResponse {
    public commands?: Array<AsyncDeviceListCommand>;
    public page?: QueueCommandPage;
    public constructor() { 
        super();
    }
    public withCommands(commands: Array<AsyncDeviceListCommand>): ListAsyncCommandsResponse {
        this['commands'] = commands;
        return this;
    }
    public withPage(page: QueueCommandPage): ListAsyncCommandsResponse {
        this['page'] = page;
        return this;
    }
}
import { AsyncDeviceListCommand } from './AsyncDeviceListCommand';
import { HistoryCommandPage } from './HistoryCommandPage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAsyncHistoryCommandsResponse extends SdkResponse {
    public commands?: Array<AsyncDeviceListCommand>;
    public page?: HistoryCommandPage;
    public constructor() { 
        super();
    }
    public withCommands(commands: Array<AsyncDeviceListCommand>): ListAsyncHistoryCommandsResponse {
        this['commands'] = commands;
        return this;
    }
    public withPage(page: HistoryCommandPage): ListAsyncHistoryCommandsResponse {
        this['page'] = page;
        return this;
    }
}
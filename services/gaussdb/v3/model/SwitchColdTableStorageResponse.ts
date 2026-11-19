import { FailedItem } from './FailedItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchColdTableStorageResponse extends SdkResponse {
    public result?: string;
    private 'failed_items'?: Array<FailedItem>;
    public constructor() { 
        super();
    }
    public withResult(result: string): SwitchColdTableStorageResponse {
        this['result'] = result;
        return this;
    }
    public withFailedItems(failedItems: Array<FailedItem>): SwitchColdTableStorageResponse {
        this['failed_items'] = failedItems;
        return this;
    }
    public set failedItems(failedItems: Array<FailedItem>  | undefined) {
        this['failed_items'] = failedItems;
    }
    public get failedItems(): Array<FailedItem> | undefined {
        return this['failed_items'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncStatusResponse extends SdkResponse {
    private 'is_synchronizing'?: boolean;
    public constructor() { 
        super();
    }
    public withIsSynchronizing(isSynchronizing: boolean): ListSyncStatusResponse {
        this['is_synchronizing'] = isSynchronizing;
        return this;
    }
    public set isSynchronizing(isSynchronizing: boolean  | undefined) {
        this['is_synchronizing'] = isSynchronizing;
    }
    public get isSynchronizing(): boolean | undefined {
        return this['is_synchronizing'];
    }
}
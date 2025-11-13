
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncRequirementsResponse extends SdkResponse {
    private 'is_synchronous'?: boolean;
    public constructor() { 
        super();
    }
    public withIsSynchronous(isSynchronous: boolean): ListSyncRequirementsResponse {
        this['is_synchronous'] = isSynchronous;
        return this;
    }
    public set isSynchronous(isSynchronous: boolean  | undefined) {
        this['is_synchronous'] = isSynchronous;
    }
    public get isSynchronous(): boolean | undefined {
        return this['is_synchronous'];
    }
}
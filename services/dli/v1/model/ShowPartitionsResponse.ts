import { Partitions } from './Partitions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPartitionsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public partitions?: Partitions;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowPartitionsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowPartitionsResponse {
        this['message'] = message;
        return this;
    }
    public withPartitions(partitions: Partitions): ShowPartitionsResponse {
        this['partitions'] = partitions;
        return this;
    }
}
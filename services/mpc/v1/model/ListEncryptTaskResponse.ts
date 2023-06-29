import { EachEncryptRsp } from './EachEncryptRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEncryptTaskResponse extends SdkResponse {
    private 'task_array'?: Array<EachEncryptRsp> | undefined;
    private 'is_truncated'?: number | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withTaskArray(taskArray: Array<EachEncryptRsp>): ListEncryptTaskResponse {
        this['task_array'] = taskArray;
        return this;
    }
    public set taskArray(taskArray: Array<EachEncryptRsp> | undefined) {
        this['task_array'] = taskArray;
    }
    public get taskArray() {
        return this['task_array'];
    }
    public withIsTruncated(isTruncated: number): ListEncryptTaskResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated() {
        return this['is_truncated'];
    }
    public withTotal(total: number): ListEncryptTaskResponse {
        this['total'] = total;
        return this;
    }
}
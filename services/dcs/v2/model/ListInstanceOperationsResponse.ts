import { Operations } from './Operations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceOperationsResponse extends SdkResponse {
    private 'instance_id'?: string;
    public operations?: Array<Operations>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ListInstanceOperationsResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOperations(operations: Array<Operations>): ListInstanceOperationsResponse {
        this['operations'] = operations;
        return this;
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAdhocQueryResponse extends SdkResponse {
    private 'operate_id'?: string;
    public constructor() { 
        super();
    }
    public withOperateId(operateId: string): CreateAdhocQueryResponse {
        this['operate_id'] = operateId;
        return this;
    }
    public set operateId(operateId: string  | undefined) {
        this['operate_id'] = operateId;
    }
    public get operateId(): string | undefined {
        return this['operate_id'];
    }
}
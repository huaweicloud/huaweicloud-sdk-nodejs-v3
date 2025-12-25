
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSearchConditionResponse extends SdkResponse {
    private 'condition_id'?: string;
    public constructor() { 
        super();
    }
    public withConditionId(conditionId: string): CreateSearchConditionResponse {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
}
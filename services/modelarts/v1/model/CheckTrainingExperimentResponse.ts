
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckTrainingExperimentResponse extends SdkResponse {
    private 'is_duplicate'?: boolean;
    public constructor() { 
        super();
    }
    public withIsDuplicate(isDuplicate: boolean): CheckTrainingExperimentResponse {
        this['is_duplicate'] = isDuplicate;
        return this;
    }
    public set isDuplicate(isDuplicate: boolean  | undefined) {
        this['is_duplicate'] = isDuplicate;
    }
    public get isDuplicate(): boolean | undefined {
        return this['is_duplicate'];
    }
}
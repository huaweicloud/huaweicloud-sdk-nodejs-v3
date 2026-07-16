
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeTrainingExperimentResponse extends SdkResponse {
    public name?: string;
    public description?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ChangeTrainingExperimentResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ChangeTrainingExperimentResponse {
        this['description'] = description;
        return this;
    }
}
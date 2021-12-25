
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartPipelineResponse extends SdkResponse {
    public id?: string;
    public result?: StartPipelineResponseResultEnum;
    public constructor() { 
        super();
    }
    public withId(id: string): StartPipelineResponse {
        this['id'] = id;
        return this;
    }
    public withResult(result: StartPipelineResponseResultEnum): StartPipelineResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StartPipelineResponseResultEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}

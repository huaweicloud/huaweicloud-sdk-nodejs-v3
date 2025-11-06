import { PipelineDetailDto } from './PipelineDetailDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowActualHeadPipelineResponse extends SdkResponse {
    public data?: PipelineDetailDto;
    private 'is_valid'?: boolean;
    public constructor() { 
        super();
    }
    public withData(data: PipelineDetailDto): ShowActualHeadPipelineResponse {
        this['data'] = data;
        return this;
    }
    public withIsValid(isValid: boolean): ShowActualHeadPipelineResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
}
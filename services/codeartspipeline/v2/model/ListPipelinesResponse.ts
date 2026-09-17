import { ListPipelinesPageHighestConfidentiality } from './ListPipelinesPageHighestConfidentiality';
import { ListPipelinesPagePipelines } from './ListPipelinesPagePipelines';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPipelinesResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    private 'current_system_time'?: number;
    private 'highest_confidentiality'?: ListPipelinesPageHighestConfidentiality;
    private 'number_of_hidden_data'?: number;
    public pipelines?: Array<ListPipelinesPagePipelines>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPipelinesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelinesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPipelinesResponse {
        this['total'] = total;
        return this;
    }
    public withCurrentSystemTime(currentSystemTime: number): ListPipelinesResponse {
        this['current_system_time'] = currentSystemTime;
        return this;
    }
    public set currentSystemTime(currentSystemTime: number  | undefined) {
        this['current_system_time'] = currentSystemTime;
    }
    public get currentSystemTime(): number | undefined {
        return this['current_system_time'];
    }
    public withHighestConfidentiality(highestConfidentiality: ListPipelinesPageHighestConfidentiality): ListPipelinesResponse {
        this['highest_confidentiality'] = highestConfidentiality;
        return this;
    }
    public set highestConfidentiality(highestConfidentiality: ListPipelinesPageHighestConfidentiality  | undefined) {
        this['highest_confidentiality'] = highestConfidentiality;
    }
    public get highestConfidentiality(): ListPipelinesPageHighestConfidentiality | undefined {
        return this['highest_confidentiality'];
    }
    public withNumberOfHiddenData(numberOfHiddenData: number): ListPipelinesResponse {
        this['number_of_hidden_data'] = numberOfHiddenData;
        return this;
    }
    public set numberOfHiddenData(numberOfHiddenData: number  | undefined) {
        this['number_of_hidden_data'] = numberOfHiddenData;
    }
    public get numberOfHiddenData(): number | undefined {
        return this['number_of_hidden_data'];
    }
    public withPipelines(pipelines: Array<ListPipelinesPagePipelines>): ListPipelinesResponse {
        this['pipelines'] = pipelines;
        return this;
    }
}
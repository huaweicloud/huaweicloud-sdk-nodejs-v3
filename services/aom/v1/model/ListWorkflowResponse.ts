import { Workflow } from './Workflow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkflowResponse extends SdkResponse {
    public elements?: Array<Workflow>;
    private 'total_elements'?: number;
    public constructor() { 
        super();
    }
    public withElements(elements: Array<Workflow>): ListWorkflowResponse {
        this['elements'] = elements;
        return this;
    }
    public withTotalElements(totalElements: number): ListWorkflowResponse {
        this['total_elements'] = totalElements;
        return this;
    }
    public set totalElements(totalElements: number  | undefined) {
        this['total_elements'] = totalElements;
    }
    public get totalElements(): number | undefined {
        return this['total_elements'];
    }
}
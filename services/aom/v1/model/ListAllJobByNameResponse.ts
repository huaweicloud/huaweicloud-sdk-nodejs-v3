import { Job } from './Job';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllJobByNameResponse extends SdkResponse {
    private 'total_elements'?: number;
    public elements?: Array<Job>;
    public constructor() { 
        super();
    }
    public withTotalElements(totalElements: number): ListAllJobByNameResponse {
        this['total_elements'] = totalElements;
        return this;
    }
    public set totalElements(totalElements: number  | undefined) {
        this['total_elements'] = totalElements;
    }
    public get totalElements(): number | undefined {
        return this['total_elements'];
    }
    public withElements(elements: Array<Job>): ListAllJobByNameResponse {
        this['elements'] = elements;
        return this;
    }
}
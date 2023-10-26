import { Template } from './Template';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateByJobIdResponse extends SdkResponse {
    private 'total_elements'?: number;
    public elements?: Array<Template>;
    public constructor() { 
        super();
    }
    public withTotalElements(totalElements: number): ListTemplateByJobIdResponse {
        this['total_elements'] = totalElements;
        return this;
    }
    public set totalElements(totalElements: number  | undefined) {
        this['total_elements'] = totalElements;
    }
    public get totalElements(): number | undefined {
        return this['total_elements'];
    }
    public withElements(elements: Array<Template>): ListTemplateByJobIdResponse {
        this['elements'] = elements;
        return this;
    }
}
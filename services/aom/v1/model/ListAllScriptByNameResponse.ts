import { Script } from './Script';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllScriptByNameResponse extends SdkResponse {
    public elements?: Array<Script>;
    private 'total_elements'?: number;
    public constructor() { 
        super();
    }
    public withElements(elements: Array<Script>): ListAllScriptByNameResponse {
        this['elements'] = elements;
        return this;
    }
    public withTotalElements(totalElements: number): ListAllScriptByNameResponse {
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
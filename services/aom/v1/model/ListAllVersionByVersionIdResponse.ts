import { ScriptVersion } from './ScriptVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllVersionByVersionIdResponse extends SdkResponse {
    public elements?: Array<ScriptVersion>;
    private 'total_elements'?: number;
    public constructor() { 
        super();
    }
    public withElements(elements: Array<ScriptVersion>): ListAllVersionByVersionIdResponse {
        this['elements'] = elements;
        return this;
    }
    public withTotalElements(totalElements: number): ListAllVersionByVersionIdResponse {
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
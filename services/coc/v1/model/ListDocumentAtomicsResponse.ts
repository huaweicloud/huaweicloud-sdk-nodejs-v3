import { AtomicModel } from './AtomicModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDocumentAtomicsResponse extends SdkResponse {
    public data?: Array<AtomicModel>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<AtomicModel>): ListDocumentAtomicsResponse {
        this['data'] = data;
        return this;
    }
    public withTotal(total: number): ListDocumentAtomicsResponse {
        this['total'] = total;
        return this;
    }
}
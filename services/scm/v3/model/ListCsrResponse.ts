import { CSRResponseBody } from './CSRResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCsrResponse extends SdkResponse {
    private 'csr_list'?: Array<CSRResponseBody>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCsrList(csrList: Array<CSRResponseBody>): ListCsrResponse {
        this['csr_list'] = csrList;
        return this;
    }
    public set csrList(csrList: Array<CSRResponseBody>  | undefined) {
        this['csr_list'] = csrList;
    }
    public get csrList(): Array<CSRResponseBody> | undefined {
        return this['csr_list'];
    }
    public withTotal(total: number): ListCsrResponse {
        this['total'] = total;
        return this;
    }
}
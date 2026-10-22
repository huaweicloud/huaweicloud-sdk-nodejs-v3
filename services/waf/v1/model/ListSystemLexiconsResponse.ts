import { SystemLexiconItem } from './SystemLexiconItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSystemLexiconsResponse extends SdkResponse {
    public total?: number;
    public items?: Array<SystemLexiconItem>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSystemLexiconsResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<SystemLexiconItem>): ListSystemLexiconsResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListSystemLexiconsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}
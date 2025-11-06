
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFilesResponse extends SdkResponse {
    public body?: Array<string>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ListFilesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListFilesResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceInfosResponse extends SdkResponse {
    private 'status_code'?: number;
    public body?: string;
    private 'header_map'?: object;
    public constructor() { 
        super();
    }
    public withStatusCode(statusCode: number): ShowInstanceInfosResponse {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
    public withBody(body: string): ShowInstanceInfosResponse {
        this['body'] = body;
        return this;
    }
    public withHeaderMap(headerMap: object): ShowInstanceInfosResponse {
        this['header_map'] = headerMap;
        return this;
    }
    public set headerMap(headerMap: object  | undefined) {
        this['header_map'] = headerMap;
    }
    public get headerMap(): object | undefined {
        return this['header_map'];
    }
}
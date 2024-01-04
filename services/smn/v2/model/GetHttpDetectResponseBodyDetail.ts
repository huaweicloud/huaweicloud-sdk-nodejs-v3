

export class GetHttpDetectResponseBodyDetail {
    public httpCode?: number;
    public httpResponse?: string;
    public constructor(httpCode?: number, httpResponse?: string) { 
        this['httpCode'] = httpCode;
        this['httpResponse'] = httpResponse;
    }
    public withHttpCode(httpCode: number): GetHttpDetectResponseBodyDetail {
        this['httpCode'] = httpCode;
        return this;
    }
    public withHttpResponse(httpResponse: string): GetHttpDetectResponseBodyDetail {
        this['httpResponse'] = httpResponse;
        return this;
    }
}
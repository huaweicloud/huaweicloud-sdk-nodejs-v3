

export class ListCasesStatusRequest {
    public testServiceId?: string;
    public body?: string;
    public constructor(testServiceId?: string) { 
        this['testServiceId'] = testServiceId;
    }
    public withTestServiceId(testServiceId: string): ListCasesStatusRequest {
        this['testServiceId'] = testServiceId;
        return this;
    }
    public withBody(body: string): ListCasesStatusRequest {
        this['body'] = body;
        return this;
    }
}
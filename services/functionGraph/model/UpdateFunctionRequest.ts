import { UpdateFunctionRequestBody } from './UpdateFunctionRequestBody'

export class UpdateFunctionRequest {
    public func_urn?: string;
    public body?: UpdateFunctionRequestBody;
    public constructor(func_urn?: string, body?: UpdateFunctionRequestBody) {
        this['func_urn'] = func_urn;
    }
    public withFunctionUrn(func_urn: string): UpdateFunctionRequest {
        this['func_urn'] = func_urn;
        return this;
    }
    public withBody(body: UpdateFunctionRequestBody): UpdateFunctionRequest {
        this['body'] = body;
        return this;
    }
}
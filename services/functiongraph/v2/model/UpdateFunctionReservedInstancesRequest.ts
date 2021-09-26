import { UpdateFunctionReservedInstancesRequestBody } from './UpdateFunctionReservedInstancesRequestBody';


export class UpdateFunctionReservedInstancesRequest {
    private 'function_urn': string | undefined;
    public body?: UpdateFunctionReservedInstancesRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionReservedInstancesRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionReservedInstancesRequestBody): UpdateFunctionReservedInstancesRequest {
        this['body'] = body;
        return this;
    }
}
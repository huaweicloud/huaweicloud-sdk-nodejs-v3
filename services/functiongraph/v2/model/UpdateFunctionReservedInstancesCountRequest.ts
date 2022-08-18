import { UpdateFunctionReservedInstancesCountRequestBody } from './UpdateFunctionReservedInstancesCountRequestBody';


export class UpdateFunctionReservedInstancesCountRequest {
    private 'function_urn': string | undefined;
    public body?: UpdateFunctionReservedInstancesCountRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionReservedInstancesCountRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionReservedInstancesCountRequestBody): UpdateFunctionReservedInstancesCountRequest {
        this['body'] = body;
        return this;
    }
}
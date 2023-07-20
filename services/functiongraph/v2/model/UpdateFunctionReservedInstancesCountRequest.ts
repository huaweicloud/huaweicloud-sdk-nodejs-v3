import { UpdateFunctionReservedInstancesCountRequestBody } from './UpdateFunctionReservedInstancesCountRequestBody';


export class UpdateFunctionReservedInstancesCountRequest {
    private 'function_urn'?: string;
    public body?: UpdateFunctionReservedInstancesCountRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionReservedInstancesCountRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionReservedInstancesCountRequestBody): UpdateFunctionReservedInstancesCountRequest {
        this['body'] = body;
        return this;
    }
}
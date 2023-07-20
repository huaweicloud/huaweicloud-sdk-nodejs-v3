import { CommonCreateTaskReq } from './CommonCreateTaskReq';
import { ObsObjInfo } from './ObsObjInfo';
import { RemuxOutputParam } from './RemuxOutputParam';


export class CreateRemuxTaskReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string;
    private 'output_param'?: RemuxOutputParam;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateRemuxTaskReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateRemuxTaskReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CreateRemuxTaskReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withOutputParam(outputParam: RemuxOutputParam): CreateRemuxTaskReq {
        this['output_param'] = outputParam;
        return this;
    }
    public set outputParam(outputParam: RemuxOutputParam  | undefined) {
        this['output_param'] = outputParam;
    }
    public get outputParam(): RemuxOutputParam | undefined {
        return this['output_param'];
    }
}
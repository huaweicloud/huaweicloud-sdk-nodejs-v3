import { AnimatedGraphicsOutputParam } from './AnimatedGraphicsOutputParam';
import { CommonCreateTaskReq } from './CommonCreateTaskReq';
import { ObsObjInfo } from './ObsObjInfo';


export class CreateAnimatedGraphicsTaskReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string | undefined;
    private 'output_param'?: AnimatedGraphicsOutputParam | undefined;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateAnimatedGraphicsTaskReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateAnimatedGraphicsTaskReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CreateAnimatedGraphicsTaskReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
    public withOutputParam(outputParam: AnimatedGraphicsOutputParam): CreateAnimatedGraphicsTaskReq {
        this['output_param'] = outputParam;
        return this;
    }
    public set outputParam(outputParam: AnimatedGraphicsOutputParam | undefined) {
        this['output_param'] = outputParam;
    }
    public get outputParam() {
        return this['output_param'];
    }
}
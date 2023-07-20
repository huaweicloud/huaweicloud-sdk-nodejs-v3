import { ObsObjInfo } from './ObsObjInfo';


export class CommonCreateTaskReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CommonCreateTaskReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CommonCreateTaskReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CommonCreateTaskReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
}
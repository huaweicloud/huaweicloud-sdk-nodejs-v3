import { CommonCreateTaskReq } from './CommonCreateTaskReq';
import { Encryption } from './Encryption';
import { ObsObjInfo } from './ObsObjInfo';


export class CreateExtractTaskReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    private 'user_data'?: string;
    public sync?: number;
    public encryption?: Encryption;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateExtractTaskReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateExtractTaskReq {
        this['output'] = output;
        return this;
    }
    public withUserData(userData: string): CreateExtractTaskReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withSync(sync: number): CreateExtractTaskReq {
        this['sync'] = sync;
        return this;
    }
    public withEncryption(encryption: Encryption): CreateExtractTaskReq {
        this['encryption'] = encryption;
        return this;
    }
}
import { Encryption } from './Encryption';
import { ObsObjInfo } from './ObsObjInfo';


export class CreateEncryptReq {
    public input?: ObsObjInfo;
    public output?: ObsObjInfo;
    public encryption?: Encryption;
    private 'user_data'?: string | undefined;
    public constructor() { 
    }
    public withInput(input: ObsObjInfo): CreateEncryptReq {
        this['input'] = input;
        return this;
    }
    public withOutput(output: ObsObjInfo): CreateEncryptReq {
        this['output'] = output;
        return this;
    }
    public withEncryption(encryption: Encryption): CreateEncryptReq {
        this['encryption'] = encryption;
        return this;
    }
    public withUserData(userData: string): CreateEncryptReq {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string | undefined) {
        this['user_data'] = userData;
    }
    public get userData() {
        return this['user_data'];
    }
}
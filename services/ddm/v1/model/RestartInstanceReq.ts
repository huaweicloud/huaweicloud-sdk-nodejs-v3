import { RestarInstanceInfo } from './RestarInstanceInfo';


export class RestartInstanceReq {
    public restart?: RestarInstanceInfo;
    public constructor() { 
    }
    public withRestart(restart: RestarInstanceInfo): RestartInstanceReq {
        this['restart'] = restart;
        return this;
    }
}
import { InterpreterGroupInfo } from './InterpreterGroupInfo';


export class RestSetInterpreterGroupBody {
    public interpreterGroups?: Array<InterpreterGroupInfo>;
    public constructor(interpreterGroups?: Array<InterpreterGroupInfo>) { 
        this['interpreterGroups'] = interpreterGroups;
    }
    public withInterpreterGroups(interpreterGroups: Array<InterpreterGroupInfo>): RestSetInterpreterGroupBody {
        this['interpreterGroups'] = interpreterGroups;
        return this;
    }
}
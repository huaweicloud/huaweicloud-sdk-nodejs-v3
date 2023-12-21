import { InterpreterInfo } from './InterpreterInfo';


export class InterpreterGroupInfo {
    public groupID?: string;
    public groupName?: string;
    public firstLanguage?: string;
    public secondLanguage?: string;
    public interpreters?: Array<InterpreterInfo>;
    public constructor(groupID?: string, firstLanguage?: string, secondLanguage?: string) { 
        this['groupID'] = groupID;
        this['firstLanguage'] = firstLanguage;
        this['secondLanguage'] = secondLanguage;
    }
    public withGroupID(groupID: string): InterpreterGroupInfo {
        this['groupID'] = groupID;
        return this;
    }
    public withGroupName(groupName: string): InterpreterGroupInfo {
        this['groupName'] = groupName;
        return this;
    }
    public withFirstLanguage(firstLanguage: string): InterpreterGroupInfo {
        this['firstLanguage'] = firstLanguage;
        return this;
    }
    public withSecondLanguage(secondLanguage: string): InterpreterGroupInfo {
        this['secondLanguage'] = secondLanguage;
        return this;
    }
    public withInterpreters(interpreters: Array<InterpreterInfo>): InterpreterGroupInfo {
        this['interpreters'] = interpreters;
        return this;
    }
}
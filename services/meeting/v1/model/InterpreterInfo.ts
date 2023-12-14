

export class InterpreterInfo {
    public loginAccount?: string;
    public userID?: string;
    public callNumber?: string;
    public name?: string;
    public constructor(loginAccount?: string) { 
        this['loginAccount'] = loginAccount;
    }
    public withLoginAccount(loginAccount: string): InterpreterInfo {
        this['loginAccount'] = loginAccount;
        return this;
    }
    public withUserID(userID: string): InterpreterInfo {
        this['userID'] = userID;
        return this;
    }
    public withCallNumber(callNumber: string): InterpreterInfo {
        this['callNumber'] = callNumber;
        return this;
    }
    public withName(name: string): InterpreterInfo {
        this['name'] = name;
        return this;
    }
}
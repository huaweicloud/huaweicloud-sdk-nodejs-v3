

export class NodeTemplateExtendParam {
    public userID?: string;
    public constructor() { 
    }
    public withUserID(userID: string): NodeTemplateExtendParam {
        this['userID'] = userID;
        return this;
    }
}
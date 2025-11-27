import { Content } from './Content';


export class RuleSpec {
    public iamUserIDs?: Array<string>;
    public type?: string;
    public contents?: Array<Content>;
    public description?: string;
    public constructor() { 
    }
    public withIamUserIDs(iamUserIDs: Array<string>): RuleSpec {
        this['iamUserIDs'] = iamUserIDs;
        return this;
    }
    public withType(type: string): RuleSpec {
        this['type'] = type;
        return this;
    }
    public withContents(contents: Array<Content>): RuleSpec {
        this['contents'] = contents;
        return this;
    }
    public withDescription(description: string): RuleSpec {
        this['description'] = description;
        return this;
    }
}
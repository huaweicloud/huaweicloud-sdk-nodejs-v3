

export class AiOpsRiskObject {
    public id?: string;
    public name?: string;
    public desc?: string;
    public level?: string;
    public result?: string;
    public suggestion?: string;
    public constructor() { 
    }
    public withId(id: string): AiOpsRiskObject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AiOpsRiskObject {
        this['name'] = name;
        return this;
    }
    public withDesc(desc: string): AiOpsRiskObject {
        this['desc'] = desc;
        return this;
    }
    public withLevel(level: string): AiOpsRiskObject {
        this['level'] = level;
        return this;
    }
    public withResult(result: string): AiOpsRiskObject {
        this['result'] = result;
        return this;
    }
    public withSuggestion(suggestion: string): AiOpsRiskObject {
        this['suggestion'] = suggestion;
        return this;
    }
}
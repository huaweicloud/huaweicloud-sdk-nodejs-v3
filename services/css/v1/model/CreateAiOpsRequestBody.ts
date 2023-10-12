import { CreateAiOpsRequestBodyAlarm } from './CreateAiOpsRequestBodyAlarm';


export class CreateAiOpsRequestBody {
    public name?: string;
    public description?: string;
    public alarm?: CreateAiOpsRequestBodyAlarm;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateAiOpsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAiOpsRequestBody {
        this['description'] = description;
        return this;
    }
    public withAlarm(alarm: CreateAiOpsRequestBodyAlarm): CreateAiOpsRequestBody {
        this['alarm'] = alarm;
        return this;
    }
}
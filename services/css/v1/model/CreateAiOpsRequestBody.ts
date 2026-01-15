import { CreateAiOpsRequestBodyAlarm } from './CreateAiOpsRequestBodyAlarm';


export class CreateAiOpsRequestBody {
    private 'check_type'?: string;
    private 'check_items'?: Array<string>;
    public name?: string;
    public description?: string;
    public alarm?: CreateAiOpsRequestBodyAlarm;
    public constructor() { 
    }
    public withCheckType(checkType: string): CreateAiOpsRequestBody {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckItems(checkItems: Array<string>): CreateAiOpsRequestBody {
        this['check_items'] = checkItems;
        return this;
    }
    public set checkItems(checkItems: Array<string>  | undefined) {
        this['check_items'] = checkItems;
    }
    public get checkItems(): Array<string> | undefined {
        return this['check_items'];
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
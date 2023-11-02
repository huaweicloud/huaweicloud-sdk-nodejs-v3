import { BehaviorRestBody } from './BehaviorRestBody';


export class ParseUserBehaviorRequest {
    public instance?: string;
    public body?: BehaviorRestBody;
    public constructor(instance?: string) { 
        this['instance'] = instance;
    }
    public withInstance(instance: string): ParseUserBehaviorRequest {
        this['instance'] = instance;
        return this;
    }
    public withBody(body: BehaviorRestBody): ParseUserBehaviorRequest {
        this['body'] = body;
        return this;
    }
}
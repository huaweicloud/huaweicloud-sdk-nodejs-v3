import { HouseholdRegisterContent } from './HouseholdRegisterContent';


export class HouseholdRegisterResult {
    public type?: string;
    public location?: Array<Array<number>>;
    public content?: HouseholdRegisterContent;
    public confidence?: { [key: string]: number; };
    public constructor() { 
    }
    public withType(type: string): HouseholdRegisterResult {
        this['type'] = type;
        return this;
    }
    public withLocation(location: Array<Array<number>>): HouseholdRegisterResult {
        this['location'] = location;
        return this;
    }
    public withContent(content: HouseholdRegisterContent): HouseholdRegisterResult {
        this['content'] = content;
        return this;
    }
    public withConfidence(confidence: { [key: string]: number; }): HouseholdRegisterResult {
        this['confidence'] = confidence;
        return this;
    }
}
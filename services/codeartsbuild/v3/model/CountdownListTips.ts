import { Tips } from './Tips';


export class CountdownListTips {
    public summary?: Tips;
    public constructor() { 
    }
    public withSummary(summary: Tips): CountdownListTips {
        this['summary'] = summary;
        return this;
    }
}
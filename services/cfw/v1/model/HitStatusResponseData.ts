import { RuleHitStatusListVO } from './RuleHitStatusListVO';


export class HitStatusResponseData {
    public records?: Array<RuleHitStatusListVO>;
    public constructor() { 
    }
    public withRecords(records: Array<RuleHitStatusListVO>): HitStatusResponseData {
        this['records'] = records;
        return this;
    }
}
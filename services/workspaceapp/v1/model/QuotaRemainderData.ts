import { QuotaResourceTypeEnum } from './QuotaResourceTypeEnum';


export class QuotaRemainderData {
    public type?: QuotaResourceTypeEnum;
    public remainder?: number;
    public need?: number;
    public constructor() { 
    }
    public withType(type: QuotaResourceTypeEnum): QuotaRemainderData {
        this['type'] = type;
        return this;
    }
    public withRemainder(remainder: number): QuotaRemainderData {
        this['remainder'] = remainder;
        return this;
    }
    public withNeed(need: number): QuotaRemainderData {
        this['need'] = need;
        return this;
    }
}
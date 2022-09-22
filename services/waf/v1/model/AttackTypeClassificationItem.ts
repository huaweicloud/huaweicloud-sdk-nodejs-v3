import { AttackTypeItem } from './AttackTypeItem';


export class AttackTypeClassificationItem {
    public total?: number;
    public items?: Array<AttackTypeItem>;
    public constructor() { 
    }
    public withTotal(total: number): AttackTypeClassificationItem {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AttackTypeItem>): AttackTypeClassificationItem {
        this['items'] = items;
        return this;
    }
}
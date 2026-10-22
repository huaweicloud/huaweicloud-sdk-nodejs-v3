import { AttackSubItem } from './AttackSubItem';


export class AttackDistributionItem {
    public key?: string;
    public num?: number;
    public items?: Array<AttackSubItem>;
    public constructor(key?: string, num?: number, items?: Array<AttackSubItem>) { 
        this['key'] = key;
        this['num'] = num;
        this['items'] = items;
    }
    public withKey(key: string): AttackDistributionItem {
        this['key'] = key;
        return this;
    }
    public withNum(num: number): AttackDistributionItem {
        this['num'] = num;
        return this;
    }
    public withItems(items: Array<AttackSubItem>): AttackDistributionItem {
        this['items'] = items;
        return this;
    }
}
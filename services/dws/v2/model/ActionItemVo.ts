import { ActionSubItemVo } from './ActionSubItemVo';


export class ActionItemVo {
    private 'item_name'?: string;
    private 'sub_items'?: Array<ActionSubItemVo>;
    public constructor() { 
    }
    public withItemName(itemName: string): ActionItemVo {
        this['item_name'] = itemName;
        return this;
    }
    public set itemName(itemName: string  | undefined) {
        this['item_name'] = itemName;
    }
    public get itemName(): string | undefined {
        return this['item_name'];
    }
    public withSubItems(subItems: Array<ActionSubItemVo>): ActionItemVo {
        this['sub_items'] = subItems;
        return this;
    }
    public set subItems(subItems: Array<ActionSubItemVo>  | undefined) {
        this['sub_items'] = subItems;
    }
    public get subItems(): Array<ActionSubItemVo> | undefined {
        return this['sub_items'];
    }
}
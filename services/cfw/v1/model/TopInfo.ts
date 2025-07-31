

export class TopInfo {
    public count?: number;
    public item?: string;
    private 'item_id'?: string;
    public constructor() { 
    }
    public withCount(count: number): TopInfo {
        this['count'] = count;
        return this;
    }
    public withItem(item: string): TopInfo {
        this['item'] = item;
        return this;
    }
    public withItemId(itemId: string): TopInfo {
        this['item_id'] = itemId;
        return this;
    }
    public set itemId(itemId: string  | undefined) {
        this['item_id'] = itemId;
    }
    public get itemId(): string | undefined {
        return this['item_id'];
    }
}


export class AccessTopMemberVO {
    public count?: string;
    public item?: string;
    public name?: string;
    public constructor() { 
    }
    public withCount(count: string): AccessTopMemberVO {
        this['count'] = count;
        return this;
    }
    public withItem(item: string): AccessTopMemberVO {
        this['item'] = item;
        return this;
    }
    public withName(name: string): AccessTopMemberVO {
        this['name'] = name;
        return this;
    }
}
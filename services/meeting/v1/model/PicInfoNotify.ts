

export class PicInfoNotify {
    public index?: number;
    public id?: Array<string>;
    public share?: number;
    public constructor() { 
    }
    public withIndex(index: number): PicInfoNotify {
        this['index'] = index;
        return this;
    }
    public withId(id: Array<string>): PicInfoNotify {
        this['id'] = id;
        return this;
    }
    public withShare(share: number): PicInfoNotify {
        this['share'] = share;
        return this;
    }
}
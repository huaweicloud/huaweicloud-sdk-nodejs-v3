

export class CurrentNodeDetail {
    public order?: number;
    public name?: string;
    public status?: string;
    public desc?: string;
    public beginTime?: string;
    public endTime?: string;
    public constructor() { 
    }
    public withOrder(order: number): CurrentNodeDetail {
        this['order'] = order;
        return this;
    }
    public withName(name: string): CurrentNodeDetail {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CurrentNodeDetail {
        this['status'] = status;
        return this;
    }
    public withDesc(desc: string): CurrentNodeDetail {
        this['desc'] = desc;
        return this;
    }
    public withBeginTime(beginTime: string): CurrentNodeDetail {
        this['beginTime'] = beginTime;
        return this;
    }
    public withEndTime(endTime: string): CurrentNodeDetail {
        this['endTime'] = endTime;
        return this;
    }
}
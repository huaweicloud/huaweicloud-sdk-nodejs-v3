

export class ListMetricRelationsResultDataValue {
    public all?: Array<object>;
    public links?: object;
    public groups?: object;
    public total?: number;
    public constructor() { 
    }
    public withAll(all: Array<object>): ListMetricRelationsResultDataValue {
        this['all'] = all;
        return this;
    }
    public withLinks(links: object): ListMetricRelationsResultDataValue {
        this['links'] = links;
        return this;
    }
    public withGroups(groups: object): ListMetricRelationsResultDataValue {
        this['groups'] = groups;
        return this;
    }
    public withTotal(total: number): ListMetricRelationsResultDataValue {
        this['total'] = total;
        return this;
    }
}


export class DatasourceOrderPara {
    public name?: string;
    public field?: string;
    public optional?: boolean;
    public sort?: DatasourceOrderParaSortEnum | string;
    public order?: number;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): DatasourceOrderPara {
        this['name'] = name;
        return this;
    }
    public withField(field: string): DatasourceOrderPara {
        this['field'] = field;
        return this;
    }
    public withOptional(optional: boolean): DatasourceOrderPara {
        this['optional'] = optional;
        return this;
    }
    public withSort(sort: DatasourceOrderParaSortEnum | string): DatasourceOrderPara {
        this['sort'] = sort;
        return this;
    }
    public withOrder(order: number): DatasourceOrderPara {
        this['order'] = order;
        return this;
    }
    public withDescription(description: string): DatasourceOrderPara {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DatasourceOrderParaSortEnum {
    ASC = 'ASC',
    DESC = 'DESC',
    CUSTOM = 'CUSTOM'
}

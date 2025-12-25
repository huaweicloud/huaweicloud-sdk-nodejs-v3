import { Data } from './Data';


export class DeleteRelationResource {
    public type?: DeleteRelationResourceTypeEnum | string;
    public count?: number;
    private 'detail_url'?: string;
    public data?: Array<Data>;
    public constructor() { 
    }
    public withType(type: DeleteRelationResourceTypeEnum | string): DeleteRelationResource {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): DeleteRelationResource {
        this['count'] = count;
        return this;
    }
    public withDetailUrl(detailUrl: string): DeleteRelationResource {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string  | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl(): string | undefined {
        return this['detail_url'];
    }
    public withData(data: Array<Data>): DeleteRelationResource {
        this['data'] = data;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteRelationResourceTypeEnum {
    DPE = 'DPE',
    ALERT_RULE = 'ALERT_RULE',
    DATAOBJECT = 'DATAOBJECT'
}

import { ListCesInstanceRequestBodyQuery } from './ListCesInstanceRequestBodyQuery';


export class ListCesInstanceRequestBody {
    public namespace?: ListCesInstanceRequestBodyNamespaceEnum | string;
    public query?: Array<ListCesInstanceRequestBodyQuery>;
    public start?: number;
    public limit?: number;
    public constructor(namespace?: string, query?: Array<ListCesInstanceRequestBodyQuery>) { 
        this['namespace'] = namespace;
        this['query'] = query;
    }
    public withNamespace(namespace: ListCesInstanceRequestBodyNamespaceEnum | string): ListCesInstanceRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withQuery(query: Array<ListCesInstanceRequestBodyQuery>): ListCesInstanceRequestBody {
        this['query'] = query;
        return this;
    }
    public withStart(start: number): ListCesInstanceRequestBody {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListCesInstanceRequestBody {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCesInstanceRequestBodyNamespaceEnum {
    SYS_LIVE = 'SYS.LIVE'
}


import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStoredQueryResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: ShowStoredQueryResponseTypeEnum | string;
    public description?: string;
    public expression?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowStoredQueryResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowStoredQueryResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: ShowStoredQueryResponseTypeEnum | string): ShowStoredQueryResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ShowStoredQueryResponse {
        this['description'] = description;
        return this;
    }
    public withExpression(expression: string): ShowStoredQueryResponse {
        this['expression'] = expression;
        return this;
    }
    public withCreated(created: string): ShowStoredQueryResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowStoredQueryResponse {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStoredQueryResponseTypeEnum {
    ACCOUNT = 'account',
    AGGREGATOR = 'aggregator'
}

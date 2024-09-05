
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateStoredQueryResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: CreateStoredQueryResponseTypeEnum | string;
    public description?: string;
    public expression?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateStoredQueryResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateStoredQueryResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateStoredQueryResponseTypeEnum | string): CreateStoredQueryResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): CreateStoredQueryResponse {
        this['description'] = description;
        return this;
    }
    public withExpression(expression: string): CreateStoredQueryResponse {
        this['expression'] = expression;
        return this;
    }
    public withCreated(created: string): CreateStoredQueryResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): CreateStoredQueryResponse {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateStoredQueryResponseTypeEnum {
    ACCOUNT = 'account',
    AGGREGATOR = 'aggregator'
}

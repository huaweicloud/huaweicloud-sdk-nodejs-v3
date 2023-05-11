
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateStoredQueryResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public expression?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateStoredQueryResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateStoredQueryResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateStoredQueryResponse {
        this['description'] = description;
        return this;
    }
    public withExpression(expression: string): UpdateStoredQueryResponse {
        this['expression'] = expression;
        return this;
    }
    public withCreated(created: string): UpdateStoredQueryResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): UpdateStoredQueryResponse {
        this['updated'] = updated;
        return this;
    }
}
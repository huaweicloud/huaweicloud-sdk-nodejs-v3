import { SchemaDto } from './SchemaDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryNavigationSchemaResponse extends SdkResponse {
    public result?: string;
    public message?: string;
    public schema?: SchemaDto;
    public constructor() { 
        super();
    }
    public withResult(result: string): ShowRepositoryNavigationSchemaResponse {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): ShowRepositoryNavigationSchemaResponse {
        this['message'] = message;
        return this;
    }
    public withSchema(schema: SchemaDto): ShowRepositoryNavigationSchemaResponse {
        this['schema'] = schema;
        return this;
    }
}
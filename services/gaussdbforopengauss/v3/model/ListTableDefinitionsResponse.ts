import { SchemaTableDefinitionResult } from './SchemaTableDefinitionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableDefinitionsResponse extends SdkResponse {
    private 'table_definitions'?: Array<SchemaTableDefinitionResult>;
    public constructor() { 
        super();
    }
    public withTableDefinitions(tableDefinitions: Array<SchemaTableDefinitionResult>): ListTableDefinitionsResponse {
        this['table_definitions'] = tableDefinitions;
        return this;
    }
    public set tableDefinitions(tableDefinitions: Array<SchemaTableDefinitionResult>  | undefined) {
        this['table_definitions'] = tableDefinitions;
    }
    public get tableDefinitions(): Array<SchemaTableDefinitionResult> | undefined {
        return this['table_definitions'];
    }
}

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableDefinitionResponse extends SdkResponse {
    private 'table_definition'?: string;
    public constructor() { 
        super();
    }
    public withTableDefinition(tableDefinition: string): ListTableDefinitionResponse {
        this['table_definition'] = tableDefinition;
        return this;
    }
    public set tableDefinition(tableDefinition: string  | undefined) {
        this['table_definition'] = tableDefinition;
    }
    public get tableDefinition(): string | undefined {
        return this['table_definition'];
    }
}
import { TableItem } from './TableItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlValidationResponse extends SdkResponse {
    public sources?: Array<TableItem>;
    public modes?: Array<CreateSqlValidationResponseModesEnum> | Array<string>;
    public constructor() { 
        super();
    }
    public withSources(sources: Array<TableItem>): CreateSqlValidationResponse {
        this['sources'] = sources;
        return this;
    }
    public withModes(modes: Array<CreateSqlValidationResponseModesEnum> | Array<string>): CreateSqlValidationResponse {
        this['modes'] = modes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSqlValidationResponseModesEnum {
    STREAMING = 'STREAMING',
    BATCH = 'BATCH'
}

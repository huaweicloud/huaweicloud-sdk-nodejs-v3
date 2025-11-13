import { InsertCommandItem } from './InsertCommandItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInsertCommandsResponse extends SdkResponse {
    public count?: number;
    private 'insert_commands'?: Array<InsertCommandItem>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInsertCommandsResponse {
        this['count'] = count;
        return this;
    }
    public withInsertCommands(insertCommands: Array<InsertCommandItem>): ListInsertCommandsResponse {
        this['insert_commands'] = insertCommands;
        return this;
    }
    public set insertCommands(insertCommands: Array<InsertCommandItem>  | undefined) {
        this['insert_commands'] = insertCommands;
    }
    public get insertCommands(): Array<InsertCommandItem> | undefined {
        return this['insert_commands'];
    }
    public withXRequestId(xRequestId: string): ListInsertCommandsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}
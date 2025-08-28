import { FullSql } from './FullSql';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportSqlStatementsResponse extends SdkResponse {
    public statements?: Array<FullSql>;
    private 'next_marker'?: string;
    public constructor() { 
        super();
    }
    public withStatements(statements: Array<FullSql>): ExportSqlStatementsResponse {
        this['statements'] = statements;
        return this;
    }
    public withNextMarker(nextMarker: string): ExportSqlStatementsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}
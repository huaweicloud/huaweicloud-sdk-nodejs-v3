import { ReplayErrorSqlResp } from './ReplayErrorSqlResp';
import { ReplayErrorSqlTemplateResp } from './ReplayErrorSqlTemplateResp';
import { ReplayShardStaticsResp } from './ReplayShardStaticsResp';
import { ReplaySlowSqlResp } from './ReplaySlowSqlResp';
import { ReplaySlowSqlTemplateResp } from './ReplaySlowSqlTemplateResp';
import { ReplayingSqlResp } from './ReplayingSqlResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplayResultsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'shard_statics'?: Array<ReplayShardStaticsResp>;
    private 'slow_sqls'?: Array<ReplaySlowSqlResp>;
    private 'slow_sql_templates'?: Array<ReplaySlowSqlTemplateResp>;
    private 'error_sqls'?: Array<ReplayErrorSqlResp>;
    private 'error_sql_templates'?: Array<ReplayErrorSqlTemplateResp>;
    private 'replaying_sqls'?: Array<ReplayingSqlResp>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowReplayResultsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withShardStatics(shardStatics: Array<ReplayShardStaticsResp>): ShowReplayResultsResponse {
        this['shard_statics'] = shardStatics;
        return this;
    }
    public set shardStatics(shardStatics: Array<ReplayShardStaticsResp>  | undefined) {
        this['shard_statics'] = shardStatics;
    }
    public get shardStatics(): Array<ReplayShardStaticsResp> | undefined {
        return this['shard_statics'];
    }
    public withSlowSqls(slowSqls: Array<ReplaySlowSqlResp>): ShowReplayResultsResponse {
        this['slow_sqls'] = slowSqls;
        return this;
    }
    public set slowSqls(slowSqls: Array<ReplaySlowSqlResp>  | undefined) {
        this['slow_sqls'] = slowSqls;
    }
    public get slowSqls(): Array<ReplaySlowSqlResp> | undefined {
        return this['slow_sqls'];
    }
    public withSlowSqlTemplates(slowSqlTemplates: Array<ReplaySlowSqlTemplateResp>): ShowReplayResultsResponse {
        this['slow_sql_templates'] = slowSqlTemplates;
        return this;
    }
    public set slowSqlTemplates(slowSqlTemplates: Array<ReplaySlowSqlTemplateResp>  | undefined) {
        this['slow_sql_templates'] = slowSqlTemplates;
    }
    public get slowSqlTemplates(): Array<ReplaySlowSqlTemplateResp> | undefined {
        return this['slow_sql_templates'];
    }
    public withErrorSqls(errorSqls: Array<ReplayErrorSqlResp>): ShowReplayResultsResponse {
        this['error_sqls'] = errorSqls;
        return this;
    }
    public set errorSqls(errorSqls: Array<ReplayErrorSqlResp>  | undefined) {
        this['error_sqls'] = errorSqls;
    }
    public get errorSqls(): Array<ReplayErrorSqlResp> | undefined {
        return this['error_sqls'];
    }
    public withErrorSqlTemplates(errorSqlTemplates: Array<ReplayErrorSqlTemplateResp>): ShowReplayResultsResponse {
        this['error_sql_templates'] = errorSqlTemplates;
        return this;
    }
    public set errorSqlTemplates(errorSqlTemplates: Array<ReplayErrorSqlTemplateResp>  | undefined) {
        this['error_sql_templates'] = errorSqlTemplates;
    }
    public get errorSqlTemplates(): Array<ReplayErrorSqlTemplateResp> | undefined {
        return this['error_sql_templates'];
    }
    public withReplayingSqls(replayingSqls: Array<ReplayingSqlResp>): ShowReplayResultsResponse {
        this['replaying_sqls'] = replayingSqls;
        return this;
    }
    public set replayingSqls(replayingSqls: Array<ReplayingSqlResp>  | undefined) {
        this['replaying_sqls'] = replayingSqls;
    }
    public get replayingSqls(): Array<ReplayingSqlResp> | undefined {
        return this['replaying_sqls'];
    }
}
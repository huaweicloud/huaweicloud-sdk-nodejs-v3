import { ContentCompareDiff } from './ContentCompareDiff';


export class ContentCompareResultDiffs {
    private 'source_db_name': string | undefined;
    private 'source_table_name': string | undefined;
    private 'content_compare_diff': Array<ContentCompareDiff> | undefined;
    private 'content_compare_diff_count': number | undefined;
    public constructor(sourceDbName?: any, sourceTableName?: any, contentCompareDiff?: any, contentCompareDiffCount?: any) { 
        this['source_db_name'] = sourceDbName;
        this['source_table_name'] = sourceTableName;
        this['content_compare_diff'] = contentCompareDiff;
        this['content_compare_diff_count'] = contentCompareDiffCount;
    }
    public withSourceDbName(sourceDbName: string): ContentCompareResultDiffs {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withSourceTableName(sourceTableName: string): ContentCompareResultDiffs {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName() {
        return this['source_table_name'];
    }
    public withContentCompareDiff(contentCompareDiff: Array<ContentCompareDiff>): ContentCompareResultDiffs {
        this['content_compare_diff'] = contentCompareDiff;
        return this;
    }
    public set contentCompareDiff(contentCompareDiff: Array<ContentCompareDiff> | undefined) {
        this['content_compare_diff'] = contentCompareDiff;
    }
    public get contentCompareDiff() {
        return this['content_compare_diff'];
    }
    public withContentCompareDiffCount(contentCompareDiffCount: number): ContentCompareResultDiffs {
        this['content_compare_diff_count'] = contentCompareDiffCount;
        return this;
    }
    public set contentCompareDiffCount(contentCompareDiffCount: number | undefined) {
        this['content_compare_diff_count'] = contentCompareDiffCount;
    }
    public get contentCompareDiffCount() {
        return this['content_compare_diff_count'];
    }
}
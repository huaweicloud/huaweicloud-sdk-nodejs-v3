

export class SchemaDto {
    public version?: string;
    private 'maximum_file_size'?: number;
    private 'maximum_line_length'?: number;
    private 'maximum_truncate_line'?: number;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'rebuild_at'?: string;
    private 'last_build_at'?: string;
    private 'build_times'?: number;
    private 'query_times'?: number;
    private 'outline_times'?: number;
    public constructor() { 
    }
    public withVersion(version: string): SchemaDto {
        this['version'] = version;
        return this;
    }
    public withMaximumFileSize(maximumFileSize: number): SchemaDto {
        this['maximum_file_size'] = maximumFileSize;
        return this;
    }
    public set maximumFileSize(maximumFileSize: number  | undefined) {
        this['maximum_file_size'] = maximumFileSize;
    }
    public get maximumFileSize(): number | undefined {
        return this['maximum_file_size'];
    }
    public withMaximumLineLength(maximumLineLength: number): SchemaDto {
        this['maximum_line_length'] = maximumLineLength;
        return this;
    }
    public set maximumLineLength(maximumLineLength: number  | undefined) {
        this['maximum_line_length'] = maximumLineLength;
    }
    public get maximumLineLength(): number | undefined {
        return this['maximum_line_length'];
    }
    public withMaximumTruncateLine(maximumTruncateLine: number): SchemaDto {
        this['maximum_truncate_line'] = maximumTruncateLine;
        return this;
    }
    public set maximumTruncateLine(maximumTruncateLine: number  | undefined) {
        this['maximum_truncate_line'] = maximumTruncateLine;
    }
    public get maximumTruncateLine(): number | undefined {
        return this['maximum_truncate_line'];
    }
    public withCreateAt(createAt: string): SchemaDto {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): SchemaDto {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withRebuildAt(rebuildAt: string): SchemaDto {
        this['rebuild_at'] = rebuildAt;
        return this;
    }
    public set rebuildAt(rebuildAt: string  | undefined) {
        this['rebuild_at'] = rebuildAt;
    }
    public get rebuildAt(): string | undefined {
        return this['rebuild_at'];
    }
    public withLastBuildAt(lastBuildAt: string): SchemaDto {
        this['last_build_at'] = lastBuildAt;
        return this;
    }
    public set lastBuildAt(lastBuildAt: string  | undefined) {
        this['last_build_at'] = lastBuildAt;
    }
    public get lastBuildAt(): string | undefined {
        return this['last_build_at'];
    }
    public withBuildTimes(buildTimes: number): SchemaDto {
        this['build_times'] = buildTimes;
        return this;
    }
    public set buildTimes(buildTimes: number  | undefined) {
        this['build_times'] = buildTimes;
    }
    public get buildTimes(): number | undefined {
        return this['build_times'];
    }
    public withQueryTimes(queryTimes: number): SchemaDto {
        this['query_times'] = queryTimes;
        return this;
    }
    public set queryTimes(queryTimes: number  | undefined) {
        this['query_times'] = queryTimes;
    }
    public get queryTimes(): number | undefined {
        return this['query_times'];
    }
    public withOutlineTimes(outlineTimes: number): SchemaDto {
        this['outline_times'] = outlineTimes;
        return this;
    }
    public set outlineTimes(outlineTimes: number  | undefined) {
        this['outline_times'] = outlineTimes;
    }
    public get outlineTimes(): number | undefined {
        return this['outline_times'];
    }
}
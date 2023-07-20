

export class PartitionInfos {
    private 'partition_name'?: string;
    private 'create_time'?: number;
    private 'last_access_time'?: number;
    public locations?: Array<string>;
    private 'last_ddl_time'?: number;
    private 'num_rows'?: number;
    private 'num_files'?: number;
    private 'total_size'?: number;
    public constructor(partitionName?: string, createTime?: number, lastAccessTime?: number) { 
        this['partition_name'] = partitionName;
        this['create_time'] = createTime;
        this['last_access_time'] = lastAccessTime;
    }
    public withPartitionName(partitionName: string): PartitionInfos {
        this['partition_name'] = partitionName;
        return this;
    }
    public set partitionName(partitionName: string  | undefined) {
        this['partition_name'] = partitionName;
    }
    public get partitionName(): string | undefined {
        return this['partition_name'];
    }
    public withCreateTime(createTime: number): PartitionInfos {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLastAccessTime(lastAccessTime: number): PartitionInfos {
        this['last_access_time'] = lastAccessTime;
        return this;
    }
    public set lastAccessTime(lastAccessTime: number  | undefined) {
        this['last_access_time'] = lastAccessTime;
    }
    public get lastAccessTime(): number | undefined {
        return this['last_access_time'];
    }
    public withLocations(locations: Array<string>): PartitionInfos {
        this['locations'] = locations;
        return this;
    }
    public withLastDdlTime(lastDdlTime: number): PartitionInfos {
        this['last_ddl_time'] = lastDdlTime;
        return this;
    }
    public set lastDdlTime(lastDdlTime: number  | undefined) {
        this['last_ddl_time'] = lastDdlTime;
    }
    public get lastDdlTime(): number | undefined {
        return this['last_ddl_time'];
    }
    public withNumRows(numRows: number): PartitionInfos {
        this['num_rows'] = numRows;
        return this;
    }
    public set numRows(numRows: number  | undefined) {
        this['num_rows'] = numRows;
    }
    public get numRows(): number | undefined {
        return this['num_rows'];
    }
    public withNumFiles(numFiles: number): PartitionInfos {
        this['num_files'] = numFiles;
        return this;
    }
    public set numFiles(numFiles: number  | undefined) {
        this['num_files'] = numFiles;
    }
    public get numFiles(): number | undefined {
        return this['num_files'];
    }
    public withTotalSize(totalSize: number): PartitionInfos {
        this['total_size'] = totalSize;
        return this;
    }
    public set totalSize(totalSize: number  | undefined) {
        this['total_size'] = totalSize;
    }
    public get totalSize(): number | undefined {
        return this['total_size'];
    }
}
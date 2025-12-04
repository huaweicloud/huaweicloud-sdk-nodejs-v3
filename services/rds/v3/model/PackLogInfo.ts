

export class PackLogInfo {
    public id?: string;
    private 'instance_id'?: string;
    public size?: number;
    private 'size_unit'?: string;
    public status?: string;
    private 'query_start_time'?: number;
    private 'query_end_time'?: number;
    private 'file_name'?: string;
    public constructor() { 
    }
    public withId(id: string): PackLogInfo {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): PackLogInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSize(size: number): PackLogInfo {
        this['size'] = size;
        return this;
    }
    public withSizeUnit(sizeUnit: string): PackLogInfo {
        this['size_unit'] = sizeUnit;
        return this;
    }
    public set sizeUnit(sizeUnit: string  | undefined) {
        this['size_unit'] = sizeUnit;
    }
    public get sizeUnit(): string | undefined {
        return this['size_unit'];
    }
    public withStatus(status: string): PackLogInfo {
        this['status'] = status;
        return this;
    }
    public withQueryStartTime(queryStartTime: number): PackLogInfo {
        this['query_start_time'] = queryStartTime;
        return this;
    }
    public set queryStartTime(queryStartTime: number  | undefined) {
        this['query_start_time'] = queryStartTime;
    }
    public get queryStartTime(): number | undefined {
        return this['query_start_time'];
    }
    public withQueryEndTime(queryEndTime: number): PackLogInfo {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: number  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): number | undefined {
        return this['query_end_time'];
    }
    public withFileName(fileName: string): PackLogInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}
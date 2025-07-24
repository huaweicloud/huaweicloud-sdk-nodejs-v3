

export class SubtaskcaseOverstockDto {
    private 'data_time'?: Date;
    private 'executor_type'?: string;
    public id?: string;
    public label?: string;
    private 'location_id'?: string;
    private 'subtaskcase_overstock_count'?: number;
    private 'test_service_id'?: string;
    public constructor() { 
    }
    public withDataTime(dataTime: Date): SubtaskcaseOverstockDto {
        this['data_time'] = dataTime;
        return this;
    }
    public set dataTime(dataTime: Date  | undefined) {
        this['data_time'] = dataTime;
    }
    public get dataTime(): Date | undefined {
        return this['data_time'];
    }
    public withExecutorType(executorType: string): SubtaskcaseOverstockDto {
        this['executor_type'] = executorType;
        return this;
    }
    public set executorType(executorType: string  | undefined) {
        this['executor_type'] = executorType;
    }
    public get executorType(): string | undefined {
        return this['executor_type'];
    }
    public withId(id: string): SubtaskcaseOverstockDto {
        this['id'] = id;
        return this;
    }
    public withLabel(label: string): SubtaskcaseOverstockDto {
        this['label'] = label;
        return this;
    }
    public withLocationId(locationId: string): SubtaskcaseOverstockDto {
        this['location_id'] = locationId;
        return this;
    }
    public set locationId(locationId: string  | undefined) {
        this['location_id'] = locationId;
    }
    public get locationId(): string | undefined {
        return this['location_id'];
    }
    public withSubtaskcaseOverstockCount(subtaskcaseOverstockCount: number): SubtaskcaseOverstockDto {
        this['subtaskcase_overstock_count'] = subtaskcaseOverstockCount;
        return this;
    }
    public set subtaskcaseOverstockCount(subtaskcaseOverstockCount: number  | undefined) {
        this['subtaskcase_overstock_count'] = subtaskcaseOverstockCount;
    }
    public get subtaskcaseOverstockCount(): number | undefined {
        return this['subtaskcase_overstock_count'];
    }
    public withTestServiceId(testServiceId: string): SubtaskcaseOverstockDto {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
}
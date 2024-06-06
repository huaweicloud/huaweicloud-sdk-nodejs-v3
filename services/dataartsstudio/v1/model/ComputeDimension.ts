

export class ComputeDimension {
    private 'node_instance_id'?: string;
    public name?: string;
    public type?: number;
    private 'node_type'?: string;
    private 'job_id'?: number;
    private 'job_instance_id'?: number;
    private 'job_name'?: string;
    private 'start_time_ms'?: number;
    private 'end_time_ms'?: number;
    private 'execute_time_ms'?: number;
    public status?: string;
    private 'last_start_time_ms'?: number;
    private 'last_end_time_ms'?: number;
    private 'cpu_resource_consumption_value'?: number;
    private 'cpu_unit'?: string;
    private 'memory_resource_consumption_value'?: number;
    private 'memory_unit'?: string;
    private 'last_cpu_resource_consumption_value'?: number;
    private 'last_cpu_unit'?: string;
    private 'last_memory_resource_consumption_value'?: number;
    private 'last_memory_unit'?: string;
    public creator?: string;
    private 'warehouse_time_ms'?: number;
    private 'extended_fields'?: string;
    public constructor() { 
    }
    public withNodeInstanceId(nodeInstanceId: string): ComputeDimension {
        this['node_instance_id'] = nodeInstanceId;
        return this;
    }
    public set nodeInstanceId(nodeInstanceId: string  | undefined) {
        this['node_instance_id'] = nodeInstanceId;
    }
    public get nodeInstanceId(): string | undefined {
        return this['node_instance_id'];
    }
    public withName(name: string): ComputeDimension {
        this['name'] = name;
        return this;
    }
    public withType(type: number): ComputeDimension {
        this['type'] = type;
        return this;
    }
    public withNodeType(nodeType: string): ComputeDimension {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withJobId(jobId: number): ComputeDimension {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withJobInstanceId(jobInstanceId: number): ComputeDimension {
        this['job_instance_id'] = jobInstanceId;
        return this;
    }
    public set jobInstanceId(jobInstanceId: number  | undefined) {
        this['job_instance_id'] = jobInstanceId;
    }
    public get jobInstanceId(): number | undefined {
        return this['job_instance_id'];
    }
    public withJobName(jobName: string): ComputeDimension {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withStartTimeMs(startTimeMs: number): ComputeDimension {
        this['start_time_ms'] = startTimeMs;
        return this;
    }
    public set startTimeMs(startTimeMs: number  | undefined) {
        this['start_time_ms'] = startTimeMs;
    }
    public get startTimeMs(): number | undefined {
        return this['start_time_ms'];
    }
    public withEndTimeMs(endTimeMs: number): ComputeDimension {
        this['end_time_ms'] = endTimeMs;
        return this;
    }
    public set endTimeMs(endTimeMs: number  | undefined) {
        this['end_time_ms'] = endTimeMs;
    }
    public get endTimeMs(): number | undefined {
        return this['end_time_ms'];
    }
    public withExecuteTimeMs(executeTimeMs: number): ComputeDimension {
        this['execute_time_ms'] = executeTimeMs;
        return this;
    }
    public set executeTimeMs(executeTimeMs: number  | undefined) {
        this['execute_time_ms'] = executeTimeMs;
    }
    public get executeTimeMs(): number | undefined {
        return this['execute_time_ms'];
    }
    public withStatus(status: string): ComputeDimension {
        this['status'] = status;
        return this;
    }
    public withLastStartTimeMs(lastStartTimeMs: number): ComputeDimension {
        this['last_start_time_ms'] = lastStartTimeMs;
        return this;
    }
    public set lastStartTimeMs(lastStartTimeMs: number  | undefined) {
        this['last_start_time_ms'] = lastStartTimeMs;
    }
    public get lastStartTimeMs(): number | undefined {
        return this['last_start_time_ms'];
    }
    public withLastEndTimeMs(lastEndTimeMs: number): ComputeDimension {
        this['last_end_time_ms'] = lastEndTimeMs;
        return this;
    }
    public set lastEndTimeMs(lastEndTimeMs: number  | undefined) {
        this['last_end_time_ms'] = lastEndTimeMs;
    }
    public get lastEndTimeMs(): number | undefined {
        return this['last_end_time_ms'];
    }
    public withCpuResourceConsumptionValue(cpuResourceConsumptionValue: number): ComputeDimension {
        this['cpu_resource_consumption_value'] = cpuResourceConsumptionValue;
        return this;
    }
    public set cpuResourceConsumptionValue(cpuResourceConsumptionValue: number  | undefined) {
        this['cpu_resource_consumption_value'] = cpuResourceConsumptionValue;
    }
    public get cpuResourceConsumptionValue(): number | undefined {
        return this['cpu_resource_consumption_value'];
    }
    public withCpuUnit(cpuUnit: string): ComputeDimension {
        this['cpu_unit'] = cpuUnit;
        return this;
    }
    public set cpuUnit(cpuUnit: string  | undefined) {
        this['cpu_unit'] = cpuUnit;
    }
    public get cpuUnit(): string | undefined {
        return this['cpu_unit'];
    }
    public withMemoryResourceConsumptionValue(memoryResourceConsumptionValue: number): ComputeDimension {
        this['memory_resource_consumption_value'] = memoryResourceConsumptionValue;
        return this;
    }
    public set memoryResourceConsumptionValue(memoryResourceConsumptionValue: number  | undefined) {
        this['memory_resource_consumption_value'] = memoryResourceConsumptionValue;
    }
    public get memoryResourceConsumptionValue(): number | undefined {
        return this['memory_resource_consumption_value'];
    }
    public withMemoryUnit(memoryUnit: string): ComputeDimension {
        this['memory_unit'] = memoryUnit;
        return this;
    }
    public set memoryUnit(memoryUnit: string  | undefined) {
        this['memory_unit'] = memoryUnit;
    }
    public get memoryUnit(): string | undefined {
        return this['memory_unit'];
    }
    public withLastCpuResourceConsumptionValue(lastCpuResourceConsumptionValue: number): ComputeDimension {
        this['last_cpu_resource_consumption_value'] = lastCpuResourceConsumptionValue;
        return this;
    }
    public set lastCpuResourceConsumptionValue(lastCpuResourceConsumptionValue: number  | undefined) {
        this['last_cpu_resource_consumption_value'] = lastCpuResourceConsumptionValue;
    }
    public get lastCpuResourceConsumptionValue(): number | undefined {
        return this['last_cpu_resource_consumption_value'];
    }
    public withLastCpuUnit(lastCpuUnit: string): ComputeDimension {
        this['last_cpu_unit'] = lastCpuUnit;
        return this;
    }
    public set lastCpuUnit(lastCpuUnit: string  | undefined) {
        this['last_cpu_unit'] = lastCpuUnit;
    }
    public get lastCpuUnit(): string | undefined {
        return this['last_cpu_unit'];
    }
    public withLastMemoryResourceConsumptionValue(lastMemoryResourceConsumptionValue: number): ComputeDimension {
        this['last_memory_resource_consumption_value'] = lastMemoryResourceConsumptionValue;
        return this;
    }
    public set lastMemoryResourceConsumptionValue(lastMemoryResourceConsumptionValue: number  | undefined) {
        this['last_memory_resource_consumption_value'] = lastMemoryResourceConsumptionValue;
    }
    public get lastMemoryResourceConsumptionValue(): number | undefined {
        return this['last_memory_resource_consumption_value'];
    }
    public withLastMemoryUnit(lastMemoryUnit: string): ComputeDimension {
        this['last_memory_unit'] = lastMemoryUnit;
        return this;
    }
    public set lastMemoryUnit(lastMemoryUnit: string  | undefined) {
        this['last_memory_unit'] = lastMemoryUnit;
    }
    public get lastMemoryUnit(): string | undefined {
        return this['last_memory_unit'];
    }
    public withCreator(creator: string): ComputeDimension {
        this['creator'] = creator;
        return this;
    }
    public withWarehouseTimeMs(warehouseTimeMs: number): ComputeDimension {
        this['warehouse_time_ms'] = warehouseTimeMs;
        return this;
    }
    public set warehouseTimeMs(warehouseTimeMs: number  | undefined) {
        this['warehouse_time_ms'] = warehouseTimeMs;
    }
    public get warehouseTimeMs(): number | undefined {
        return this['warehouse_time_ms'];
    }
    public withExtendedFields(extendedFields: string): ComputeDimension {
        this['extended_fields'] = extendedFields;
        return this;
    }
    public set extendedFields(extendedFields: string  | undefined) {
        this['extended_fields'] = extendedFields;
    }
    public get extendedFields(): string | undefined {
        return this['extended_fields'];
    }
}
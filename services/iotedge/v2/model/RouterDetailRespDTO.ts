

export class RouterDetailRespDTO {
    private 'route_id'?: string;
    private 'input_module_id'?: string;
    private 'output_module_id'?: string;
    public input?: string;
    public output?: string;
    public sql?: string;
    public available?: boolean;
    public constructor(routeId?: string) { 
        this['route_id'] = routeId;
    }
    public withRouteId(routeId: string): RouterDetailRespDTO {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string  | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId(): string | undefined {
        return this['route_id'];
    }
    public withInputModuleId(inputModuleId: string): RouterDetailRespDTO {
        this['input_module_id'] = inputModuleId;
        return this;
    }
    public set inputModuleId(inputModuleId: string  | undefined) {
        this['input_module_id'] = inputModuleId;
    }
    public get inputModuleId(): string | undefined {
        return this['input_module_id'];
    }
    public withOutputModuleId(outputModuleId: string): RouterDetailRespDTO {
        this['output_module_id'] = outputModuleId;
        return this;
    }
    public set outputModuleId(outputModuleId: string  | undefined) {
        this['output_module_id'] = outputModuleId;
    }
    public get outputModuleId(): string | undefined {
        return this['output_module_id'];
    }
    public withInput(input: string): RouterDetailRespDTO {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): RouterDetailRespDTO {
        this['output'] = output;
        return this;
    }
    public withSql(sql: string): RouterDetailRespDTO {
        this['sql'] = sql;
        return this;
    }
    public withAvailable(available: boolean): RouterDetailRespDTO {
        this['available'] = available;
        return this;
    }
}


export class Operations {
    private 'service_type': string | undefined;
    private 'resource_type': string | undefined;
    private 'trace_names': Array<string> | undefined;
    public constructor(serviceType?: any, resourceType?: any, traceNames?: any) { 
        this['service_type'] = serviceType;
        this['resource_type'] = resourceType;
        this['trace_names'] = traceNames;
    }
    public withServiceType(serviceType: string): Operations {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withResourceType(resourceType: string): Operations {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withTraceNames(traceNames: Array<string>): Operations {
        this['trace_names'] = traceNames;
        return this;
    }
    public set traceNames(traceNames: Array<string> | undefined) {
        this['trace_names'] = traceNames;
    }
    public get traceNames() {
        return this['trace_names'];
    }
}
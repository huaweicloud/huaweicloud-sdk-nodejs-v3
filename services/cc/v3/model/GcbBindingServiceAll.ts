

export class GcbBindingServiceAll {
    private 'binding_service'?: GcbBindingServiceAllBindingServiceEnum | string;
    public constructor() { 
    }
    public withBindingService(bindingService: GcbBindingServiceAllBindingServiceEnum | string): GcbBindingServiceAll {
        this['binding_service'] = bindingService;
        return this;
    }
    public set bindingService(bindingService: GcbBindingServiceAllBindingServiceEnum | string  | undefined) {
        this['binding_service'] = bindingService;
    }
    public get bindingService(): GcbBindingServiceAllBindingServiceEnum | string | undefined {
        return this['binding_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcbBindingServiceAllBindingServiceEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN',
    ALL = 'ALL'
}

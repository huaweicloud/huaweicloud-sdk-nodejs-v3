

export class ListFunctionTemplateRequest {
    public marker?: string;
    public maxitems?: string;
    public ispublic?: string;
    public runtime?: string;
    public scene?: string;
    public service?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListFunctionTemplateRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListFunctionTemplateRequest {
        this['maxitems'] = maxitems;
        return this;
    }
    public withIspublic(ispublic: string): ListFunctionTemplateRequest {
        this['ispublic'] = ispublic;
        return this;
    }
    public withRuntime(runtime: string): ListFunctionTemplateRequest {
        this['runtime'] = runtime;
        return this;
    }
    public withScene(scene: string): ListFunctionTemplateRequest {
        this['scene'] = scene;
        return this;
    }
    public withService(service: string): ListFunctionTemplateRequest {
        this['service'] = service;
        return this;
    }
}
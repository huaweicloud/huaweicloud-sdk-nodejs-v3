

export class ShowEventDataRequest {
    public namespace?: string;
    private 'dim.0'?: string;
    private 'dim.1'?: string;
    private 'dim.2'?: string;
    private 'dim.3'?: string;
    public type?: string;
    public from?: number;
    public to?: number;
    public constructor(namespace?: string, dim0?: string, type?: string, from?: number, to?: number) { 
        this['namespace'] = namespace;
        this['dim.0'] = dim0;
        this['type'] = type;
        this['from'] = from;
        this['to'] = to;
    }
    public withNamespace(namespace: string): ShowEventDataRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withDim0(dim0: string): ShowEventDataRequest {
        this['dim.0'] = dim0;
        return this;
    }
    public set dim0(dim0: string  | undefined) {
        this['dim.0'] = dim0;
    }
    public get dim0(): string | undefined {
        return this['dim.0'];
    }
    public withDim1(dim1: string): ShowEventDataRequest {
        this['dim.1'] = dim1;
        return this;
    }
    public set dim1(dim1: string  | undefined) {
        this['dim.1'] = dim1;
    }
    public get dim1(): string | undefined {
        return this['dim.1'];
    }
    public withDim2(dim2: string): ShowEventDataRequest {
        this['dim.2'] = dim2;
        return this;
    }
    public set dim2(dim2: string  | undefined) {
        this['dim.2'] = dim2;
    }
    public get dim2(): string | undefined {
        return this['dim.2'];
    }
    public withDim3(dim3: string): ShowEventDataRequest {
        this['dim.3'] = dim3;
        return this;
    }
    public set dim3(dim3: string  | undefined) {
        this['dim.3'] = dim3;
    }
    public get dim3(): string | undefined {
        return this['dim.3'];
    }
    public withType(type: string): ShowEventDataRequest {
        this['type'] = type;
        return this;
    }
    public withFrom(from: number): ShowEventDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowEventDataRequest {
        this['to'] = to;
        return this;
    }
}
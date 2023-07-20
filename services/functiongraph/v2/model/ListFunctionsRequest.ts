

export class ListFunctionsRequest {
    public marker?: string;
    public maxitems?: string;
    private 'package_name'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListFunctionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListFunctionsRequest {
        this['maxitems'] = maxitems;
        return this;
    }
    public withPackageName(packageName: string): ListFunctionsRequest {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
}
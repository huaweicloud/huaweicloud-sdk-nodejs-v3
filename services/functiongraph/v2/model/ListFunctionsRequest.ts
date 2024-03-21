

export class ListFunctionsRequest {
    public marker?: string;
    public maxitems?: string;
    private 'package_name'?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
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
    public withContentType(contentType: string): ListFunctionsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}
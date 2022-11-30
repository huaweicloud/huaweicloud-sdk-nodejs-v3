

export class FaceSearchBase64Req {
    public filter?: string;
    private 'top_n'?: number | undefined;
    private 'image_base64': string | undefined;
    private 'return_fields'?: Array<string> | undefined;
    public threshold?: number;
    public sort?: Array<{ [key: string]: string; }>;
    public constructor(imageBase64?: any) { 
        this['image_base64'] = imageBase64;
    }
    public withFilter(filter: string): FaceSearchBase64Req {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): FaceSearchBase64Req {
        this['top_n'] = topN;
        return this;
    }
    public set topN(topN: number | undefined) {
        this['top_n'] = topN;
    }
    public get topN() {
        return this['top_n'];
    }
    public withImageBase64(imageBase64: string): FaceSearchBase64Req {
        this['image_base64'] = imageBase64;
        return this;
    }
    public set imageBase64(imageBase64: string | undefined) {
        this['image_base64'] = imageBase64;
    }
    public get imageBase64() {
        return this['image_base64'];
    }
    public withReturnFields(returnFields: Array<string>): FaceSearchBase64Req {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: Array<string> | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields() {
        return this['return_fields'];
    }
    public withThreshold(threshold: number): FaceSearchBase64Req {
        this['threshold'] = threshold;
        return this;
    }
    public withSort(sort: Array<{ [key: string]: string; }>): FaceSearchBase64Req {
        this['sort'] = sort;
        return this;
    }
}
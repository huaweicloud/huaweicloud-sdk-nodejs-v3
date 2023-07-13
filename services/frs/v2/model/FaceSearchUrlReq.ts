

export class FaceSearchUrlReq {
    public filter?: string;
    private 'top_n'?: number | undefined;
    private 'image_url': string | undefined;
    private 'return_fields'?: Array<string> | undefined;
    public threshold?: number;
    public sort?: Array<{ [key: string]: string; }>;
    public constructor(imageUrl?: any) { 
        this['image_url'] = imageUrl;
    }
    public withFilter(filter: string): FaceSearchUrlReq {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): FaceSearchUrlReq {
        this['top_n'] = topN;
        return this;
    }
    public set topN(topN: number | undefined) {
        this['top_n'] = topN;
    }
    public get topN() {
        return this['top_n'];
    }
    public withImageUrl(imageUrl: string): FaceSearchUrlReq {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl() {
        return this['image_url'];
    }
    public withReturnFields(returnFields: Array<string>): FaceSearchUrlReq {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: Array<string> | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields() {
        return this['return_fields'];
    }
    public withThreshold(threshold: number): FaceSearchUrlReq {
        this['threshold'] = threshold;
        return this;
    }
    public withSort(sort: Array<{ [key: string]: string; }>): FaceSearchUrlReq {
        this['sort'] = sort;
        return this;
    }
}
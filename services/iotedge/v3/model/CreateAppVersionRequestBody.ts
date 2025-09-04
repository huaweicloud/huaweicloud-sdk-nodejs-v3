

export class CreateAppVersionRequestBody {
    public chart?: any;
    public images?: string;
    public constructor(chart?: any) { 
        this['chart'] = chart;
    }
    public withChart(chart: any): CreateAppVersionRequestBody {
        this['chart'] = chart;
        return this;
    }
    public withImages(images: string): CreateAppVersionRequestBody {
        this['images'] = images;
        return this;
    }
}
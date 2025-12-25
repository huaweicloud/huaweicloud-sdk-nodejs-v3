import { MarginInfo } from './MarginInfo';


export class PageConfigPx {
    public width?: number;
    public height?: number;
    public margin?: MarginInfo;
    public constructor() { 
    }
    public withWidth(width: number): PageConfigPx {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): PageConfigPx {
        this['height'] = height;
        return this;
    }
    public withMargin(margin: MarginInfo): PageConfigPx {
        this['margin'] = margin;
        return this;
    }
}
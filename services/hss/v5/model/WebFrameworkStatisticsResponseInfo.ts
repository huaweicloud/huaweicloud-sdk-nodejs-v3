

export class WebFrameworkStatisticsResponseInfo {
    private 'file_name'?: string;
    public num?: number;
    public constructor() { 
    }
    public withFileName(fileName: string): WebFrameworkStatisticsResponseInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withNum(num: number): WebFrameworkStatisticsResponseInfo {
        this['num'] = num;
        return this;
    }
}
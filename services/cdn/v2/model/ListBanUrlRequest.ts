

export class ListBanUrlRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'page_size'?: number;
    private 'page_number'?: number;
    public url?: string;
    public constructor() { 
    }
    public withStartTime(startTime: number): ListBanUrlRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListBanUrlRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withPageSize(pageSize: number): ListBanUrlRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withPageNumber(pageNumber: number): ListBanUrlRequest {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withUrl(url: string): ListBanUrlRequest {
        this['url'] = url;
        return this;
    }
}
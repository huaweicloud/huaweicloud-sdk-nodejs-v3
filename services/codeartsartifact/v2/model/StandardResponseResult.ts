import { ReleaseFileVersionDo } from './ReleaseFileVersionDo';


export class StandardResponseResult {
    public data?: Array<ReleaseFileVersionDo>;
    private 'total_records'?: number;
    private 'total_pages'?: number;
    public constructor() { 
    }
    public withData(data: Array<ReleaseFileVersionDo>): StandardResponseResult {
        this['data'] = data;
        return this;
    }
    public withTotalRecords(totalRecords: number): StandardResponseResult {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withTotalPages(totalPages: number): StandardResponseResult {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
}
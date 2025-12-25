import { BasePaginationResponseEntityV5 } from './BasePaginationResponseEntityV5';
import { RepoFileDOV5 } from './RepoFileDOV5';


export class RepoFileDOV5Page {
    private 'total_records'?: number;
    private 'total_pages'?: number;
    public data?: Array<RepoFileDOV5>;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): RepoFileDOV5Page {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withTotalPages(totalPages: number): RepoFileDOV5Page {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
    public withData(data: Array<RepoFileDOV5>): RepoFileDOV5Page {
        this['data'] = data;
        return this;
    }
}
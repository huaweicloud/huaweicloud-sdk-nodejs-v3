import { BasePaginationResponseEntityV5 } from './BasePaginationResponseEntityV5';
import { DomainIPWhiteListModel } from './DomainIPWhiteListModel';


export class DomainIPWhiteListModelPage {
    private 'total_records'?: number;
    private 'total_pages'?: number;
    public data?: Array<DomainIPWhiteListModel>;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): DomainIPWhiteListModelPage {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withTotalPages(totalPages: number): DomainIPWhiteListModelPage {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
    public withData(data: Array<DomainIPWhiteListModel>): DomainIPWhiteListModelPage {
        this['data'] = data;
        return this;
    }
}
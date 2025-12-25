import { BasePaginationResponseEntityV5 } from './BasePaginationResponseEntityV5';
import { DevcloudUserDOV5 } from './DevcloudUserDOV5';


export class DevcloudUserDOV5Page {
    private 'total_records'?: number;
    private 'total_pages'?: number;
    public data?: Array<DevcloudUserDOV5>;
    public constructor() { 
    }
    public withTotalRecords(totalRecords: number): DevcloudUserDOV5Page {
        this['total_records'] = totalRecords;
        return this;
    }
    public set totalRecords(totalRecords: number  | undefined) {
        this['total_records'] = totalRecords;
    }
    public get totalRecords(): number | undefined {
        return this['total_records'];
    }
    public withTotalPages(totalPages: number): DevcloudUserDOV5Page {
        this['total_pages'] = totalPages;
        return this;
    }
    public set totalPages(totalPages: number  | undefined) {
        this['total_pages'] = totalPages;
    }
    public get totalPages(): number | undefined {
        return this['total_pages'];
    }
    public withData(data: Array<DevcloudUserDOV5>): DevcloudUserDOV5Page {
        this['data'] = data;
        return this;
    }
}
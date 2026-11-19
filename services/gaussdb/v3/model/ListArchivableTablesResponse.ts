import { ArchivableTable } from './ArchivableTable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListArchivableTablesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'archivable_tables'?: Array<ArchivableTable>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListArchivableTablesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withArchivableTables(archivableTables: Array<ArchivableTable>): ListArchivableTablesResponse {
        this['archivable_tables'] = archivableTables;
        return this;
    }
    public set archivableTables(archivableTables: Array<ArchivableTable>  | undefined) {
        this['archivable_tables'] = archivableTables;
    }
    public get archivableTables(): Array<ArchivableTable> | undefined {
        return this['archivable_tables'];
    }
}